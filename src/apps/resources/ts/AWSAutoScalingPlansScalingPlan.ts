import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ScalingPlanName?: StringProperty
  ScalingPlanVersion?: StringProperty
  ApplicationSource: {
    CloudFormationStackARN?: StringProperty
    TagFilters?: {
      Values?: StringProperty[]
      Key: StringProperty
    }[]
  }
  ScalingInstructions: {
    DisableDynamicScaling?: boolean
    ServiceNamespace: StringProperty
    PredictiveScalingMaxCapacityBehavior?: StringProperty
    ScalableDimension: StringProperty
    ScalingPolicyUpdateBehavior?: StringProperty
    MinCapacity: number
    TargetTrackingConfigurations: {
      ScaleOutCooldown?: number
      TargetValue: number
      PredefinedScalingMetricSpecification?: {
        ResourceLabel?: StringProperty
        PredefinedScalingMetricType: StringProperty
      }
      DisableScaleIn?: boolean
      ScaleInCooldown?: number
      EstimatedInstanceWarmup?: number
      CustomizedScalingMetricSpecification?: {
        MetricName: StringProperty
        Statistic: StringProperty
        Dimensions?: {
          Value: StringProperty
          Name: StringProperty
        }[]
        Unit?: StringProperty
        Namespace: StringProperty
      }
    }[]
    PredictiveScalingMaxCapacityBuffer?: number
    CustomizedLoadMetricSpecification?: {
      MetricName: StringProperty
      Statistic: StringProperty
      Dimensions?: {
        Value: StringProperty
        Name: StringProperty
      }[]
      Unit?: StringProperty
      Namespace: StringProperty
    }
    PredefinedLoadMetricSpecification?: {
      PredefinedLoadMetricType: StringProperty
      ResourceLabel?: StringProperty
    }
    ResourceId: StringProperty
    ScheduledActionBufferTime?: number
    MaxCapacity: number
    PredictiveScalingMode?: StringProperty
  }[]
}

export const AWSAutoScalingPlansScalingPlan = ({
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
      Type: 'AWS::AutoScalingPlans::ScalingPlan',
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