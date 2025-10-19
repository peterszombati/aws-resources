import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Version: StringProperty
  Description?: StringProperty
  ChangeDescription?: StringProperty
  Type?: (string | "BUILD" | "TEST")
  Platform: (string | "Windows" | "Linux" | "macOS")
  Data?: StringProperty
  KmsKeyId?: StringProperty
  Encrypted?: boolean
  Tags?: Record<string, any>
  Uri?: StringProperty
  SupportedOsVersions?: StringProperty[]
  LatestVersion?: {
    Arn?: StringProperty
    Major?: StringProperty
    Minor?: StringProperty
    Patch?: StringProperty
  }
}

export const AWSImageBuilderComponent = ({
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
      Type: 'AWS::ImageBuilder::Component',
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