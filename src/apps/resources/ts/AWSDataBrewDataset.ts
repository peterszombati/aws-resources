import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Format?: (string | "CSV" | "JSON" | "PARQUET" | "EXCEL" | "ORC")
  FormatOptions?: {
    Json?: {
      MultiLine?: boolean
    }
    Excel?: {
      SheetNames?: StringProperty[]
      SheetIndexes?: number[]
      HeaderRow?: boolean
    }
    Csv?: {
      Delimiter?: StringProperty
      HeaderRow?: boolean
    }
  }
  Input: {
    S3InputDefinition?: {
      Bucket: StringProperty
      Key?: StringProperty
      BucketOwner?: StringProperty
    }
    DataCatalogInputDefinition?: {
      CatalogId?: StringProperty
      DatabaseName?: StringProperty
      TableName?: StringProperty
      TempDirectory?: {
        Bucket: StringProperty
        Key?: StringProperty
        BucketOwner?: StringProperty
      }
    }
    DatabaseInputDefinition?: {
      GlueConnectionName: StringProperty
      DatabaseTableName?: StringProperty
      TempDirectory?: {
        Bucket: StringProperty
        Key?: StringProperty
        BucketOwner?: StringProperty
      }
      QueryString?: StringProperty
    }
    Metadata?: {
      SourceArn?: StringProperty
    }
  }
  Source?: (string | "S3" | "DATA-CATALOG" | "DATABASE")
  PathOptions?: {
    FilesLimit?: {
      MaxFiles: number
      OrderedBy?: (string | "LAST_MODIFIED_DATE")
      Order?: (string | "ASCENDING" | "DESCENDING")
    }
    LastModifiedDateCondition?: {
      Expression: StringProperty
      ValuesMap: {
        ValueReference: StringProperty
        Value: StringProperty
      }[]
    }
    Parameters?: {
      PathParameterName: StringProperty
      DatasetParameter: {
        Name: StringProperty
        Type: (string | "String" | "Number" | "Datetime")
        DatetimeOptions?: {
          Format: StringProperty
          TimezoneOffset?: StringProperty
          LocaleCode?: StringProperty
        }
        CreateColumn?: boolean
        Filter?: {
          Expression: StringProperty
          ValuesMap: {
            ValueReference: StringProperty
            Value: StringProperty
          }[]
        }
      }
    }[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDataBrewDataset = ({
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
      Type: 'AWS::DataBrew::Dataset',
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