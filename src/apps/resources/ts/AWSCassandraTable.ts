import {StringProperty} from "../StringProperty"


type Properties = {
  KeyspaceName: StringProperty
  TableName?: StringProperty
  RegularColumns?: {
    ColumnName: StringProperty
    ColumnType: StringProperty
  }[]
  PartitionKeyColumns: {
    ColumnName: StringProperty
    ColumnType: StringProperty
  }[]
  ClusteringKeyColumns?: {
    Column: {
      ColumnName: StringProperty
      ColumnType: StringProperty
    }
    OrderBy?: (string | "ASC" | "DESC")
  }[]
  BillingMode?: {
    Mode: (string | "PROVISIONED" | "ON_DEMAND")
    ProvisionedThroughput?: {
      ReadCapacityUnits: number
      WriteCapacityUnits: number
    }
  }
  PointInTimeRecoveryEnabled?: boolean
  ClientSideTimestampsEnabled?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  DefaultTimeToLive?: number
  EncryptionSpecification?: {
    EncryptionType: (string | "AWS_OWNED_KMS_KEY" | "CUSTOMER_MANAGED_KMS_KEY")
    KmsKeyIdentifier?: StringProperty
  }
  AutoScalingSpecifications?: {
    WriteCapacityAutoScaling?: {
      AutoScalingDisabled?: boolean
      MinimumUnits?: number
      MaximumUnits?: number
      ScalingPolicy?: {
        TargetTrackingScalingPolicyConfiguration?: {
          DisableScaleIn?: boolean
          ScaleInCooldown?: number
          ScaleOutCooldown?: number
          TargetValue: number
        }
      }
    }
    ReadCapacityAutoScaling?: {
      AutoScalingDisabled?: boolean
      MinimumUnits?: number
      MaximumUnits?: number
      ScalingPolicy?: {
        TargetTrackingScalingPolicyConfiguration?: {
          DisableScaleIn?: boolean
          ScaleInCooldown?: number
          ScaleOutCooldown?: number
          TargetValue: number
        }
      }
    }
  }
  CdcSpecification?: {
    Status: (string | "ENABLED" | "DISABLED")
    ViewType?: (string | "NEW_IMAGE" | "OLD_IMAGE" | "KEYS_ONLY" | "NEW_AND_OLD_IMAGES")
    Tags?: {
      Key: StringProperty
      Value: StringProperty
    }[]
  }
  ReplicaSpecifications?: {
    Region: StringProperty
    ReadCapacityUnits?: number
    ReadCapacityAutoScaling?: {
      AutoScalingDisabled?: boolean
      MinimumUnits?: number
      MaximumUnits?: number
      ScalingPolicy?: {
        TargetTrackingScalingPolicyConfiguration?: {
          DisableScaleIn?: boolean
          ScaleInCooldown?: number
          ScaleOutCooldown?: number
          TargetValue: number
        }
      }
    }
  }[]
}

export const AWSCassandraTable = ({
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
      Type: 'AWS::Cassandra::Table',
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