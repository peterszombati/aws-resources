import {StringProperty} from "../StringProperty"


type Properties = {
  FlowArn?: StringProperty
  FlowName: StringProperty
  Description?: StringProperty
  KMSArn?: StringProperty
  TriggerConfig: {
    TriggerType: (string | "Scheduled" | "Event" | "OnDemand")
    TriggerProperties?: {
      ScheduleExpression: StringProperty
      DataPullMode?: (string | "Incremental" | "Complete")
      ScheduleStartTime?: number
      ScheduleEndTime?: number
      FirstExecutionFrom?: number
      TimeZone?: StringProperty
      ScheduleOffset?: number
      FlowErrorDeactivationThreshold?: number
    }
  }
  FlowStatus?: (string | "Active" | "Suspended" | "Draft")
  SourceFlowConfig: {
    ConnectorType: (string | "SAPOData" | "Salesforce" | "Pardot" | "Singular" | "Slack" | "Redshift" | "S3" | "Marketo" | "Googleanalytics" | "Zendesk" | "Servicenow" | "Datadog" | "Trendmicro" | "Snowflake" | "Dynatrace" | "Infornexus" | "Amplitude" | "Veeva" | "CustomConnector" | "EventBridge" | "Upsolver" | "LookoutMetrics")
    ApiVersion?: StringProperty
    ConnectorProfileName?: StringProperty
    SourceConnectorProperties: {
      Amplitude?: {
        Object: StringProperty
      }
      Datadog?: {
        Object: StringProperty
      }
      Dynatrace?: {
        Object: StringProperty
      }
      GoogleAnalytics?: {
        Object: StringProperty
      }
      InforNexus?: {
        Object: StringProperty
      }
      Marketo?: {
        Object: StringProperty
      }
      S3?: {
        BucketName: StringProperty
        BucketPrefix: StringProperty
        S3InputFormatConfig?: {
          S3InputFileType?: (string | "CSV" | "JSON")
        }
      }
      SAPOData?: {
        ObjectPath: StringProperty
        parallelismConfig?: {
          maxParallelism: number
        }
        paginationConfig?: {
          maxPageSize: number
        }
      }
      Salesforce?: {
        Object: StringProperty
        EnableDynamicFieldUpdate?: boolean
        IncludeDeletedRecords?: boolean
        DataTransferApi?: (string | "AUTOMATIC" | "BULKV2" | "REST_SYNC")
      }
      Pardot?: {
        Object: StringProperty
      }
      ServiceNow?: {
        Object: StringProperty
      }
      Singular?: {
        Object: StringProperty
      }
      Slack?: {
        Object: StringProperty
      }
      Trendmicro?: {
        Object: StringProperty
      }
      Veeva?: {
        Object: StringProperty
        DocumentType?: StringProperty
        IncludeSourceFiles?: boolean
        IncludeRenditions?: boolean
        IncludeAllVersions?: boolean
      }
      Zendesk?: {
        Object: StringProperty
      }
      CustomConnector?: {
        EntityName: StringProperty
        CustomProperties?: Record<string, any>
        DataTransferApi?: {
          Name: StringProperty
          Type: (string | "SYNC" | "ASYNC" | "AUTOMATIC")
        }
      }
    }
    IncrementalPullConfig?: {
      DatetimeTypeFieldName?: StringProperty
    }
  }
  DestinationFlowConfigList: {
    ConnectorType: (string | "SAPOData" | "Salesforce" | "Pardot" | "Singular" | "Slack" | "Redshift" | "S3" | "Marketo" | "Googleanalytics" | "Zendesk" | "Servicenow" | "Datadog" | "Trendmicro" | "Snowflake" | "Dynatrace" | "Infornexus" | "Amplitude" | "Veeva" | "CustomConnector" | "EventBridge" | "Upsolver" | "LookoutMetrics")
    ApiVersion?: StringProperty
    ConnectorProfileName?: StringProperty
    DestinationConnectorProperties: {
      Redshift?: {
        Object: StringProperty
        IntermediateBucketName: StringProperty
        BucketPrefix?: StringProperty
        ErrorHandlingConfig?: {
          FailOnFirstError?: boolean
          BucketPrefix?: StringProperty
          BucketName?: StringProperty
        }
      }
      S3?: {
        BucketName: StringProperty
        BucketPrefix?: StringProperty
        S3OutputFormatConfig?: {
          FileType?: (string | "CSV" | "JSON" | "PARQUET")
          PrefixConfig?: {
            PrefixType?: (string | "FILENAME" | "PATH" | "PATH_AND_FILENAME")
            PrefixFormat?: (string | "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE")
            PathPrefixHierarchy?: (string | "EXECUTION_ID" | "SCHEMA_VERSION")[]
          }
          AggregationConfig?: {
            AggregationType?: (string | "None" | "SingleFile")
            TargetFileSize?: number
          }
          PreserveSourceDataTyping?: boolean
        }
      }
      Salesforce?: {
        Object: StringProperty
        ErrorHandlingConfig?: {
          FailOnFirstError?: boolean
          BucketPrefix?: StringProperty
          BucketName?: StringProperty
        }
        IdFieldNames?: StringProperty[]
        WriteOperationType?: (string | "INSERT" | "UPSERT" | "UPDATE" | "DELETE")
        DataTransferApi?: (string | "AUTOMATIC" | "BULKV2" | "REST_SYNC")
      }
      Snowflake?: {
        Object: StringProperty
        IntermediateBucketName: StringProperty
        BucketPrefix?: StringProperty
        ErrorHandlingConfig?: {
          FailOnFirstError?: boolean
          BucketPrefix?: StringProperty
          BucketName?: StringProperty
        }
      }
      EventBridge?: {
        Object: StringProperty
        ErrorHandlingConfig?: {
          FailOnFirstError?: boolean
          BucketPrefix?: StringProperty
          BucketName?: StringProperty
        }
      }
      Upsolver?: {
        BucketName: StringProperty
        BucketPrefix?: StringProperty
        S3OutputFormatConfig: {
          FileType?: (string | "CSV" | "JSON" | "PARQUET")
          PrefixConfig: {
            PrefixType?: (string | "FILENAME" | "PATH" | "PATH_AND_FILENAME")
            PrefixFormat?: (string | "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE")
            PathPrefixHierarchy?: (string | "EXECUTION_ID" | "SCHEMA_VERSION")[]
          }
          AggregationConfig?: {
            AggregationType?: (string | "None" | "SingleFile")
            TargetFileSize?: number
          }
        }
      }
      LookoutMetrics?: {
        Object?: StringProperty
      }
      Marketo?: {
        Object: StringProperty
        ErrorHandlingConfig?: {
          FailOnFirstError?: boolean
          BucketPrefix?: StringProperty
          BucketName?: StringProperty
        }
      }
      Zendesk?: {
        Object: StringProperty
        ErrorHandlingConfig?: {
          FailOnFirstError?: boolean
          BucketPrefix?: StringProperty
          BucketName?: StringProperty
        }
        IdFieldNames?: StringProperty[]
        WriteOperationType?: (string | "INSERT" | "UPSERT" | "UPDATE" | "DELETE")
      }
      CustomConnector?: {
        EntityName: StringProperty
        ErrorHandlingConfig?: {
          FailOnFirstError?: boolean
          BucketPrefix?: StringProperty
          BucketName?: StringProperty
        }
        WriteOperationType?: (string | "INSERT" | "UPSERT" | "UPDATE" | "DELETE")
        IdFieldNames?: StringProperty[]
        CustomProperties?: Record<string, any>
      }
      SAPOData?: {
        ObjectPath: StringProperty
        ErrorHandlingConfig?: {
          FailOnFirstError?: boolean
          BucketPrefix?: StringProperty
          BucketName?: StringProperty
        }
        SuccessResponseHandlingConfig?: {
          BucketPrefix?: StringProperty
          BucketName?: StringProperty
        }
        IdFieldNames?: StringProperty[]
        WriteOperationType?: (string | "INSERT" | "UPSERT" | "UPDATE" | "DELETE")
      }
    }
  }[]
  Tasks: {
    SourceFields: StringProperty[]
    ConnectorOperator?: {
      Amplitude?: (string | "BETWEEN")
      Datadog?: (string | "PROJECTION" | "BETWEEN" | "EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      Dynatrace?: (string | "PROJECTION" | "BETWEEN" | "EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      GoogleAnalytics?: (string | "PROJECTION" | "BETWEEN")
      InforNexus?: (string | "PROJECTION" | "BETWEEN" | "EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      Marketo?: (string | "PROJECTION" | "LESS_THAN" | "GREATER_THAN" | "BETWEEN" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      S3?: (string | "PROJECTION" | "LESS_THAN" | "GREATER_THAN" | "BETWEEN" | "LESS_THAN_OR_EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "EQUAL_TO" | "NOT_EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      SAPOData?: (string | "PROJECTION" | "LESS_THAN" | "CONTAINS" | "GREATER_THAN" | "BETWEEN" | "LESS_THAN_OR_EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "EQUAL_TO" | "NOT_EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      Salesforce?: (string | "PROJECTION" | "LESS_THAN" | "CONTAINS" | "GREATER_THAN" | "BETWEEN" | "LESS_THAN_OR_EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "EQUAL_TO" | "NOT_EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      Pardot?: (string | "PROJECTION" | "EQUAL_TO" | "NO_OP" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC")
      ServiceNow?: (string | "PROJECTION" | "LESS_THAN" | "CONTAINS" | "GREATER_THAN" | "BETWEEN" | "LESS_THAN_OR_EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "EQUAL_TO" | "NOT_EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      Singular?: (string | "PROJECTION" | "EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      Slack?: (string | "PROJECTION" | "BETWEEN" | "EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      Trendmicro?: (string | "PROJECTION" | "EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      Veeva?: (string | "PROJECTION" | "LESS_THAN" | "GREATER_THAN" | "BETWEEN" | "LESS_THAN_OR_EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "EQUAL_TO" | "NOT_EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      Zendesk?: (string | "PROJECTION" | "GREATER_THAN" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      CustomConnector?: (string | "PROJECTION" | "LESS_THAN" | "GREATER_THAN" | "CONTAINS" | "BETWEEN" | "LESS_THAN_OR_EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "EQUAL_TO" | "NOT_EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
    }
    DestinationField?: StringProperty
    TaskType: (string | "Arithmetic" | "Filter" | "Map" | "Map_all" | "Mask" | "Merge" | "Passthrough" | "Truncate" | "Validate" | "Partition")
    TaskProperties?: {
      Key: (string | "VALUE" | "VALUES" | "DATA_TYPE" | "UPPER_BOUND" | "LOWER_BOUND" | "SOURCE_DATA_TYPE" | "DESTINATION_DATA_TYPE" | "VALIDATION_ACTION" | "MASK_VALUE" | "MASK_LENGTH" | "TRUNCATE_LENGTH" | "MATH_OPERATION_FIELDS_ORDER" | "CONCAT_FORMAT" | "SUBFIELD_CATEGORY_MAP" | "EXCLUDE_SOURCE_FIELDS_LIST" | "INCLUDE_NEW_FIELDS" | "ORDERED_PARTITION_KEYS_LIST")
      Value: StringProperty
    }[]
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  MetadataCatalogConfig?: {
    GlueDataCatalog?: {
      RoleArn: StringProperty
      DatabaseName: StringProperty
      TablePrefix: StringProperty
    }
  }
}

export const AWSAppFlowFlow = ({
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
      Type: 'AWS::AppFlow::Flow',
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