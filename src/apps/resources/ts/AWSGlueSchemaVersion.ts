import {StringProperty} from "../StringProperty"


type Properties = {
  Schema: {
    SchemaArn?: StringProperty
    SchemaName?: StringProperty
    RegistryName?: StringProperty
  }
  SchemaDefinition: StringProperty
  VersionId?: StringProperty
}

export const AWSGlueSchemaVersion = ({
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
      Type: 'AWS::Glue::SchemaVersion',
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