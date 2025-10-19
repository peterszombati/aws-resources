import {StringProperty} from "../StringProperty"


type Properties = {
  AccelerateConfiguration?: {
    AccelerationStatus: (string | "Enabled" | "Suspended")
  }
  AccessControl?: (string | "AuthenticatedRead" | "AwsExecRead" | "BucketOwnerFullControl" | "BucketOwnerRead" | "LogDeliveryWrite" | "Private" | "PublicRead" | "PublicReadWrite")
  AnalyticsConfigurations?: {
    TagFilters?: {
      Value: StringProperty
      Key: StringProperty
    }[]
    StorageClassAnalysis: {
      DataExport?: {
        Destination: {
          BucketArn: StringProperty
          BucketAccountId?: StringProperty
          Format: (string | "CSV" | "ORC" | "Parquet")
          Prefix?: StringProperty
        }
        OutputSchemaVersion: StringProperty
      }
    }
    Id: StringProperty
    Prefix?: StringProperty
  }[]
  BucketEncryption?: {
    ServerSideEncryptionConfiguration: {
      BucketKeyEnabled?: boolean
      ServerSideEncryptionByDefault?: {
        KMSMasterKeyID?: StringProperty
        SSEAlgorithm: (string | "aws:kms" | "AES256" | "aws:kms:dsse")
      }
    }[]
  }
  BucketName?: StringProperty
  CorsConfiguration?: {
    CorsRules: {
      AllowedHeaders?: StringProperty[]
      AllowedMethods: (string | "GET" | "PUT" | "HEAD" | "POST" | "DELETE")[]
      AllowedOrigins: StringProperty[]
      ExposedHeaders?: StringProperty[]
      Id?: StringProperty
      MaxAge?: number
    }[]
  }
  IntelligentTieringConfigurations?: {
    Id: StringProperty
    Prefix?: StringProperty
    Status: (string | "Disabled" | "Enabled")
    TagFilters?: {
      Value: StringProperty
      Key: StringProperty
    }[]
    Tierings: {
      AccessTier: (string | "ARCHIVE_ACCESS" | "DEEP_ARCHIVE_ACCESS")
      Days: number
    }[]
  }[]
  InventoryConfigurations?: {
    Destination: {
      BucketArn: StringProperty
      BucketAccountId?: StringProperty
      Format: (string | "CSV" | "ORC" | "Parquet")
      Prefix?: StringProperty
    }
    Enabled: boolean
    Id: StringProperty
    IncludedObjectVersions: (string | "All" | "Current")
    OptionalFields?: (string | "Size" | "LastModifiedDate" | "StorageClass" | "ETag" | "IsMultipartUploaded" | "ReplicationStatus" | "EncryptionStatus" | "ObjectLockRetainUntilDate" | "ObjectLockMode" | "ObjectLockLegalHoldStatus" | "IntelligentTieringAccessTier" | "BucketKeyStatus" | "ChecksumAlgorithm" | "ObjectAccessControlList" | "ObjectOwner")[]
    Prefix?: StringProperty
    ScheduleFrequency: (string | "Daily" | "Weekly")
  }[]
  LifecycleConfiguration?: {
    Rules: {
      AbortIncompleteMultipartUpload?: {
        DaysAfterInitiation: number
      }
      ExpirationDate?: StringProperty
      ExpirationInDays?: number
      ExpiredObjectDeleteMarker?: boolean
      Id?: StringProperty
      NoncurrentVersionExpirationInDays?: number
      NoncurrentVersionExpiration?: {
        NoncurrentDays: number
        NewerNoncurrentVersions?: number
      }
      NoncurrentVersionTransition?: {
        StorageClass: (string | "DEEP_ARCHIVE" | "GLACIER" | "Glacier" | "GLACIER_IR" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD_IA")
        TransitionInDays: number
        NewerNoncurrentVersions?: number
      }
      NoncurrentVersionTransitions?: {
        StorageClass: (string | "DEEP_ARCHIVE" | "GLACIER" | "Glacier" | "GLACIER_IR" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD_IA")
        TransitionInDays: number
        NewerNoncurrentVersions?: number
      }[]
      Prefix?: StringProperty
      Status: (string | "Enabled" | "Disabled")
      TagFilters?: {
        Value: StringProperty
        Key: StringProperty
      }[]
      ObjectSizeGreaterThan?: StringProperty
      ObjectSizeLessThan?: StringProperty
      Transition?: {
        StorageClass: (string | "DEEP_ARCHIVE" | "GLACIER" | "Glacier" | "GLACIER_IR" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD_IA")
        TransitionDate?: StringProperty
        TransitionInDays?: number
      }
      Transitions?: {
        StorageClass: (string | "DEEP_ARCHIVE" | "GLACIER" | "Glacier" | "GLACIER_IR" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD_IA")
        TransitionDate?: StringProperty
        TransitionInDays?: number
      }[]
    }[]
    TransitionDefaultMinimumObjectSize?: (string | "varies_by_storage_class" | "all_storage_classes_128K")
  }
  LoggingConfiguration?: {
    DestinationBucketName?: StringProperty
    LogFilePrefix?: StringProperty
    TargetObjectKeyFormat?: Record<string, any>
  }
  MetricsConfigurations?: {
    AccessPointArn?: StringProperty
    Id: StringProperty
    Prefix?: StringProperty
    TagFilters?: {
      Value: StringProperty
      Key: StringProperty
    }[]
  }[]
  MetadataTableConfiguration?: {
    S3TablesDestination: {
      TableBucketArn: StringProperty
      TableName: StringProperty
      TableNamespace?: StringProperty
      TableArn?: StringProperty
    }
  }
  MetadataConfiguration?: {
    Destination?: {
      TableBucketType: (string | "aws" | "customer")
      TableBucketArn?: StringProperty
      TableNamespace?: StringProperty
    }
    JournalTableConfiguration: {
      TableName?: StringProperty
      TableArn?: StringProperty
      RecordExpiration: {
        Expiration: (string | "ENABLED" | "DISABLED")
        Days?: number
      }
      EncryptionConfiguration?: {
        SseAlgorithm: (string | "aws:kms" | "AES256")
        KmsKeyArn?: StringProperty
      }
    }
    InventoryTableConfiguration?: {
      TableName?: StringProperty
      TableArn?: StringProperty
      ConfigurationState: (string | "ENABLED" | "DISABLED")
      EncryptionConfiguration?: {
        SseAlgorithm: (string | "aws:kms" | "AES256")
        KmsKeyArn?: StringProperty
      }
    }
  }
  NotificationConfiguration?: {
    EventBridgeConfiguration?: {
      EventBridgeEnabled: boolean
    }
    LambdaConfigurations?: {
      Event: StringProperty
      Filter?: {
        S3Key: {
          Rules: {
            Name: StringProperty
            Value: StringProperty
          }[]
        }
      }
      Function: StringProperty
    }[]
    QueueConfigurations?: {
      Event: StringProperty
      Filter?: {
        S3Key: {
          Rules: {
            Name: StringProperty
            Value: StringProperty
          }[]
        }
      }
      Queue: StringProperty
    }[]
    TopicConfigurations?: {
      Event: StringProperty
      Filter?: {
        S3Key: {
          Rules: {
            Name: StringProperty
            Value: StringProperty
          }[]
        }
      }
      Topic: StringProperty
    }[]
  }
  ObjectLockConfiguration?: {
    ObjectLockEnabled?: StringProperty
    Rule?: {
      DefaultRetention?: {
        Years?: number
        Days?: number
        Mode?: (string | "COMPLIANCE" | "GOVERNANCE")
      }
    }
  }
  ObjectLockEnabled?: boolean
  OwnershipControls?: {
    Rules: {
      ObjectOwnership?: (string | "ObjectWriter" | "BucketOwnerPreferred" | "BucketOwnerEnforced")
    }[]
  }
  PublicAccessBlockConfiguration?: {
    BlockPublicAcls?: boolean
    BlockPublicPolicy?: boolean
    IgnorePublicAcls?: boolean
    RestrictPublicBuckets?: boolean
  }
  ReplicationConfiguration?: {
    Role: StringProperty
    Rules: {
      DeleteMarkerReplication?: {
        Status?: (string | "Disabled" | "Enabled")
      }
      Destination: {
        AccessControlTranslation?: {
          Owner: StringProperty
        }
        Account?: StringProperty
        Bucket: StringProperty
        EncryptionConfiguration?: {
          ReplicaKmsKeyID: StringProperty
        }
        Metrics?: {
          EventThreshold?: {
            Minutes: number
          }
          Status: (string | "Disabled" | "Enabled")
        }
        ReplicationTime?: {
          Status: (string | "Disabled" | "Enabled")
          Time: {
            Minutes: number
          }
        }
        StorageClass?: (string | "DEEP_ARCHIVE" | "GLACIER" | "GLACIER_IR" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "REDUCED_REDUNDANCY" | "STANDARD" | "STANDARD_IA")
      }
      Filter?: {
        And?: {
          Prefix?: StringProperty
          TagFilters?: {
            Value: StringProperty
            Key: StringProperty
          }[]
        }
        Prefix?: StringProperty
        TagFilter?: {
          Value: StringProperty
          Key: StringProperty
        }
      }
      Id?: StringProperty
      Prefix?: StringProperty
      Priority?: number
      SourceSelectionCriteria?: {
        ReplicaModifications?: {
          Status: (string | "Enabled" | "Disabled")
        }
        SseKmsEncryptedObjects?: {
          Status: (string | "Disabled" | "Enabled")
        }
      }
      Status: (string | "Disabled" | "Enabled")
    }[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VersioningConfiguration?: {
    Status: (string | "Enabled" | "Suspended")
  }
  WebsiteConfiguration?: {
    ErrorDocument?: StringProperty
    IndexDocument?: StringProperty
    RoutingRules?: {
      RedirectRule: {
        HostName?: StringProperty
        HttpRedirectCode?: StringProperty
        Protocol?: (string | "http" | "https")
        ReplaceKeyPrefixWith?: StringProperty
        ReplaceKeyWith?: StringProperty
      }
      RoutingRuleCondition?: {
        KeyPrefixEquals?: StringProperty
        HttpErrorCodeReturnedEquals?: StringProperty
      }
    }[]
    RedirectAllRequestsTo?: {
      HostName: StringProperty
      Protocol?: (string | "http" | "https")
    }
  }
  Arn?: StringProperty
  DomainName?: StringProperty
  DualStackDomainName?: StringProperty
  RegionalDomainName?: StringProperty
  WebsiteURL?: StringProperty
}

export const AWSS3Bucket = ({
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
      Type: 'AWS::S3::Bucket',
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