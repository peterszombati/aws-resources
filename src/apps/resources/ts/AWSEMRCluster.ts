import {StringProperty} from "../StringProperty"

type EbsConfiguration = {
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[]
  EbsOptimized?: boolean
}

type KeyValue = {
  Value?: StringProperty
  Key?: StringProperty
}

type Configuration = {
  ConfigurationProperties?: Record<string, any>
  Configurations?: Configuration[]
  Classification?: StringProperty
}

type OnDemandResizingSpecification = {
  CapacityReservationOptions?: OnDemandCapacityReservationOptions
  AllocationStrategy?: StringProperty
  TimeoutDurationMinutes?: number
}

type StepConfig = {
  HadoopJarStep: HadoopJarStepConfig
  ActionOnFailure?: StringProperty
  Name: StringProperty
}

type InstanceFleetConfig = {
  TargetOnDemandCapacity?: number
  TargetSpotCapacity?: number
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications
  ResizeSpecifications?: InstanceFleetResizingSpecifications
  InstanceTypeConfigs?: InstanceTypeConfig[]
  Name?: StringProperty
}

type InstanceTypeConfig = {
  BidPrice?: StringProperty
  WeightedCapacity?: number
  EbsConfiguration?: EbsConfiguration
  Priority?: number
  BidPriceAsPercentageOfOnDemandPrice?: number
  CustomAmiId?: StringProperty
  Configurations?: Configuration[]
  InstanceType: StringProperty
}

type SpotProvisioningSpecification = {
  AllocationStrategy?: StringProperty
  TimeoutDurationMinutes: number
  TimeoutAction: StringProperty
  BlockDurationMinutes?: number
}

type ScriptBootstrapActionConfig = {
  Path: StringProperty
  Args?: StringProperty[]
}

type InstanceFleetResizingSpecifications = {
  OnDemandResizeSpecification?: OnDemandResizingSpecification
  SpotResizeSpecification?: SpotResizingSpecification
}

type InstanceFleetProvisioningSpecifications = {
  SpotSpecification?: SpotProvisioningSpecification
  OnDemandSpecification?: OnDemandProvisioningSpecification
}

type SimpleScalingPolicyConfiguration = {
  ScalingAdjustment: number
  CoolDown?: number
  AdjustmentType?: StringProperty
}

type PlacementGroupConfig = {
  InstanceRole: StringProperty
  PlacementStrategy?: StringProperty
}

type OnDemandProvisioningSpecification = {
  CapacityReservationOptions?: OnDemandCapacityReservationOptions
  AllocationStrategy: StringProperty
}

type ScalingTrigger = {
  CloudWatchAlarmDefinition: CloudWatchAlarmDefinition
}

type ManagedScalingPolicy = {
  UtilizationPerformanceIndex?: number
  ScalingStrategy?: StringProperty
  ComputeLimits?: ComputeLimits
}

type InstanceGroupConfig = {
  AutoScalingPolicy?: AutoScalingPolicy
  BidPrice?: StringProperty
  InstanceCount: number
  EbsConfiguration?: EbsConfiguration
  CustomAmiId?: StringProperty
  Configurations?: Configuration[]
  InstanceType: StringProperty
  Market?: StringProperty
  Name?: StringProperty
}

type HadoopJarStepConfig = {
  Args?: StringProperty[]
  MainClass?: StringProperty
  Jar: StringProperty
  StepProperties?: KeyValue[]
}

type VolumeSpecification = {
  SizeInGB: number
  Throughput?: number
  VolumeType: StringProperty
  Iops?: number
}

type CloudWatchAlarmDefinition = {
  MetricName: StringProperty
  ComparisonOperator: StringProperty
  Statistic?: StringProperty
  Dimensions?: MetricDimension[]
  Period: number
  EvaluationPeriods?: number
  Unit?: StringProperty
  Namespace?: StringProperty
  Threshold: number
}

type AutoTerminationPolicy = {
  IdleTimeout?: number
}

type KerberosAttributes = {
  KdcAdminPassword: StringProperty
  Realm: StringProperty
  ADDomainJoinPassword?: StringProperty
  ADDomainJoinUser?: StringProperty
  CrossRealmTrustPrincipalPassword?: StringProperty
}

