import {StringProperty} from "../StringProperty"


type Properties = {
  WorkspaceId: StringProperty
  ComponentTypeId: StringProperty
  Description?: StringProperty
  ExtendsFrom?: StringProperty[]
  Functions?: Record<string, any>
  IsSingleton?: boolean
  PropertyDefinitions?: Record<string, any>
  PropertyGroups?: Record<string, any>
  CompositeComponentTypes?: Record<string, any>
  Arn?: StringProperty
  CreationDateTime?: StringProperty
  UpdateDateTime?: StringProperty
  Status?: {
    State?: (string | "CREATING" | "UPDATING" | "DELETING" | "ACTIVE" | "ERROR")
    Error?: Record<string, any>
  }
  IsAbstract?: boolean
  IsSchemaInitialized?: boolean
  Tags?: Record<string, any>
}

export const AWSIoTTwinMakerComponentType = ({
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
      Type: 'AWS::IoTTwinMaker::ComponentType',
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