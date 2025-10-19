import {StringProperty} from "../StringProperty"


type Properties = {
  Type: StringProperty
  Description?: StringProperty
  SchemaVersion?: StringProperty
  Content: StringProperty
  RegistryName: StringProperty
  SchemaArn?: StringProperty
  SchemaName?: StringProperty
  LastModified?: StringProperty
  VersionCreatedDate?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEventSchemasSchema = ({
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
      Type: 'AWS::EventSchemas::Schema',
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