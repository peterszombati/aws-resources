import {StringProperty} from "../StringProperty"


type Properties = {
  MultiRegionConsistency?: (string | "EVENTUAL" | "STRONG")
  TableId?: StringProperty
  SSESpecification?: {
    SSEEnabled: boolean
    SSEType?: StringProperty
  }
  StreamSpecification?: {
    StreamViewType: StringProperty
  }
  WarmThroughput?: {
    ReadUnitsPerSecond?: number
    WriteUnitsPerSecond?: number
  }
  Replicas: {
    SSESpecification?: {
      KMSMasterKeyId: StringProperty
    }
    KinesisStreamSpecification?: {
      ApproximateCreationDateTimePrecision?: (string | "MICROSECOND" | "MILLISECOND")
      StreamArn: StringProperty
    }
    ContributorInsightsSpecification?: {
      Mode?: (string | "ACCESSED_AND_THROTTLED_KEYS" | "THROTTLED_KEYS")
      Enabled: boolean
    }
    PointInTimeRecoverySpecification?: {
      PointInTimeRecoveryEnabled?: boolean
      RecoveryPeriodInDays?: number
    }
    ReplicaStreamSpecification?: {
      ResourcePolicy: {
        PolicyDocument: Record<string, any>
      }
    }
    GlobalSecondaryIndexes?: {
      IndexName: StringProperty
      ContributorInsightsSpecification?: {
        Mode?: (string | "ACCESSED_AND_THROTTLED_KEYS" | "THROTTLED_KEYS")
        Enabled: boolean
      }
      ReadProvisionedThroughputSettings?: {
        ReadCapacityUnits?: number
        ReadCapacityAutoScalingSettings?: {
          MinCapacity: number
          SeedCapacity?: number
          TargetTrackingScalingPolicyConfiguration: {
            ScaleOutCooldown?: number
            TargetValue: number /* schema format: double*/
            DisableScaleIn?: boolean
            ScaleInCooldown?: number
          }
          MaxCapacity: number
        }
      }
      ReadOnDemandThroughputSettings?: {
        MaxReadRequestUnits?: number
      }
    }[]
    Region: StringProperty
    ResourcePolicy?: {
      PolicyDocument: Record<string, any>
    }
    ReadProvisionedThroughputSettings?: {
      ReadCapacityUnits?: number
      ReadCapacityAutoScalingSettings?: {
        MinCapacity: number
        SeedCapacity?: number
        TargetTrackingScalingPolicyConfiguration: {
          ScaleOutCooldown?: number
          TargetValue: number /* schema format: double*/
          DisableScaleIn?: boolean
          ScaleInCooldown?: number
        }
        MaxCapacity: number
      }
    }
    TableClass?: StringProperty
    DeletionProtectionEnabled?: boolean
    Tags?: {
      Value: StringProperty
      Key: StringProperty
    }[]
    ReadOnDemandThroughputSettings?: {
      MaxReadRequestUnits?: number
    }
  }[]
  WriteProvisionedThroughputSettings?: {
    WriteCapacityAutoScalingSettings?: {
      MinCapacity: number
      SeedCapacity?: number
      TargetTrackingScalingPolicyConfiguration: {
        ScaleOutCooldown?: number
        TargetValue: number /* schema format: double*/
        DisableScaleIn?: boolean
        ScaleInCooldown?: number
      }
      MaxCapacity: number
    }
  }
  WriteOnDemandThroughputSettings?: {
    MaxWriteRequestUnits?: number
  }
  GlobalTableWitnesses?: {
    Region?: StringProperty
  }[]
  TableName?: StringProperty
  AttributeDefinitions: {
    AttributeType: StringProperty
    AttributeName: StringProperty
  }[]
  BillingMode?: StringProperty
  GlobalSecondaryIndexes?: {
    IndexName: StringProperty
    Projection: {
      NonKeyAttributes?: StringProperty[]
      ProjectionType?: StringProperty
    }
    KeySchema: {
      KeyType: StringProperty
      AttributeName: StringProperty
    }[]
    WarmThroughput?: {
      ReadUnitsPerSecond?: number
      WriteUnitsPerSecond?: number
    }
    WriteProvisionedThroughputSettings?: {
      WriteCapacityAutoScalingSettings?: {
        MinCapacity: number
        SeedCapacity?: number
        TargetTrackingScalingPolicyConfiguration: {
          ScaleOutCooldown?: number
          TargetValue: number /* schema format: double*/
          DisableScaleIn?: boolean
          ScaleInCooldown?: number
        }
        MaxCapacity: number
      }
    }
    WriteOnDemandThroughputSettings?: {
      MaxWriteRequestUnits?: number
    }
  }[]
  KeySchema: {
    KeyType: StringProperty
    AttributeName: StringProperty
  }[]
  LocalSecondaryIndexes?: {
    IndexName: StringProperty
    Projection: {
      NonKeyAttributes?: StringProperty[]
      ProjectionType?: StringProperty
    }
    KeySchema: {
      KeyType: StringProperty
      AttributeName: StringProperty
    }[]
  }[]
  Arn?: StringProperty
  StreamArn?: StringProperty
  TimeToLiveSpecification?: {
    Enabled: boolean
    AttributeName?: StringProperty
  }
}

export const AWSDynamoDBGlobalTable = ({
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
      Type: 'AWS::DynamoDB::GlobalTable',
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