import {StringProperty} from "../StringProperty"


type Properties = {
  ResourcePolicy: Record<string, any> | StringProperty
  TableName?: StringProperty
  TableBucketARN?: StringProperty
  TableARN: StringProperty
  Namespace?: StringProperty
}

export const AWSS3TablesTablePolicy = ({
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
      Type: 'AWS::S3Tables::TablePolicy',
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