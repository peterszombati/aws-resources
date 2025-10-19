import {StringProperty} from "../StringProperty"

type AutoScalingPolicy = {
  Rules: ScalingRule[]
  Constraints: ScalingConstraints
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

type EbsConfiguration = {
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[]
  EbsOptimized?: boolean
}

type Configuration = {
  ConfigurationProperties?: Record<string, any>
  Configurations?: Configuration[]
  Classification?: StringProperty
}

type ScalingAction = {
  Market?: StringProperty
  SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration
}

type SimpleScalingPolicyConfiguration = {
  ScalingAdjustment: number
  CoolDown?: number
  AdjustmentType?: StringProperty
}

type ScalingConstraints = {
  MinCapacity: number
  MaxCapacity: number
}

type EbsBlockDeviceConfig = {
  VolumeSpecification: VolumeSpecification
  VolumesPerInstance?: number
}

type ScalingTrigger = {
  CloudWatchAlarmDefinition: CloudWatchAlarmDefinition
}

type ScalingRule = {
  Action: ScalingAction
  Description?: StringProperty
  Trigger: ScalingTrigger
  Name: StringProperty
}

type MetricDimension = {
  Value: StringProperty
  Key: StringProperty
}


type Properties = {
  JobFlowId: StringProperty
  AutoScalingPolicy?: AutoScalingPolicy
  BidPrice?: StringProperty
  InstanceCount: number
  EbsConfiguration?: EbsConfiguration
  InstanceRole: StringProperty
  CustomAmiId?: StringProperty
  Id?: StringProperty
  Configurations?: Configuration[]
  InstanceType: StringProperty
  Market?: StringProperty
  Name?: StringProperty
}

export const AWSEMRInstanceGroupConfig = ({
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
      Type: 'AWS::EMR::InstanceGroupConfig',
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