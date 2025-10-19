import {StringProperty} from "../StringProperty"


type Properties = {
  DeliveryStreamEncryptionConfigurationInput?: {
    KeyType: (string | "AWS_OWNED_CMK" | "CUSTOMER_MANAGED_CMK")
    KeyARN?: StringProperty
  }
  HttpEndpointDestinationConfiguration?: {
    RequestConfiguration?: {
      CommonAttributes?: {
        AttributeValue: StringProperty
        AttributeName: StringProperty
      }[]
      ContentEncoding?: (string | "NONE" | "GZIP")
    }
    S3Configuration: {
      ErrorOutputPrefix?: StringProperty
      BucketARN: StringProperty
      BufferingHints?: {
        IntervalInSeconds?: number
        SizeInMBs?: number
      }
      CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
      EncryptionConfiguration?: {
        KMSEncryptionConfig?: {
          AWSKMSKeyARN: StringProperty
        }
        NoEncryptionConfig?: (string | "NoEncryption")
      }
      Prefix?: StringProperty
      CloudWatchLoggingOptions?: {
        LogStreamName?: StringProperty
        Enabled?: boolean
        LogGroupName?: StringProperty
      }
      RoleARN: StringProperty
    }
    BufferingHints?: {
      IntervalInSeconds?: number
      SizeInMBs?: number
    }
    RetryOptions?: {
      DurationInSeconds?: number
    }
    SecretsManagerConfiguration?: {
      SecretARN?: StringProperty
      Enabled: boolean
      RoleARN?: StringProperty
    }
    EndpointConfiguration: {
      AccessKey?: StringProperty
      Url: StringProperty
      Name?: StringProperty
    }
    ProcessingConfiguration?: {
      Enabled?: boolean
      Processors?: {
        Type: (string | "RecordDeAggregation" | "Decompression" | "CloudWatchLogProcessing" | "Lambda" | "MetadataExtraction" | "AppendDelimiterToRecord")
        Parameters?: {
          ParameterValue: StringProperty
          ParameterName: StringProperty
        }[]
      }[]
    }
    RoleARN?: StringProperty
    CloudWatchLoggingOptions?: {
      LogStreamName?: StringProperty
      Enabled?: boolean
      LogGroupName?: StringProperty
    }
    S3BackupMode?: StringProperty
  }
  KinesisStreamSourceConfiguration?: {
    KinesisStreamARN: StringProperty
    RoleARN: StringProperty
  }
  DeliveryStreamType?: (string | "DatabaseAsSource" | "DirectPut" | "KinesisStreamAsSource" | "MSKAsSource")
  IcebergDestinationConfiguration?: {
    CatalogConfiguration: {
      CatalogArn?: StringProperty
      WarehouseLocation?: StringProperty
    }
    S3Configuration: {
      ErrorOutputPrefix?: StringProperty
      BucketARN: StringProperty
      BufferingHints?: {
        IntervalInSeconds?: number
        SizeInMBs?: number
      }
      CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
      EncryptionConfiguration?: {
        KMSEncryptionConfig?: {
          AWSKMSKeyARN: StringProperty
        }
        NoEncryptionConfig?: (string | "NoEncryption")
      }
      Prefix?: StringProperty
      CloudWatchLoggingOptions?: {
        LogStreamName?: StringProperty
        Enabled?: boolean
        LogGroupName?: StringProperty
      }
      RoleARN: StringProperty
    }
    DestinationTableConfigurationList?: {
      DestinationDatabaseName: StringProperty
      S3ErrorOutputPrefix?: StringProperty
      DestinationTableName: StringProperty
      UniqueKeys?: StringProperty[]
      PartitionSpec?: {
        Identity?: {
          SourceName: StringProperty
        }[]
      }
    }[]
    BufferingHints?: {
      IntervalInSeconds?: number
      SizeInMBs?: number
    }
    TableCreationConfiguration?: {
      Enabled?: boolean
    }
    RetryOptions?: {
      DurationInSeconds?: number
    }
    s3BackupMode?: (string | "AllData" | "FailedDataOnly")
    ProcessingConfiguration?: {
      Enabled?: boolean
      Processors?: {
        Type: (string | "RecordDeAggregation" | "Decompression" | "CloudWatchLogProcessing" | "Lambda" | "MetadataExtraction" | "AppendDelimiterToRecord")
        Parameters?: {
          ParameterValue: StringProperty
          ParameterName: StringProperty
        }[]
      }[]
    }
    SchemaEvolutionConfiguration?: {
      Enabled?: boolean
    }
    AppendOnly?: boolean
    CloudWatchLoggingOptions?: {
      LogStreamName?: StringProperty
      Enabled?: boolean
      LogGroupName?: StringProperty
    }
    RoleARN: StringProperty
  }
  RedshiftDestinationConfiguration?: {
    S3BackupConfiguration?: {
      ErrorOutputPrefix?: StringProperty
      BucketARN: StringProperty
      BufferingHints?: {
        IntervalInSeconds?: number
        SizeInMBs?: number
      }
      CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
      EncryptionConfiguration?: {
        KMSEncryptionConfig?: {
          AWSKMSKeyARN: StringProperty
        }
        NoEncryptionConfig?: (string | "NoEncryption")
      }
      Prefix?: StringProperty
      CloudWatchLoggingOptions?: {
        LogStreamName?: StringProperty
        Enabled?: boolean
        LogGroupName?: StringProperty
      }
      RoleARN: StringProperty
    }
    S3Configuration: {
      ErrorOutputPrefix?: StringProperty
      BucketARN: StringProperty
      BufferingHints?: {
        IntervalInSeconds?: number
        SizeInMBs?: number
      }
      CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
      EncryptionConfiguration?: {
        KMSEncryptionConfig?: {
          AWSKMSKeyARN: StringProperty
        }
        NoEncryptionConfig?: (string | "NoEncryption")
      }
      Prefix?: StringProperty
      CloudWatchLoggingOptions?: {
        LogStreamName?: StringProperty
        Enabled?: boolean
        LogGroupName?: StringProperty
      }
      RoleARN: StringProperty
    }
    Username?: StringProperty
    CopyCommand: {
      DataTableName: StringProperty
      CopyOptions?: StringProperty
      DataTableColumns?: StringProperty
    }
    RetryOptions?: {
      DurationInSeconds?: number
    }
    SecretsManagerConfiguration?: {
      SecretARN?: StringProperty
      Enabled: boolean
      RoleARN?: StringProperty
    }
    ProcessingConfiguration?: {
      Enabled?: boolean
      Processors?: {
        Type: (string | "RecordDeAggregation" | "Decompression" | "CloudWatchLogProcessing" | "Lambda" | "MetadataExtraction" | "AppendDelimiterToRecord")
        Parameters?: {
          ParameterValue: StringProperty
          ParameterName: StringProperty
        }[]
      }[]
    }
    CloudWatchLoggingOptions?: {
      LogStreamName?: StringProperty
      Enabled?: boolean
      LogGroupName?: StringProperty
    }
    ClusterJDBCURL: StringProperty
    RoleARN: StringProperty
    Password?: StringProperty
    S3BackupMode?: (string | "Disabled" | "Enabled")
  }
  AmazonopensearchserviceDestinationConfiguration?: {
    TypeName?: StringProperty
    IndexRotationPeriod?: (string | "NoRotation" | "OneHour" | "OneDay" | "OneWeek" | "OneMonth")
    ProcessingConfiguration?: {
      Enabled?: boolean
      Processors?: {
        Type: (string | "RecordDeAggregation" | "Decompression" | "CloudWatchLogProcessing" | "Lambda" | "MetadataExtraction" | "AppendDelimiterToRecord")
        Parameters?: {
          ParameterValue: StringProperty
          ParameterName: StringProperty
        }[]
      }[]
    }
    ClusterEndpoint?: StringProperty
    DomainARN?: StringProperty
    RoleARN: StringProperty
    S3BackupMode?: (string | "FailedDocumentsOnly" | "AllDocuments")
    IndexName: StringProperty
    DocumentIdOptions?: {
      DefaultDocumentIdFormat: (string | "FIREHOSE_DEFAULT" | "NO_DOCUMENT_ID")
    }
    S3Configuration: {
      ErrorOutputPrefix?: StringProperty
      BucketARN: StringProperty
      BufferingHints?: {
        IntervalInSeconds?: number
        SizeInMBs?: number
      }
      CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
      EncryptionConfiguration?: {
        KMSEncryptionConfig?: {
          AWSKMSKeyARN: StringProperty
        }
        NoEncryptionConfig?: (string | "NoEncryption")
      }
      Prefix?: StringProperty
      CloudWatchLoggingOptions?: {
        LogStreamName?: StringProperty
        Enabled?: boolean
        LogGroupName?: StringProperty
      }
      RoleARN: StringProperty
    }
    BufferingHints?: {
      IntervalInSeconds?: number
      SizeInMBs?: number
    }
    RetryOptions?: {
      DurationInSeconds?: number
    }
    VpcConfiguration?: {
      SubnetIds: StringProperty[]
      SecurityGroupIds: StringProperty[]
      RoleARN: StringProperty
    }
    CloudWatchLoggingOptions?: {
      LogStreamName?: StringProperty
      Enabled?: boolean
      LogGroupName?: StringProperty
    }
  }
  MSKSourceConfiguration?: {
    AuthenticationConfiguration: {
      Connectivity: (string | "PUBLIC" | "PRIVATE")
      RoleARN: StringProperty
    }
    ReadFromTimestamp?: StringProperty
    MSKClusterARN: StringProperty
    TopicName: StringProperty
  }
  DirectPutSourceConfiguration?: {
    ThroughputHintInMBs?: number
  }
  SplunkDestinationConfiguration?: {
    HECEndpoint: StringProperty
    S3Configuration: {
      ErrorOutputPrefix?: StringProperty
      BucketARN: StringProperty
      BufferingHints?: {
        IntervalInSeconds?: number
        SizeInMBs?: number
      }
      CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
      EncryptionConfiguration?: {
        KMSEncryptionConfig?: {
          AWSKMSKeyARN: StringProperty
        }
        NoEncryptionConfig?: (string | "NoEncryption")
      }
      Prefix?: StringProperty
      CloudWatchLoggingOptions?: {
        LogStreamName?: StringProperty
        Enabled?: boolean
        LogGroupName?: StringProperty
      }
      RoleARN: StringProperty
    }
    BufferingHints?: {
      IntervalInSeconds?: number
      SizeInMBs?: number
    }
    HECToken?: StringProperty
    RetryOptions?: {
      DurationInSeconds?: number
    }
    HECEndpointType: (string | "Raw" | "Event")
    SecretsManagerConfiguration?: {
      SecretARN?: StringProperty
      Enabled: boolean
      RoleARN?: StringProperty
    }
    HECAcknowledgmentTimeoutInSeconds?: number
    ProcessingConfiguration?: {
      Enabled?: boolean
      Processors?: {
        Type: (string | "RecordDeAggregation" | "Decompression" | "CloudWatchLogProcessing" | "Lambda" | "MetadataExtraction" | "AppendDelimiterToRecord")
        Parameters?: {
          ParameterValue: StringProperty
          ParameterName: StringProperty
        }[]
      }[]
    }
    CloudWatchLoggingOptions?: {
      LogStreamName?: StringProperty
      Enabled?: boolean
      LogGroupName?: StringProperty
    }
    S3BackupMode?: StringProperty
  }
  ExtendedS3DestinationConfiguration?: {
    ErrorOutputPrefix?: StringProperty
    S3BackupConfiguration?: {
      ErrorOutputPrefix?: StringProperty
      BucketARN: StringProperty
      BufferingHints?: {
        IntervalInSeconds?: number
        SizeInMBs?: number
      }
      CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
      EncryptionConfiguration?: {
        KMSEncryptionConfig?: {
          AWSKMSKeyARN: StringProperty
        }
        NoEncryptionConfig?: (string | "NoEncryption")
      }
      Prefix?: StringProperty
      CloudWatchLoggingOptions?: {
        LogStreamName?: StringProperty
        Enabled?: boolean
        LogGroupName?: StringProperty
      }
      RoleARN: StringProperty
    }
    BucketARN: StringProperty
    CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
    DataFormatConversionConfiguration?: {
      InputFormatConfiguration?: {
        Deserializer?: {
          HiveJsonSerDe?: {
            TimestampFormats?: StringProperty[]
          }
          OpenXJsonSerDe?: {
            ConvertDotsInJsonKeysToUnderscores?: boolean
            ColumnToJsonKeyMappings?: Record<string, any>
            CaseInsensitive?: boolean
          }
        }
      }
      Enabled?: boolean
      SchemaConfiguration?: {
        VersionId?: StringProperty
        TableName?: StringProperty
        DatabaseName?: StringProperty
        Region?: StringProperty
        CatalogId?: StringProperty
        RoleARN?: StringProperty
      }
      OutputFormatConfiguration?: {
        Serializer?: {
          OrcSerDe?: {
            PaddingTolerance?: number
            Compression?: StringProperty
            StripeSizeBytes?: number
            BloomFilterColumns?: StringProperty[]
            BloomFilterFalsePositiveProbability?: number
            EnablePadding?: boolean
            FormatVersion?: StringProperty
            RowIndexStride?: number
            BlockSizeBytes?: number
            DictionaryKeyThreshold?: number
          }
          ParquetSerDe?: {
            Compression?: StringProperty
            BlockSizeBytes?: number
            EnableDictionaryCompression?: boolean
            PageSizeBytes?: number
            MaxPaddingBytes?: number
            WriterVersion?: StringProperty
          }
        }
      }
    }
    EncryptionConfiguration?: {
      KMSEncryptionConfig?: {
        AWSKMSKeyARN: StringProperty
      }
      NoEncryptionConfig?: (string | "NoEncryption")
    }
    CustomTimeZone?: StringProperty
    DynamicPartitioningConfiguration?: {
      Enabled?: boolean
      RetryOptions?: {
        DurationInSeconds?: number
      }
    }
    Prefix?: StringProperty
    ProcessingConfiguration?: {
      Enabled?: boolean
      Processors?: {
        Type: (string | "RecordDeAggregation" | "Decompression" | "CloudWatchLogProcessing" | "Lambda" | "MetadataExtraction" | "AppendDelimiterToRecord")
        Parameters?: {
          ParameterValue: StringProperty
          ParameterName: StringProperty
        }[]
      }[]
    }
    RoleARN: StringProperty
    S3BackupMode?: (string | "Disabled" | "Enabled")
    BufferingHints?: {
      IntervalInSeconds?: number
      SizeInMBs?: number
    }
    FileExtension?: StringProperty
    CloudWatchLoggingOptions?: {
      LogStreamName?: StringProperty
      Enabled?: boolean
      LogGroupName?: StringProperty
    }
  }
  AmazonOpenSearchServerlessDestinationConfiguration?: {
    IndexName: StringProperty
    S3Configuration: {
      ErrorOutputPrefix?: StringProperty
      BucketARN: StringProperty
      BufferingHints?: {
        IntervalInSeconds?: number
        SizeInMBs?: number
      }
      CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
      EncryptionConfiguration?: {
        KMSEncryptionConfig?: {
          AWSKMSKeyARN: StringProperty
        }
        NoEncryptionConfig?: (string | "NoEncryption")
      }
      Prefix?: StringProperty
      CloudWatchLoggingOptions?: {
        LogStreamName?: StringProperty
        Enabled?: boolean
        LogGroupName?: StringProperty
      }
      RoleARN: StringProperty
    }
    BufferingHints?: {
      IntervalInSeconds?: number
      SizeInMBs?: number
    }
    RetryOptions?: {
      DurationInSeconds?: number
    }
    CollectionEndpoint?: StringProperty
    VpcConfiguration?: {
      SubnetIds: StringProperty[]
      SecurityGroupIds: StringProperty[]
      RoleARN: StringProperty
    }
    ProcessingConfiguration?: {
      Enabled?: boolean
      Processors?: {
        Type: (string | "RecordDeAggregation" | "Decompression" | "CloudWatchLogProcessing" | "Lambda" | "MetadataExtraction" | "AppendDelimiterToRecord")
        Parameters?: {
          ParameterValue: StringProperty
          ParameterName: StringProperty
        }[]
      }[]
    }
    CloudWatchLoggingOptions?: {
      LogStreamName?: StringProperty
      Enabled?: boolean
      LogGroupName?: StringProperty
    }
    RoleARN: StringProperty
    S3BackupMode?: (string | "FailedDocumentsOnly" | "AllDocuments")
  }
  ElasticsearchDestinationConfiguration?: {
    TypeName?: StringProperty
    IndexRotationPeriod?: (string | "NoRotation" | "OneHour" | "OneDay" | "OneWeek" | "OneMonth")
    ProcessingConfiguration?: {
      Enabled?: boolean
      Processors?: {
        Type: (string | "RecordDeAggregation" | "Decompression" | "CloudWatchLogProcessing" | "Lambda" | "MetadataExtraction" | "AppendDelimiterToRecord")
        Parameters?: {
          ParameterValue: StringProperty
          ParameterName: StringProperty
        }[]
      }[]
    }
    ClusterEndpoint?: StringProperty
    DomainARN?: StringProperty
    RoleARN: StringProperty
    S3BackupMode?: (string | "FailedDocumentsOnly" | "AllDocuments")
    IndexName: StringProperty
    DocumentIdOptions?: {
      DefaultDocumentIdFormat: (string | "FIREHOSE_DEFAULT" | "NO_DOCUMENT_ID")
    }
    S3Configuration: {
      ErrorOutputPrefix?: StringProperty
      BucketARN: StringProperty
      BufferingHints?: {
        IntervalInSeconds?: number
        SizeInMBs?: number
      }
      CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
      EncryptionConfiguration?: {
        KMSEncryptionConfig?: {
          AWSKMSKeyARN: StringProperty
        }
        NoEncryptionConfig?: (string | "NoEncryption")
      }
      Prefix?: StringProperty
      CloudWatchLoggingOptions?: {
        LogStreamName?: StringProperty
        Enabled?: boolean
        LogGroupName?: StringProperty
      }
      RoleARN: StringProperty
    }
    BufferingHints?: {
      IntervalInSeconds?: number
      SizeInMBs?: number
    }
    RetryOptions?: {
      DurationInSeconds?: number
    }
    VpcConfiguration?: {
      SubnetIds: StringProperty[]
      SecurityGroupIds: StringProperty[]
      RoleARN: StringProperty
    }
    CloudWatchLoggingOptions?: {
      LogStreamName?: StringProperty
      Enabled?: boolean
      LogGroupName?: StringProperty
    }
  }
  SnowflakeDestinationConfiguration?: {
    PrivateKey?: StringProperty
    User?: StringProperty
    Table: StringProperty
    SnowflakeVpcConfiguration?: {
      PrivateLinkVpceId: StringProperty
    }
    DataLoadingOption?: (string | "JSON_MAPPING" | "VARIANT_CONTENT_MAPPING" | "VARIANT_CONTENT_AND_METADATA_MAPPING")
    Schema: StringProperty
    ContentColumnName?: StringProperty
    SecretsManagerConfiguration?: {
      SecretARN?: StringProperty
      Enabled: boolean
      RoleARN?: StringProperty
    }
    SnowflakeRoleConfiguration?: {
      SnowflakeRole?: StringProperty
      Enabled?: boolean
    }
    ProcessingConfiguration?: {
      Enabled?: boolean
      Processors?: {
        Type: (string | "RecordDeAggregation" | "Decompression" | "CloudWatchLogProcessing" | "Lambda" | "MetadataExtraction" | "AppendDelimiterToRecord")
        Parameters?: {
          ParameterValue: StringProperty
          ParameterName: StringProperty
        }[]
      }[]
    }
    AccountUrl: StringProperty
    RoleARN: StringProperty
    S3BackupMode?: (string | "FailedDataOnly" | "AllData")
    S3Configuration: {
      ErrorOutputPrefix?: StringProperty
      BucketARN: StringProperty
      BufferingHints?: {
        IntervalInSeconds?: number
        SizeInMBs?: number
      }
      CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
      EncryptionConfiguration?: {
        KMSEncryptionConfig?: {
          AWSKMSKeyARN: StringProperty
        }
        NoEncryptionConfig?: (string | "NoEncryption")
      }
      Prefix?: StringProperty
      CloudWatchLoggingOptions?: {
        LogStreamName?: StringProperty
        Enabled?: boolean
        LogGroupName?: StringProperty
      }
      RoleARN: StringProperty
    }
    BufferingHints?: {
      IntervalInSeconds?: number
      SizeInMBs?: number
    }
    MetaDataColumnName?: StringProperty
    Database: StringProperty
    RetryOptions?: {
      DurationInSeconds?: number
    }
    KeyPassphrase?: StringProperty
    CloudWatchLoggingOptions?: {
      LogStreamName?: StringProperty
      Enabled?: boolean
      LogGroupName?: StringProperty
    }
  }
  DatabaseSourceConfiguration?: {
    Digest?: StringProperty
    Port: number
    PublicCertificate?: StringProperty
    Columns?: {
      Exclude?: StringProperty[]
      Include?: StringProperty[]
    }
    Type: (string | "MySQL" | "PostgreSQL")
    SurrogateKeys?: StringProperty[]
    Databases: {
      Exclude?: StringProperty[]
      Include?: StringProperty[]
    }
    Endpoint: StringProperty
    SSLMode?: (string | "Disabled" | "Enabled")
    SnapshotWatermarkTable: StringProperty
    DatabaseSourceAuthenticationConfiguration: {
      SecretsManagerConfiguration: {
        SecretARN?: StringProperty
        Enabled: boolean
        RoleARN?: StringProperty
      }
    }
    Tables: {
      Exclude?: StringProperty[]
      Include?: StringProperty[]
    }
    DatabaseSourceVPCConfiguration: {
      VpcEndpointServiceName: StringProperty
    }
  }
  S3DestinationConfiguration?: {
    ErrorOutputPrefix?: StringProperty
    BucketARN: StringProperty
    BufferingHints?: {
      IntervalInSeconds?: number
      SizeInMBs?: number
    }
    CompressionFormat?: (string | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | "HADOOP_SNAPPY")
    EncryptionConfiguration?: {
      KMSEncryptionConfig?: {
        AWSKMSKeyARN: StringProperty
      }
      NoEncryptionConfig?: (string | "NoEncryption")
    }
    Prefix?: StringProperty
    CloudWatchLoggingOptions?: {
      LogStreamName?: StringProperty
      Enabled?: boolean
      LogGroupName?: StringProperty
    }
    RoleARN: StringProperty
  }
  DeliveryStreamName?: StringProperty
  Arn?: StringProperty
  Tags?: {
    Value?: StringProperty
    Key: StringProperty
  }[]
}

export const AWSKinesisFirehoseDeliveryStream = ({
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
      Type: 'AWS::KinesisFirehose::DeliveryStream',
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