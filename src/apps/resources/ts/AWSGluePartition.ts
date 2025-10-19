import {StringProperty} from "../StringProperty"


type Properties = {
  DatabaseName: StringProperty
  TableName: StringProperty
  Id?: StringProperty
  CatalogId: StringProperty
  PartitionInput: {
    StorageDescriptor?: {
      StoredAsSubDirectories?: boolean
      Parameters?: Record<string, any>
      BucketColumns?: StringProperty[]
      NumberOfBuckets?: number
      OutputFormat?: StringProperty
      Columns?: {
        Comment?: StringProperty
        Type?: StringProperty
        Name: StringProperty
      }[]
      SerdeInfo?: {
        Parameters?: Record<string, any>
        SerializationLibrary?: StringProperty
        Name?: StringProperty
      }
      SortColumns?: {
        Column: StringProperty
        SortOrder?: number
      }[]
      Compressed?: boolean
      SchemaReference?: {
        SchemaId?: {
          RegistryName?: StringProperty
          SchemaName?: StringProperty
          SchemaArn?: StringProperty
        }
        SchemaVersionId?: StringProperty
        SchemaVersionNumber?: number
      }
      SkewedInfo?: {
        SkewedColumnValues?: StringProperty[]
        SkewedColumnValueLocationMaps?: Record<string, any>
        SkewedColumnNames?: StringProperty[]
      }
      InputFormat?: StringProperty
      Location?: StringProperty
    }
    Values: StringProperty[]
    Parameters?: Record<string, any>
  }
}

export const AWSGluePartition = ({
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
      Type: 'AWS::Glue::Partition',
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