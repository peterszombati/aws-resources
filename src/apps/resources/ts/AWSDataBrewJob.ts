import {StringProperty} from "../StringProperty"


type Properties = {
  DatasetName?: StringProperty
  EncryptionKeyArn?: StringProperty
  EncryptionMode?: (string | "SSE-KMS" | "SSE-S3")
  Name: StringProperty
  Type: (string | "PROFILE" | "RECIPE")
  LogSubscription?: (string | "ENABLE" | "DISABLE")
  MaxCapacity?: number
  MaxRetries?: number
  Outputs?: {
    CompressionFormat?: (string | "GZIP" | "LZ4" | "SNAPPY" | "BZIP2" | "DEFLATE" | "LZO" | "BROTLI" | "ZSTD" | "ZLIB")
    Format?: (string | "CSV" | "JSON" | "PARQUET" | "GLUEPARQUET" | "AVRO" | "ORC" | "XML" | "TABLEAUHYPER")
    FormatOptions?: {
      Csv?: {
        Delimiter?: StringProperty
      }
    }
    PartitionColumns?: StringProperty[]
    Location: {
      Bucket: StringProperty
      Key?: StringProperty
      BucketOwner?: StringProperty
    }
    Overwrite?: boolean
    MaxOutputFiles?: number
  }[]
  DataCatalogOutputs?: {
    CatalogId?: StringProperty
    DatabaseName: StringProperty
    TableName: StringProperty
    S3Options?: {
      Location: {
        Bucket: StringProperty
        Key?: StringProperty
        BucketOwner?: StringProperty
      }
    }
    DatabaseOptions?: {
      TempDirectory?: {
        Bucket: StringProperty
        Key?: StringProperty
        BucketOwner?: StringProperty
      }
      TableName: StringProperty
    }
    Overwrite?: boolean
  }[]
  DatabaseOutputs?: {
    GlueConnectionName: StringProperty
    DatabaseOutputMode?: (string | "NEW_TABLE")
    DatabaseOptions: {
      TempDirectory?: {
        Bucket: StringProperty
        Key?: StringProperty
        BucketOwner?: StringProperty
      }
      TableName: StringProperty
    }
  }[]
  OutputLocation?: {
    Bucket: StringProperty
    Key?: StringProperty
    BucketOwner?: StringProperty
  }
  ProjectName?: StringProperty
  Recipe?: {
    Name: StringProperty
    Version?: StringProperty
  }
  RoleArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Timeout?: number
  JobSample?: {
    Mode?: (string | "FULL_DATASET" | "CUSTOM_ROWS")
    Size?: number /* schema format: int64*/
  }
  ProfileConfiguration?: {
    DatasetStatisticsConfiguration?: {
      IncludedStatistics?: StringProperty[]
      Overrides?: {
        Statistic: StringProperty
        Parameters: Record<string, any>
      }[]
    }
    ProfileColumns?: {
      Regex?: StringProperty
      Name?: StringProperty
    }[]
    ColumnStatisticsConfigurations?: {
      Selectors?: {
        Regex?: StringProperty
        Name?: StringProperty
      }[]
      Statistics: {
        IncludedStatistics?: StringProperty[]
        Overrides?: {
          Statistic: StringProperty
          Parameters: Record<string, any>
        }[]
      }
    }[]
    EntityDetectorConfiguration?: {
      EntityTypes: StringProperty[]
      AllowedStatistics?: {
        Statistics: StringProperty[]
      }
    }
  }
  ValidationConfigurations?: {
    RulesetArn: StringProperty
    ValidationMode?: (string | "CHECK_ALL")
  }[]
}

export const AWSDataBrewJob = ({
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
      Type: 'AWS::DataBrew::Job',
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