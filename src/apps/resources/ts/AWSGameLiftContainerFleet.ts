import {StringProperty} from "../StringProperty"


type Properties = {
  FleetId?: StringProperty
  FleetRoleArn: StringProperty
  Description?: StringProperty
  GameServerContainerGroupDefinitionName?: StringProperty
  GameServerContainerGroupDefinitionArn?: StringProperty
  PerInstanceContainerGroupDefinitionName?: StringProperty
  PerInstanceContainerGroupDefinitionArn?: StringProperty
  InstanceConnectionPortRange?: {
    FromPort: number
    ToPort: number
  }
  InstanceInboundPermissions?: {
    FromPort: number
    IpRange: StringProperty
    Protocol: (string | "TCP" | "UDP")
    ToPort: number
  }[]
  GameServerContainerGroupsPerInstance?: number
  MaximumGameServerContainerGroupsPerInstance?: number
  CreationTime?: StringProperty
  Status?: (string | "PENDING" | "CREATING" | "CREATED" | "ACTIVATING" | "ACTIVE" | "UPDATING" | "DELETING")
  DeploymentDetails?: {
    LatestDeploymentId?: StringProperty
  }
  DeploymentConfiguration?: {
    ProtectionStrategy?: (string | "WITH_PROTECTION" | "IGNORE_PROTECTION")
    MinimumHealthyPercentage?: number
    ImpairmentStrategy?: (string | "MAINTAIN" | "ROLLBACK")
  }
  InstanceType?: StringProperty
  BillingType?: (string | "ON_DEMAND" | "SPOT")
  Locations?: {
    Location: StringProperty
    LocationCapacity?: {
      DesiredEC2Instances?: number
      MinSize: number
      MaxSize: number
    }
    StoppedActions?: (string | "AUTO_SCALING")[]
  }[]
  ScalingPolicies?: {
    ComparisonOperator?: (string | "GreaterThanOrEqualToThreshold" | "GreaterThanThreshold" | "LessThanThreshold" | "LessThanOrEqualToThreshold")
    EvaluationPeriods?: number
    MetricName: (string | "ActivatingGameSessions" | "ActiveGameSessions" | "ActiveInstances" | "AvailableGameSessions" | "AvailablePlayerSessions" | "CurrentPlayerSessions" | "IdleInstances" | "PercentAvailableGameSessions" | "PercentIdleInstances" | "QueueDepth" | "WaitTime" | "ConcurrentActivatableGameSessions")
    Name: StringProperty
    PolicyType?: (string | "RuleBased" | "TargetBased")
    ScalingAdjustment?: number
    ScalingAdjustmentType?: (string | "ChangeInCapacity" | "ExactCapacity" | "PercentChangeInCapacity")
    TargetConfiguration?: {
      TargetValue: number
    }
    Threshold?: number
  }[]
  MetricGroups?: StringProperty[]
  NewGameSessionProtectionPolicy?: (string | "FullProtection" | "NoProtection")
  GameSessionCreationLimitPolicy?: {
    NewGameSessionsPerCreator?: number
    PolicyPeriodInMinutes?: number
  }
  LogConfiguration?: {
    LogDestination?: (string | "NONE" | "CLOUDWATCH" | "S3")
    LogGroupArn?: StringProperty
    S3BucketName?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  FleetArn?: StringProperty
}

export const AWSGameLiftContainerFleet = ({
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
      Type: 'AWS::GameLift::ContainerFleet',
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