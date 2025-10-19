import {StringProperty} from "../StringProperty"


type Properties = {
  DatabaseName: StringProperty
  TableInput: {
    Owner?: StringProperty
    ViewOriginalText?: StringProperty
    Description?: StringProperty
    TableType?: StringProperty
    Parameters?: Record<string, any>
    ViewExpandedText?: StringProperty
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
        SortOrder: number
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
    TargetTable?: {
      DatabaseName?: StringProperty
      Region?: StringProperty
      CatalogId?: StringProperty
      Name?: StringProperty
    }
    PartitionKeys?: {
      Comment?: StringProperty
      Type?: StringProperty
      Name: StringProperty
    }[]
    Retention?: number
    Name?: StringProperty
  }
  OpenTableFormatInput?: {
    IcebergInput?: {
      MetadataOperation?: Record<string, any>
      Version?: StringProperty
    }
  }
  Id?: StringProperty
  CatalogId: StringProperty
}

export const AWSGlueTable = ({
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
      Type: 'AWS::Glue::Table',
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