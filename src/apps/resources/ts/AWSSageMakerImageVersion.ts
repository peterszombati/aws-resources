import {StringProperty} from "../StringProperty"


type Properties = {
  ImageName: StringProperty
  ImageArn?: StringProperty
  ImageVersionArn?: StringProperty
  BaseImage: StringProperty
  ContainerImage?: StringProperty
  Version?: number
  Alias?: StringProperty
  Aliases?: StringProperty[]
  VendorGuidance?: (string | "NOT_PROVIDED" | "STABLE" | "TO_BE_ARCHIVED" | "ARCHIVED")
  JobType?: (string | "TRAINING" | "INFERENCE" | "NOTEBOOK_KERNEL")
  MLFramework?: StringProperty
  ProgrammingLang?: StringProperty
  Processor?: (string | "CPU" | "GPU")
  Horovod?: boolean
  ReleaseNotes?: StringProperty
}

export const AWSSageMakerImageVersion = ({
                                           ResourceName,
                                           DependsOn,
                                           Properties,
                                         }: {
  ResourceName: string
  DependsOn?: string | string[]
  Properties: Record<string, any> & Properties
}) => ({
  Resources: {
    [ResourceName]: {
      Type: 'AWS::SageMaker::ImageVersion',
      DependsOn,
      Properties,
    }
  },
  Outputs: {
    [ResourceName]: {
      Value: {
        "Ref": ResourceName,
      },
      Export: {
        Name: {
          "Fn::Sub": "stack:${AWS::StackName}:" + ResourceName
        }
      }
    }
  }
})