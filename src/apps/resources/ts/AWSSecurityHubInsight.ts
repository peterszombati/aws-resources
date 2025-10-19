import {StringProperty} from "../StringProperty"


type Properties = {
  InsightArn?: StringProperty
  Name: StringProperty
  Filters: {
    ProductArn?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    AwsAccountId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    AwsAccountName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    Id?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    GeneratorId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    Type?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    Region?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
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
    SeverityLabel?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
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
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    Description?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    RecommendationText?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    SourceUrl?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ProductFields?: {
      Comparison: (string | "EQUALS" | "NOT_EQUALS")
      Key: StringProperty
      Value: StringProperty
    }[]
    ProductName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    CompanyName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    UserDefinedFields?: {
      Comparison: (string | "EQUALS" | "NOT_EQUALS")
      Key: StringProperty
      Value: StringProperty
    }[]
    MalwareName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    MalwareType?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    MalwarePath?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    MalwareState?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    NetworkDirection?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    NetworkProtocol?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    NetworkSourceIpV4?: {
      Cidr: StringProperty
    }[]
    NetworkSourceIpV6?: {
      Cidr: StringProperty
    }[]
    NetworkSourcePort?: {
      Eq?: number
      Gte?: number
      Lte?: number
    }[]
    NetworkSourceDomain?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    NetworkSourceMac?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    NetworkDestinationIpV4?: {
      Cidr: StringProperty
    }[]
    NetworkDestinationIpV6?: {
      Cidr: StringProperty
    }[]
    NetworkDestinationPort?: {
      Eq?: number
      Gte?: number
      Lte?: number
    }[]
    NetworkDestinationDomain?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ProcessName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ProcessPath?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ProcessPid?: {
      Eq?: number
      Gte?: number
      Lte?: number
    }[]
    ProcessParentPid?: {
      Eq?: number
      Gte?: number
      Lte?: number
    }[]
    ProcessLaunchedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    ProcessTerminatedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    ThreatIntelIndicatorType?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ThreatIntelIndicatorValue?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ThreatIntelIndicatorCategory?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ThreatIntelIndicatorLastObservedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    ThreatIntelIndicatorSource?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ThreatIntelIndicatorSourceUrl?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceType?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourcePartition?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceRegion?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceTags?: {
      Comparison: (string | "EQUALS" | "NOT_EQUALS")
      Key: StringProperty
      Value: StringProperty
    }[]
    ResourceAwsEc2InstanceType?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsEc2InstanceImageId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsEc2InstanceIpV4Addresses?: {
      Cidr: StringProperty
    }[]
    ResourceAwsEc2InstanceIpV6Addresses?: {
      Cidr: StringProperty
    }[]
    ResourceAwsEc2InstanceKeyName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsEc2InstanceIamInstanceProfileArn?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsEc2InstanceVpcId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsEc2InstanceSubnetId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsEc2InstanceLaunchedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    ResourceAwsS3BucketOwnerId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsS3BucketOwnerName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsIamAccessKeyStatus?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsIamAccessKeyCreatedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    ResourceContainerName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceContainerImageId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceContainerImageName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceContainerLaunchedAt?: {
      DateRange?: {
        Unit: (string | "DAYS")
        Value: number
      }
      End?: StringProperty
      Start?: StringProperty
    }[]
    ResourceDetailsOther?: {
      Comparison: (string | "EQUALS" | "NOT_EQUALS")
      Key: StringProperty
      Value: StringProperty
    }[]
    ComplianceStatus?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    VerificationState?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    WorkflowState?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    WorkflowStatus?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    RecordState?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    RelatedFindingsProductArn?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    RelatedFindingsId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceApplicationArn?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceApplicationName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    NoteText?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
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
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    Sample?: {
      Value: boolean
    }[]
    ComplianceAssociatedStandardsId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ComplianceSecurityControlId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ComplianceSecurityControlParametersName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ComplianceSecurityControlParametersValue?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    FindingProviderFieldsConfidence?: {
      Eq?: number
      Gte?: number
      Lte?: number
    }[]
    FindingProviderFieldsCriticality?: {
      Eq?: number
      Gte?: number
      Lte?: number
    }[]
    FindingProviderFieldsRelatedFindingsId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    FindingProviderFieldsRelatedFindingsProductArn?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    FindingProviderFieldsSeverityLabel?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    FindingProviderFieldsSeverityOriginal?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    FindingProviderFieldsTypes?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsIamAccessKeyPrincipalName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceAwsIamUserUserName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    VulnerabilitiesExploitAvailable?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    VulnerabilitiesFixAvailable?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    Keyword?: {
      Value: StringProperty
    }[]
    ResourceAwsIamAccessKeyUserName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS")
      Value: StringProperty
    }[]
    SeverityNormalized?: {
      Eq?: number
      Gte?: number
      Lte?: number
    }[]
    SeverityProduct?: {
      Eq?: number
      Gte?: number
      Lte?: number
    }[]
  }
  GroupByAttribute: StringProperty
}

export const AWSSecurityHubInsight = ({
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
      Type: 'AWS::SecurityHub::Insight',
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