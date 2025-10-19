import {StringProperty} from "../StringProperty"


type Properties = {
  SybaseSettings?: {
    SecretsManagerAccessRoleArn?: StringProperty
    SecretsManagerSecretId?: StringProperty
  }
  RedisSettings?: {
    SslSecurityProtocol?: StringProperty
    AuthUserName?: StringProperty
    ServerName?: StringProperty
    Port?: number
    SslCaCertificateArn?: StringProperty
    AuthPassword?: StringProperty
    AuthType?: StringProperty
  }
  OracleSettings?: {
    AsmPassword?: StringProperty
    DirectPathParallelLoad?: boolean
    AdditionalArchivedLogDestId?: number
    SpatialDataOptionToGeoJsonFunctionName?: StringProperty
    ReplacePathPrefix?: boolean
    FailTasksOnLobTruncation?: boolean
    AsmServer?: StringProperty
    SecretsManagerOracleAsmAccessRoleArn?: StringProperty
    OraclePathPrefix?: StringProperty
    ReadAheadBlocks?: number
    StandbyDelayTime?: number
    AllowSelectNestedTables?: boolean
    AddSupplementalLogging?: boolean
    SecretsManagerSecretId?: StringProperty
    UseBFile?: boolean
    EnableHomogenousTablespace?: boolean
    AsmUser?: StringProperty
    UseDirectPathFullLoad?: boolean
    SecurityDbEncryption?: StringProperty
    ParallelAsmReadThreads?: number
    ArchivedLogDestId?: number
    UsePathPrefix?: StringProperty
    UseLogminerReader?: boolean
    SecurityDbEncryptionName?: StringProperty
    DirectPathNoLog?: boolean
    SecretsManagerOracleAsmSecretId?: StringProperty
    CharLengthSemantics?: StringProperty
    NumberDatatypeScale?: number
    ReadTableSpaceName?: boolean
    AccessAlternateDirectly?: boolean
    UseAlternateFolderForOnline?: boolean
    ArchivedLogsOnly?: boolean
    ExtraArchivedLogDestIds?: number[]
    RetryInterval?: number
    SecretsManagerAccessRoleArn?: StringProperty
  }
  KafkaSettings?: {
    Broker?: StringProperty
    SaslPassword?: StringProperty
    MessageFormat?: StringProperty
    SslClientCertificateArn?: StringProperty
    IncludeTransactionDetails?: boolean
    SecurityProtocol?: StringProperty
    IncludeTableAlterOperations?: boolean
    SslCaCertificateArn?: StringProperty
    IncludeControlDetails?: boolean
    IncludePartitionValue?: boolean
    NoHexPrefix?: boolean
    SslClientKeyArn?: StringProperty
    SslClientKeyPassword?: StringProperty
    SaslUserName?: StringProperty
    MessageMaxBytes?: number
    Topic?: StringProperty
    PartitionIncludeSchemaTable?: boolean
    IncludeNullAndEmpty?: boolean
  }
  Port?: number
  MySqlSettings?: {
    ServerTimezone?: StringProperty
    EventsPollInterval?: number
    ParallelLoadThreads?: number
    AfterConnectScript?: StringProperty
    MaxFileSize?: number
    TargetDbType?: StringProperty
    SecretsManagerSecretId?: StringProperty
    SecretsManagerAccessRoleArn?: StringProperty
    CleanSourceMetadataOnMismatch?: boolean
  }
  S3Settings?: {
    TimestampColumnName?: StringProperty
    EnableStatistics?: boolean
    DatePartitionSequence?: StringProperty
    CsvNullValue?: StringProperty
    IncludeOpForFullLoad?: boolean
    CdcInsertsAndUpdates?: boolean
    BucketName?: StringProperty
    ServerSideEncryptionKmsKeyId?: StringProperty
    UseTaskStartTimeForFullLoadTimestamp?: boolean
    GlueCatalogGeneration?: boolean
    DataFormat?: StringProperty
    CsvDelimiter?: StringProperty
    AddTrailingPaddingCharacter?: boolean
    IgnoreHeaderRows?: number
    CannedAclForObjects?: StringProperty
    Rfc4180?: boolean
    ServiceAccessRoleArn?: StringProperty
    ParquetTimestampInMillisecond?: boolean
    PreserveTransactions?: boolean
    BucketFolder?: StringProperty
    DatePartitionDelimiter?: StringProperty
    EncodingType?: StringProperty
    AddColumnName?: boolean
    CdcMinFileSize?: number
    ParquetVersion?: StringProperty
    ExternalTableDefinition?: StringProperty
    UseCsvNoSupValue?: boolean
    MaxFileSize?: number
    CdcPath?: StringProperty
    CsvNoSupValue?: StringProperty
    CdcMaxBatchInterval?: number
    CsvRowDelimiter?: StringProperty
    RowGroupLength?: number
    DataPageSize?: number
    DatePartitionEnabled?: boolean
    DictPageSizeLimit?: number
    CompressionType?: StringProperty
    DatePartitionTimezone?: StringProperty
    CdcInsertsOnly?: boolean
    ExpectedBucketOwner?: StringProperty
    EncryptionMode?: StringProperty
  }
  ResourceIdentifier?: StringProperty
  KinesisSettings?: {
    MessageFormat?: StringProperty
    IncludeTransactionDetails?: boolean
    IncludeTableAlterOperations?: boolean
    IncludeControlDetails?: boolean
    IncludePartitionValue?: boolean
    StreamArn?: StringProperty
    ServiceAccessRoleArn?: StringProperty
    NoHexPrefix?: boolean
    PartitionIncludeSchemaTable?: boolean
    IncludeNullAndEmpty?: boolean
  }
  SslMode?: StringProperty
  RedshiftSettings?: {
    ConnectionTimeout?: number
    MapBooleanAsBoolean?: boolean
    AfterConnectScript?: StringProperty
    FileTransferUploadStreams?: number
    BucketName?: StringProperty
    ServerSideEncryptionKmsKeyId?: StringProperty
    ExplicitIds?: boolean
    SecretsManagerSecretId?: StringProperty
    TruncateColumns?: boolean
    ServiceAccessRoleArn?: StringProperty
    ReplaceChars?: StringProperty
    TimeFormat?: StringProperty
    BucketFolder?: StringProperty
    ReplaceInvalidChars?: StringProperty
    RemoveQuotes?: boolean
    LoadTimeout?: number
    MaxFileSize?: number
    TrimBlanks?: boolean
    DateFormat?: StringProperty
    CompUpdate?: boolean
    AcceptAnyDate?: boolean
    WriteBufferSize?: number
    SecretsManagerAccessRoleArn?: StringProperty
    CaseSensitiveNames?: boolean
    EmptyAsNull?: boolean
    EncryptionMode?: StringProperty
  }
  EndpointType: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Password?: StringProperty
  MongoDbSettings?: {
    Port?: number
    ExtractDocId?: StringProperty
    DatabaseName?: StringProperty
    AuthSource?: StringProperty
    AuthMechanism?: StringProperty
    Username?: StringProperty
    DocsToInvestigate?: StringProperty
    ServerName?: StringProperty
    SecretsManagerSecretId?: StringProperty
    AuthType?: StringProperty
    SecretsManagerAccessRoleArn?: StringProperty
    Password?: StringProperty
    NestingLevel?: StringProperty
  }
  IbmDb2Settings?: {
    LoadTimeout?: number
    SetDataCaptureChanges?: boolean
    MaxFileSize?: number
    KeepCsvFiles?: boolean
    CurrentLsn?: StringProperty
    MaxKBytesPerRead?: number
    SecretsManagerSecretId?: StringProperty
    WriteBufferSize?: number
    SecretsManagerAccessRoleArn?: StringProperty
  }
  KmsKeyId?: StringProperty
  ExternalId?: StringProperty
  DatabaseName?: StringProperty
  NeptuneSettings?: {
    MaxRetryCount?: number
    MaxFileSize?: number
    S3BucketFolder?: StringProperty
    ErrorRetryDuration?: number
    IamAuthEnabled?: boolean
    S3BucketName?: StringProperty
    ServiceAccessRoleArn?: StringProperty
  }
  ElasticsearchSettings?: {
    EndpointUri?: StringProperty
    ErrorRetryDuration?: number
    FullLoadErrorPercentage?: number
    ServiceAccessRoleArn?: StringProperty
  }
  EngineName: StringProperty
  DocDbSettings?: {
    SecretsManagerSecretId?: StringProperty
    DocsToInvestigate?: number
    SecretsManagerAccessRoleArn?: StringProperty
    ExtractDocId?: boolean
    NestingLevel?: StringProperty
  }
  DynamoDbSettings?: {
    ServiceAccessRoleArn?: StringProperty
  }
  Username?: StringProperty
  MicrosoftSqlServerSettings?: {
    ReadBackupOnly?: boolean
    TlogAccessMode?: StringProperty
    BcpPacketSize?: number
    Port?: number
    SafeguardPolicy?: StringProperty
    UseThirdPartyBackupDevice?: boolean
    DatabaseName?: StringProperty
    UseBcpFullLoad?: boolean
    Username?: StringProperty
    QuerySingleAlwaysOnNode?: boolean
    ServerName?: StringProperty
    SecretsManagerSecretId?: StringProperty
    ControlTablesFileGroup?: StringProperty
    ForceLobLookup?: boolean
    SecretsManagerAccessRoleArn?: StringProperty
    TrimSpaceInChar?: boolean
    Password?: StringProperty
  }
  GcpMySQLSettings?: {
    AfterConnectScript?: StringProperty
    Port?: number
    DatabaseName?: StringProperty
    CleanSourceMetadataOnMismatch?: boolean
    ServerTimezone?: StringProperty
    EventsPollInterval?: number
    ParallelLoadThreads?: number
    Username?: StringProperty
    MaxFileSize?: number
    ServerName?: StringProperty
    SecretsManagerSecretId?: StringProperty
    SecretsManagerAccessRoleArn?: StringProperty
    Password?: StringProperty
  }
  ServerName?: StringProperty
  ExtraConnectionAttributes?: StringProperty
  Id?: StringProperty
  EndpointIdentifier?: StringProperty
  CertificateArn?: StringProperty
  PostgreSqlSettings?: {
    PluginName?: StringProperty
    MapBooleanAsBoolean?: boolean
    AfterConnectScript?: StringProperty
    ExecuteTimeout?: number
    DdlArtifactsSchema?: StringProperty
    FailTasksOnLobTruncation?: boolean
    HeartbeatEnable?: boolean
    BabelfishDatabaseName?: StringProperty
    DatabaseMode?: StringProperty
    CaptureDdls?: boolean
    MaxFileSize?: number
    HeartbeatFrequency?: number
    SecretsManagerSecretId?: StringProperty
    SecretsManagerAccessRoleArn?: StringProperty
    HeartbeatSchema?: StringProperty
    SlotName?: StringProperty
  }
}

export const AWSDMSEndpoint = ({
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
      Type: 'AWS::DMS::Endpoint',
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