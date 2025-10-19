import {StringProperty} from "../StringProperty"


type Properties = {
  DomainName: StringProperty
  DeadLetterQueueUrl?: StringProperty
  DefaultEncryptionKey?: StringProperty
  DefaultExpirationDays: number
  Matching?: {
    Enabled: boolean
    AutoMerging?: {
      Enabled: boolean
      ConflictResolution?: {
        ConflictResolvingModel: (string | "RECENCY" | "SOURCE")
        SourceName?: StringProperty
      }
      Consolidation?: {
        MatchingAttributesList: StringProperty[][]
      }
      MinAllowedConfidenceScoreForMerging?: number
    }
    ExportingConfig?: {
      S3Exporting?: {
        S3BucketName: StringProperty
        S3KeyName?: StringProperty
      }
    }
    JobSchedule?: {
      DayOfTheWeek: (string | "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY")
      Time: StringProperty
    }
  }
  RuleBasedMatching?: {
    Enabled: boolean
    AttributeTypesSelector?: {
      AttributeMatchingModel: (string | "ONE_TO_ONE" | "MANY_TO_MANY")
      Address?: StringProperty[]
      EmailAddress?: StringProperty[]
      PhoneNumber?: StringProperty[]
    }
    ConflictResolution?: {
      ConflictResolvingModel: (string | "RECENCY" | "SOURCE")
      SourceName?: StringProperty
    }
    ExportingConfig?: {
      S3Exporting?: {
        S3BucketName: StringProperty
        S3KeyName?: StringProperty
      }
    }
    MatchingRules?: {
      Rule: StringProperty[]
    }[]
    MaxAllowedRuleLevelForMatching?: number
    MaxAllowedRuleLevelForMerging?: number
    Status?: (string | "PENDING" | "IN_PROGRESS" | "ACTIVE")
  }
  Stats?: {
    MeteringProfileCount?: number
    ObjectCount?: number
    ProfileCount?: number
    TotalSize?: number
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CreatedAt?: StringProperty
  LastUpdatedAt?: StringProperty
}

export const AWSCustomerProfilesDomain = ({
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
      Type: 'AWS::CustomerProfiles::Domain',
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