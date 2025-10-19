import {StringProperty} from "../StringProperty"


type Properties = {
  ClusterArn?: StringProperty
  VpcConfig?: {
    Subnets: StringProperty[]
    SecurityGroupIds: StringProperty[]
  }
  NodeRecovery?: (string | "Automatic" | "None")
  InstanceGroups?: {
    InstanceGroupName: StringProperty
    InstanceStorageConfigs?: Record<string, any>[]
    LifeCycleConfig: {
      SourceS3Uri: StringProperty
      OnCreate: StringProperty
    }
    TrainingPlanArn?: StringProperty
    ThreadsPerCore?: number
    OverrideVpcConfig?: {
      Subnets: StringProperty[]
      SecurityGroupIds: StringProperty[]
    }
    InstanceCount: number
    OnStartDeepHealthChecks?: (string | "InstanceStress" | "InstanceConnectivity")[]
    ImageId?: StringProperty
    CurrentCount?: number
    ScheduledUpdateConfig?: {
      ScheduleExpression: StringProperty
      DeploymentConfig?: {
        AutoRollbackConfiguration?: {
          AlarmName: StringProperty
        }[]
        RollingUpdatePolicy?: {
          MaximumBatchSize: {
            Type: StringProperty
            Value: number
          }
          RollbackMaximumBatchSize?: {
            Type: StringProperty
            Value: number
          }
        }
        WaitIntervalInSeconds?: number
      }
    }
    InstanceType: StringProperty
    ExecutionRole: StringProperty
  }[]
  RestrictedInstanceGroups?: {
    OverrideVpcConfig?: {
      Subnets: StringProperty[]
      SecurityGroupIds: StringProperty[]
    }
    InstanceCount: number
    OnStartDeepHealthChecks?: (string | "InstanceStress" | "InstanceConnectivity")[]
    EnvironmentConfig: {
      FSxLustreConfig?: {
        SizeInGiB: number
        PerUnitStorageThroughput: number
      }
    }
    InstanceGroupName: StringProperty
    InstanceStorageConfigs?: Record<string, any>[]
    CurrentCount?: number
    TrainingPlanArn?: StringProperty
    InstanceType: StringProperty
    ThreadsPerCore?: number
    ExecutionRole: StringProperty
  }[]
  Orchestrator?: {
    Eks: {
      ClusterArn: StringProperty
    }
  }
  ClusterRole?: StringProperty
  NodeProvisioningMode?: (string | "Continuous")
  CreationTime?: StringProperty
  ClusterName?: StringProperty
  FailureMessage?: StringProperty
  AutoScaling?: {
    Mode: (string | "Enable" | "Disable")
    AutoScalerType?: (string | "Karpenter")
  }
  ClusterStatus?: (string | "Creating" | "Deleting" | "Failed" | "InService" | "RollingBack" | "SystemUpdating" | "Updating")
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  TieredStorageConfig?: {
    Mode: (string | "Enable" | "Disable")
    InstanceMemoryAllocationPercentage?: number
  }
}

export const AWSSageMakerCluster = ({
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
      Type: 'AWS::SageMaker::Cluster',
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