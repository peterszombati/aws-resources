import {StringProperty} from "../StringProperty"


type Properties = {
  EntityId?: StringProperty
  EntityName: StringProperty
  Status?: {
    State?: (string | "CREATING" | "UPDATING" | "DELETING" | "ACTIVE" | "ERROR")
    Error?: Record<string, any>
  }
  HasChildEntities?: boolean
  ParentEntityId?: StringProperty
  Arn?: StringProperty
  Description?: StringProperty
  CreationDateTime?: StringProperty
  UpdateDateTime?: StringProperty
  Tags?: Record<string, any>
  WorkspaceId: StringProperty
  Components?: Record<string, any>
  CompositeComponents?: Record<string, any>
}

export const AWSIoTTwinMakerEntity = ({
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
      Type: 'AWS::IoTTwinMaker::Entity',
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