type JobFlowInstancesConfig = {
  MasterInstanceFleet?: InstanceFleetConfig
  AdditionalSlaveSecurityGroups?: StringProperty[]
  CoreInstanceFleet?: InstanceFleetConfig
  CoreInstanceGroup?: InstanceGroupConfig
  Ec2SubnetIds?: StringProperty[]
  HadoopVersion?: StringProperty
  TerminationProtected?: boolean
  UnhealthyNodeReplacement?: boolean
  KeepJobFlowAliveWhenNoSteps?: boolean
  Ec2KeyName?: StringProperty
  MasterInstanceGroup?: InstanceGroupConfig
  Placement?: PlacementType
  TaskInstanceFleets?: InstanceFleetConfig[]
  Ec2SubnetId?: StringProperty
  TaskInstanceGroups?: InstanceGroupConfig[]
  ServiceAccessSecurityGroup?: StringProperty
  EmrManagedSlaveSecurityGroup?: StringProperty
  AdditionalMasterSecurityGroups?: StringProperty[]
  EmrManagedMasterSecurityGroup?: StringProperty
}

type ScalingAction = {
  Market?: StringProperty
  SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration
}

type EbsBlockDeviceConfig = {
  VolumeSpecification: VolumeSpecification
  VolumesPerInstance?: number
}

type ScalingRule = {
  Action: ScalingAction
  Description?: StringProperty
  Trigger: ScalingTrigger
  Name: StringProperty
}

type ComputeLimits = {
  MaximumOnDemandCapacityUnits?: number
  MaximumCapacityUnits: number
  MaximumCoreCapacityUnits?: number
  MinimumCapacityUnits: number
  UnitType: StringProperty
}

type MetricDimension = {
  Value: StringProperty
  Key: StringProperty
}

type BootstrapActionConfig = {
  ScriptBootstrapAction: ScriptBootstrapActionConfig
  Name: StringProperty
}

type SpotResizingSpecification = {
  AllocationStrategy?: StringProperty
  TimeoutDurationMinutes?: number
}

type AutoScalingPolicy = {
  Rules: ScalingRule[]
  Constraints: ScalingConstraints
}

type OnDemandCapacityReservationOptions = {
  UsageStrategy?: StringProperty
  CapacityReservationResourceGroupArn?: StringProperty
  CapacityReservationPreference?: StringProperty
}

type PlacementType = {
  AvailabilityZone: StringProperty
}

type ScalingConstraints = {
  MinCapacity: number
  MaxCapacity: number
}

type Tag = {
  Value: StringProperty
  Key: StringProperty
}

type Application = {
  AdditionalInfo?: Record<string, any>
  Args?: StringProperty[]
  Version?: StringProperty
  Name?: StringProperty
}


type Properties = {
  Steps?: StepConfig[]
  PlacementGroupConfigs?: PlacementGroupConfig[]
  StepConcurrencyLevel?: number
  EbsRootVolumeSize?: number
  OSReleaseLabel?: StringProperty
  Name: StringProperty
  ServiceRole: StringProperty
  LogUri?: StringProperty
  BootstrapActions?: BootstrapActionConfig[]
  MasterPublicDNS?: StringProperty
  Configurations?: Configuration[]
  ReleaseLabel?: StringProperty
  Tags?: Tag[]
  ManagedScalingPolicy?: ManagedScalingPolicy
  LogEncryptionKmsKeyId?: StringProperty
  AdditionalInfo?: Record<string, any>
  AutoTerminationPolicy?: AutoTerminationPolicy
  KerberosAttributes?: KerberosAttributes
  Applications?: Application[]
  AutoScalingRole?: StringProperty
  CustomAmiId?: StringProperty
  EbsRootVolumeIops?: number
  Instances: JobFlowInstancesConfig
  ScaleDownBehavior?: StringProperty
  EbsRootVolumeThroughput?: number
  JobFlowRole: StringProperty
  VisibleToAllUsers?: boolean
  SecurityConfiguration?: StringProperty
  Id?: StringProperty
}

export const AWSEMRCluster = ({
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
      Type: 'AWS::EMR::Cluster',
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