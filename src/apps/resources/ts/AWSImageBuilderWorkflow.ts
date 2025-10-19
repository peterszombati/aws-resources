import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Version: StringProperty
  Description?: StringProperty
  ChangeDescription?: StringProperty
  Type: (string | "BUILD" | "TEST" | "DISTRIBUTION")
  Data?: StringProperty
  Uri?: StringProperty
  KmsKeyId?: StringProperty
  Tags?: Record<string, any>
  LatestVersion?: {
    Arn?: StringProperty
    Major?: StringProperty
    Minor?: StringProperty
    Patch?: StringProperty
  }
}

export const AWSImageBuilderWorkflow = ({
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
      Type: 'AWS::ImageBuilder::Workflow',
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