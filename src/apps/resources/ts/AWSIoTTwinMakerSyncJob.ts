import {StringProperty} from "../StringProperty"


type Properties = {
  WorkspaceId: StringProperty
  SyncSource: StringProperty
  SyncRole: StringProperty
  CreationDateTime?: StringProperty
  UpdateDateTime?: StringProperty
  Arn?: StringProperty
  State?: StringProperty
  Tags?: Record<string, any>
}

export const AWSIoTTwinMakerSyncJob = ({
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
      Type: 'AWS::IoTTwinMaker::SyncJob',
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