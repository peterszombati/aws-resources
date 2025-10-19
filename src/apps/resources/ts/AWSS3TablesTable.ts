import {StringProperty} from "../StringProperty"


type Properties = {
  WithoutMetadata?: (string | "Yes")
  Compaction?: {
    Status?: (string | "enabled" | "disabled")
    TargetFileSizeMB?: number
  }
  Namespace: StringProperty
  TableName: StringProperty
  TableBucketARN: StringProperty
  VersionToken?: StringProperty
  TableARN?: StringProperty
  OpenTableFormat: (string | "ICEBERG")
  IcebergMetadata?: {
    IcebergSchema: {
      SchemaFieldList: {
        Type: StringProperty
        Required?: boolean
        Name: StringProperty
      }[]
    }
  }
  WarehouseLocation?: StringProperty
  SnapshotManagement?: {
    Status?: (string | "enabled" | "disabled")
    MinSnapshotsToKeep?: number
    MaxSnapshotAgeHours?: number
  }
}

export const AWSS3TablesTable = ({
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
      Type: 'AWS::S3Tables::Table',
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