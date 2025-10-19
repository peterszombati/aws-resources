import {StringProperty} from "../StringProperty"


type Properties = {
  ScalingPolicies?: {
    ComparisonOperator?: (string | "GreaterThanOrEqualToThreshold" | "GreaterThanThreshold" | "LessThanThreshold" | "LessThanOrEqualToThreshold")
    EvaluationPeriods?: number
    Location?: StringProperty
    MetricName: (string | "ActivatingGameSessions" | "ActiveGameSessions" | "ActiveInstances" | "AvailableGameSessions" | "AvailablePlayerSessions" | "CurrentPlayerSessions" | "IdleInstances" | "PercentAvailableGameSessions" | "PercentIdleInstances" | "QueueDepth" | "WaitTime" | "ConcurrentActivatableGameSessions")
    Name: StringProperty
    PolicyType?: (string | "RuleBased" | "TargetBased")
    ScalingAdjustment?: number
    ScalingAdjustmentType?: (string | "ChangeInCapacity" | "ExactCapacity" | "PercentChangeInCapacity")
    Status?: (string | "ACTIVE" | "UPDATE_REQUESTED" | "UPDATING" | "DELETE_REQUESTED" | "DELETING" | "DELETED" | "ERROR")
    TargetConfiguration?: {
      TargetValue: number
    }
    Threshold?: number
    UpdateStatus?: (string | "PENDING_UPDATE")
  }[]
  AnywhereConfiguration?: any
  ApplyCapacity?: (string | "ON_UPDATE" | "ON_CREATE_AND_UPDATE" | "ON_CREATE_AND_UPDATE_WITH_AUTOSCALING")
  CertificateConfiguration?: {
    CertificateType: (string | "DISABLED" | "GENERATED")
  }
  ComputeType?: (string | "EC2" | "ANYWHERE")
  Description?: StringProperty
  DesiredEC2Instances?: number
  EC2InboundPermissions?: {
    FromPort: number
    IpRange: StringProperty
    Protocol: (string | "TCP" | "UDP")
    ToPort: number
  }[]
  EC2InstanceType?: StringProperty
  FleetType?: (string | "ON_DEMAND" | "SPOT")
  InstanceRoleARN?: StringProperty
  InstanceRoleCredentialsProvider?: (string | "SHARED_CREDENTIAL_FILE")
  Locations?: {
    Location: StringProperty
    LocationCapacity?: {
      DesiredEC2Instances?: number
      MinSize: number
      MaxSize: number
    }
  }[]
  LogPaths?: StringProperty[]
  MaxSize?: number
  MetricGroups?: StringProperty[]
  MinSize?: number
  Name: StringProperty
  NewGameSessionProtectionPolicy?: (string | "FullProtection" | "NoProtection")
  PeerVpcAwsAccountId?: StringProperty
  PeerVpcId?: StringProperty
  ResourceCreationLimitPolicy?: {
    NewGameSessionsPerCreator?: number
    PolicyPeriodInMinutes?: number
  }
  FleetId?: StringProperty
  BuildId?: StringProperty
  ScriptId?: StringProperty
  RuntimeConfiguration?: {
    GameSessionActivationTimeoutSeconds?: number
    MaxConcurrentGameSessionActivations?: number
    ServerProcesses?: {
      ConcurrentExecutions: number
      LaunchPath: StringProperty
      Parameters?: StringProperty
    }[]
  }
  ServerLaunchParameters?: StringProperty
  ServerLaunchPath?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  FleetArn?: StringProperty
}

export const AWSGameLiftFleet = ({
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
      Type: 'AWS::GameLift::Fleet',
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