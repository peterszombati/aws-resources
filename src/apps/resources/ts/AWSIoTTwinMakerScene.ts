import {StringProperty} from "../StringProperty"


type Properties = {
  SceneId: StringProperty
  Arn?: StringProperty
  Description?: StringProperty
  ContentLocation: StringProperty
  CreationDateTime?: StringProperty
  UpdateDateTime?: StringProperty
  Tags?: Record<string, any>
  WorkspaceId: StringProperty
  Capabilities?: StringProperty[]
  SceneMetadata?: Record<string, any>
  GeneratedSceneMetadata?: Record<string, any>
}

export const AWSIoTTwinMakerScene = ({
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
      Type: 'AWS::IoTTwinMaker::Scene',
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