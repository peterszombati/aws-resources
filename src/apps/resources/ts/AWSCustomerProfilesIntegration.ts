import {StringProperty} from "../StringProperty"


type Properties = {
  DomainName: StringProperty
  Uri?: StringProperty
  FlowDefinition?: {
    FlowName: StringProperty
    Description?: StringProperty
    KmsArn: StringProperty
    Tasks: {
      ConnectorOperator?: {
        Marketo?: (string | "PROJECTION" | "LESS_THAN" | "GREATER_THAN" | "BETWEEN" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
        S3?: (string | "PROJECTION" | "LESS_THAN" | "GREATER_THAN" | "BETWEEN" | "LESS_THAN_OR_EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "EQUAL_TO" | "NOT_EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
        Salesforce?: (string | "PROJECTION" | "LESS_THAN" | "GREATER_THAN" | "CONTAINS" | "BETWEEN" | "LESS_THAN_OR_EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "EQUAL_TO" | "NOT_EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
        ServiceNow?: (string | "PROJECTION" | "LESS_THAN" | "GREATER_THAN" | "CONTAINS" | "BETWEEN" | "LESS_THAN_OR_EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "EQUAL_TO" | "NOT_EQUAL_TO" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
        Zendesk?: (string | "PROJECTION" | "GREATER_THAN" | "ADDITION" | "MULTIPLICATION" | "DIVISION" | "SUBTRACTION" | "MASK_ALL" | "MASK_FIRST_N" | "MASK_LAST_N" | "VALIDATE_NON_NULL" | "VALIDATE_NON_ZERO" | "VALIDATE_NON_NEGATIVE" | "VALIDATE_NUMERIC" | "NO_OP")
      }
      SourceFields: StringProperty[]
      DestinationField?: StringProperty
      TaskType: (string | "Arithmetic" | "Filter" | "Map" | "Mask" | "Merge" | "Truncate" | "Validate")
      TaskProperties?: {
        OperatorPropertyKey: (string | "VALUE" | "VALUES" | "DATA_TYPE" | "UPPER_BOUND" | "LOWER_BOUND" | "SOURCE_DATA_TYPE" | "DESTINATION_DATA_TYPE" | "VALIDATION_ACTION" | "MASK_VALUE" | "MASK_LENGTH" | "TRUNCATE_LENGTH" | "MATH_OPERATION_FIELDS_ORDER" | "CONCAT_FORMAT" | "SUBFIELD_CATEGORY_MAP")
        Property: StringProperty
      }[]
    }[]
    TriggerConfig: {
      TriggerType: (string | "Scheduled" | "Event" | "OnDemand")
      TriggerProperties?: {
        Scheduled?: {
          ScheduleExpression: StringProperty
          DataPullMode?: (string | "Incremental" | "Complete")
          ScheduleStartTime?: number
          ScheduleEndTime?: number
          Timezone?: StringProperty
          ScheduleOffset?: number
          FirstExecutionFrom?: number
        }
      }
    }
    SourceFlowConfig: {
      ConnectorType: (string | "Salesforce" | "Marketo" | "ServiceNow" | "Zendesk" | "S3")
      ConnectorProfileName?: StringProperty
      IncrementalPullConfig?: {
        DatetimeTypeFieldName?: StringProperty
      }
      SourceConnectorProperties: {
        Marketo?: {
          Object: StringProperty
        }
        S3?: {
          BucketName: StringProperty
          BucketPrefix?: StringProperty
        }
        Salesforce?: {
          Object: StringProperty
          EnableDynamicFieldUpdate?: boolean
          IncludeDeletedRecords?: boolean
        }
        ServiceNow?: {
          Object: StringProperty
        }
        Zendesk?: {
          Object: StringProperty
        }
      }
    }
  }
  ObjectTypeName?: StringProperty
  CreatedAt?: StringProperty
  LastUpdatedAt?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ObjectTypeNames?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  EventTriggerNames?: StringProperty[]
}

export const AWSCustomerProfilesIntegration = ({
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
      Type: 'AWS::CustomerProfiles::Integration',
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