import {StringProperty} from "../StringProperty"


type Properties = {
  WorkspaceId: StringProperty
  Arn?: StringProperty
  Description?: StringProperty
  Role: StringProperty
  S3Location: StringProperty
  CreationDateTime?: StringProperty
  UpdateDateTime?: StringProperty
  Tags?: Record<string, any>
}

export const AWSIoTTwinMakerWorkspace = ({
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
      Type: 'AWS::IoTTwinMaker::Workspace',
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