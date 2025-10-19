import {StringProperty} from "../StringProperty"


type Properties = {
  PolicyType: StringProperty
  ResourceId?: StringProperty
  ScalingTargetId?: StringProperty
  PolicyName: StringProperty
  ServiceNamespace?: StringProperty
  ScalableDimension?: StringProperty
  TargetTrackingScalingPolicyConfiguration?: {
    ScaleOutCooldown?: number
    TargetValue: number
    CustomizedMetricSpecification?: {
      MetricName?: StringProperty
      Metrics?: {
        ReturnData?: boolean
        Expression?: StringProperty
        Label?: StringProperty
        MetricStat?: {
          Stat?: StringProperty
          Metric?: {
            MetricName?: StringProperty
            Dimensions?: {
              Value?: StringProperty
              Name?: StringProperty
            }[]
            Namespace?: StringProperty
          }
          Unit?: StringProperty
        }
        Id?: StringProperty
      }[]
      Statistic?: StringProperty
      Dimensions?: {
        Value: StringProperty
        Name: StringProperty
      }[]
      Unit?: StringProperty
      Namespace?: StringProperty
    }
    DisableScaleIn?: boolean
    ScaleInCooldown?: number
    PredefinedMetricSpecification?: {
      PredefinedMetricType: StringProperty
      ResourceLabel?: StringProperty
    }
  }
  Arn?: StringProperty
  StepScalingPolicyConfiguration?: {
    MetricAggregationType?: StringProperty
    Cooldown?: number
    StepAdjustments?: {
      MetricIntervalUpperBound?: number
      MetricIntervalLowerBound?: number
      ScalingAdjustment: number
    }[]
    MinAdjustmentMagnitude?: number
    AdjustmentType?: StringProperty
  }
  PredictiveScalingPolicyConfiguration?: {
    MaxCapacityBreachBehavior?: StringProperty
    MaxCapacityBuffer?: number
    Mode?: StringProperty
    MetricSpecifications: {
      CustomizedLoadMetricSpecification?: {
        MetricDataQueries: {
          ReturnData?: boolean
          Expression?: StringProperty
          Label?: StringProperty
          MetricStat?: {
            Stat?: StringProperty
            Metric?: {
              MetricName?: StringProperty
              Dimensions?: {
                Value?: StringProperty
                Name?: StringProperty
              }[]
              Namespace?: StringProperty
            }
            Unit?: StringProperty
          }
          Id?: StringProperty
        }[]
      }
      PredefinedLoadMetricSpecification?: {
        PredefinedMetricType: StringProperty
        ResourceLabel?: StringProperty
      }
      TargetValue: number
      PredefinedScalingMetricSpecification?: {
        PredefinedMetricType: StringProperty
        ResourceLabel?: StringProperty
      }
      CustomizedCapacityMetricSpecification?: {
        MetricDataQueries: {
          ReturnData?: boolean
          Expression?: StringProperty
          Label?: StringProperty
          MetricStat?: {
            Stat?: StringProperty
            Metric?: {
              MetricName?: StringProperty
              Dimensions?: {
                Value?: StringProperty
                Name?: StringProperty
              }[]
              Namespace?: StringProperty
            }
            Unit?: StringProperty
          }
          Id?: StringProperty
        }[]
      }
      CustomizedScalingMetricSpecification?: {
        MetricDataQueries: {
          ReturnData?: boolean
          Expression?: StringProperty
          Label?: StringProperty
          MetricStat?: {
            Stat?: StringProperty
            Metric?: {
              MetricName?: StringProperty
              Dimensions?: {
                Value?: StringProperty
                Name?: StringProperty
              }[]
              Namespace?: StringProperty
            }
            Unit?: StringProperty
          }
          Id?: StringProperty
        }[]
      }
      PredefinedMetricPairSpecification?: {
        PredefinedMetricType: StringProperty
        ResourceLabel?: StringProperty
      }
    }[]
    SchedulingBufferTime?: number
  }
}

export const AWSApplicationAutoScalingScalingPolicy = ({
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
      Type: 'AWS::ApplicationAutoScaling::ScalingPolicy',
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