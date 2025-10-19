import {StringProperty} from "../StringProperty"


type Properties = {
  RuleName: StringProperty
  RuleStatus?: (string | "ENABLED" | "DISABLED")
  Description: StringProperty
  RuleOrder: number
  Criteria: {
    OcsfFindingCriteria?: {
      CompositeFilters?: {
        StringFilters?: {
          FieldName: (string | "metadata.uid" | "activity_name" | "cloud.account.name" | "cloud.account.uid" | "cloud.provider" | "cloud.region" | "compliance.assessments.category" | "compliance.assessments.name" | "compliance.control" | "compliance.status" | "compliance.standards" | "finding_info.desc" | "finding_info.src_url" | "finding_info.title" | "finding_info.types" | "finding_info.uid" | "finding_info.related_events.uid" | "finding_info.related_events.product.uid" | "finding_info.related_events.title" | "metadata.product.feature.uid" | "metadata.product.name" | "metadata.product.uid" | "metadata.product.vendor_name" | "remediation.desc" | "remediation.references" | "resources.cloud_partition" | "resources.name" | "resources.region" | "resources.type" | "resources.uid" | "severity" | "status" | "comment" | "vulnerabilities.fix_coverage" | "class_name")
          Filter: {
            Value: StringProperty
            Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS")
          }
        }[]
        DateFilters?: {
          FieldName: (string | "finding_info.created_time_dt" | "finding_info.first_seen_time_dt" | "finding_info.last_seen_time_dt" | "finding_info.modified_time_dt")
          Filter: {
            DateRange?: {
              Unit: (string | "DAYS")
              Value: number
            }
            End?: StringProperty
            Start?: StringProperty
          }
        }[]
        BooleanFilters?: {
          FieldName: (string | "compliance.assessments.meets_criteria" | "vulnerabilities.is_exploit_available" | "vulnerabilities.is_fix_available")
          Filter: {
            Value: boolean
          }
        }[]
        NumberFilters?: {
          FieldName: (string | "activity_id" | "compliance.status_id" | "confidence_score" | "severity_id" | "status_id" | "finding_info.related_events_count")
          Filter: {
            Eq?: number
            Gte?: number
            Lte?: number
          }
        }[]
        MapFilters?: {
          FieldName: (string | "resources.tags")
          Filter: {
            Comparison: (string | "EQUALS" | "NOT_EQUALS")
            Key: StringProperty
            Value: StringProperty
          }
        }[]
        Operator?: (string | "AND" | "OR")
      }[]
      CompositeOperator?: (string | "AND" | "OR")
    }
  }
  Actions: {
    Type: (string | "FINDING_FIELDS_UPDATE" | "EXTERNAL_INTEGRATION")
    FindingFieldsUpdate?: {
      SeverityId?: number
      Comment?: StringProperty
      StatusId?: number
    }
    ExternalIntegrationConfiguration?: {
      ConnectorArn?: StringProperty
    }
  }[]
  Tags?: Record<string, any>
  RuleArn?: StringProperty
  RuleId?: StringProperty
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
}

export const AWSSecurityHubAutomationRuleV2 = ({
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
      Type: 'AWS::SecurityHub::AutomationRuleV2',
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