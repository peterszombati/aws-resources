import {StringProperty} from "../StringProperty"


type Properties = {
  RuleArn?: StringProperty
  RuleStatus?: (string | "ENABLED" | "DISABLED")
  RuleOrder: number
  Description: StringProperty
  RuleName: StringProperty
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  CreatedBy?: StringProperty
  IsTerminal?: boolean
  Actions: {
    Type: (string | "FINDING_FIELDS_UPDATE")
    FindingFieldsUpdate: {
      Types?: StringProperty[]
      Severity?: {
        Product?: number
        Label?: (string | "INFORMATIONAL" | "LOW" | "MEDIUM" | "HIGH" | "CRITICAL")
        Normalized?: number
      }
      Confidence?: number
      Criticality?: number
      UserDefinedFields?: Record<string, any>
      VerificationState?: (string | "UNKNOWN" | "TRUE_POSITIVE" | "FALSE_POSITIVE" | "BENIGN_POSITIVE")
      RelatedFindings?: {
        ProductArn: StringProperty
        Id: any
      }[]
      Note?: {
        Text: StringProperty
        UpdatedBy: any
      }
      Workflow?: {
        Status: (string | "NEW" | "NOTIFIED" | "RESOLVED" | "SUPPRESSED")
      }
    }
  }[]
  Criteria: {
    ProductArn?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    AwsAccountId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    Id?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    GeneratorId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    Type?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    FirstObservedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    LastObservedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    CreatedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    UpdatedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    Confidence?: {
      Eq?: number
      Gte?: number
      Lte?: number
    }[]
    Criticality?: {
      Eq?: number
      Gte?: number
      Lte?: number
    }[]
    Title?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    Description?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    SourceUrl?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    ProductName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    CompanyName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    SeverityLabel?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    ResourceType?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    ResourceId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    ResourcePartition?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    ResourceRegion?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    ResourceTags?: {
      Comparison: (string | "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Key: StringProperty
      Value: StringProperty
    }[]
    ResourceDetailsOther?: {
      Comparison: (string | "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Key: StringProperty
      Value: StringProperty
    }[]
    ComplianceStatus?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    ComplianceSecurityControlId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    ComplianceAssociatedStandardsId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    VerificationState?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    WorkflowStatus?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    RecordState?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    RelatedFindingsProductArn?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    RelatedFindingsId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    NoteText?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    NoteUpdatedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    NoteUpdatedBy?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Value: StringProperty
    }[]
    UserDefinedFields?: {
      Comparison: (string | "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS")
      Key: StringProperty
      Value: StringProperty
    }[]
  }
  Tags?: Record<string, any>
}

export const AWSSecurityHubAutomationRule = ({
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
      Type: 'AWS::SecurityHub::AutomationRule',
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