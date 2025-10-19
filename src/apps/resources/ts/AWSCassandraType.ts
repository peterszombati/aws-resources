import {StringProperty} from "../StringProperty"


type Properties = {
  KeyspaceName: StringProperty
  TypeName: StringProperty
  Fields: {
    FieldName: StringProperty
    FieldType: StringProperty
  }[]
  DirectReferringTables?: StringProperty[]
  DirectParentTypes?: StringProperty[]
  MaxNestingDepth?: number
  LastModifiedTimestamp?: number
  KeyspaceArn?: StringProperty
}

export const AWSCassandraType = ({
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
      Type: 'AWS::Cassandra::Type',
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