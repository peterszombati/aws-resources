import {StringProperty} from "../StringProperty"


type Properties = {
  MetricAggregationType?: StringProperty
  PolicyName?: StringProperty
  PolicyType?: StringProperty
  PredictiveScalingConfiguration?: {
    MetricSpecifications: {
      CustomizedCapacityMetricSpecification?: {
        MetricDataQueries: {
          Label?: StringProperty
          MetricStat?: {
            Metric: {
              MetricName: StringProperty
              Dimensions?: {
                Value: StringProperty
                Name: StringProperty
              }[]
              Namespace: StringProperty
            }
            Stat: StringProperty
            Unit?: StringProperty
          }
          Id: StringProperty
          ReturnData?: boolean
          Expression?: StringProperty
        }[]
      }
      CustomizedLoadMetricSpecification?: {
        MetricDataQueries: {
          Label?: StringProperty
          MetricStat?: {
            Metric: {
              MetricName: StringProperty
              Dimensions?: {
                Value: StringProperty
                Name: StringProperty
              }[]
              Namespace: StringProperty
            }
            Stat: StringProperty
            Unit?: StringProperty
          }
          Id: StringProperty
          ReturnData?: boolean
          Expression?: StringProperty
        }[]
      }
      CustomizedScalingMetricSpecification?: {
        MetricDataQueries: {
          Label?: StringProperty
          MetricStat?: {
            Metric: {
              MetricName: StringProperty
              Dimensions?: {
                Value: StringProperty
                Name: StringProperty
              }[]
              Namespace: StringProperty
            }
            Stat: StringProperty
            Unit?: StringProperty
          }
          Id: StringProperty
          ReturnData?: boolean
          Expression?: StringProperty
        }[]
      }
      PredefinedLoadMetricSpecification?: {
        ResourceLabel?: StringProperty
        PredefinedMetricType: StringProperty
      }
      TargetValue: number
      PredefinedScalingMetricSpecification?: {
        ResourceLabel?: StringProperty
        PredefinedMetricType: StringProperty
      }
      PredefinedMetricPairSpecification?: {
        ResourceLabel?: StringProperty
        PredefinedMetricType: StringProperty
      }
    }[]
    MaxCapacityBreachBehavior?: StringProperty
    MaxCapacityBuffer?: number
    SchedulingBufferTime?: number
    Mode?: StringProperty
  }
  ScalingAdjustment?: number
  Cooldown?: StringProperty
  StepAdjustments?: {
    MetricIntervalUpperBound?: number
    MetricIntervalLowerBound?: number
    ScalingAdjustment: number
  }[]
  AutoScalingGroupName: StringProperty
  MinAdjustmentMagnitude?: number
  TargetTrackingConfiguration?: {
    CustomizedMetricSpecification?: {
      MetricName?: StringProperty
      Dimensions?: {
        Value: StringProperty
        Name: StringProperty
      }[]
      Metrics?: {
        Label?: StringProperty
        MetricStat?: {
          Metric: {
            MetricName: StringProperty
            Dimensions?: {
              Value: StringProperty
              Name: StringProperty
            }[]
            Namespace: StringProperty
          }
          Stat: StringProperty
          Unit?: StringProperty
          Period?: number
        }
        Id: StringProperty
        ReturnData?: boolean
        Expression?: StringProperty
        Period?: number
      }[]
      Statistic?: StringProperty
      Unit?: StringProperty
      Namespace?: StringProperty
      Period?: number
    }
    TargetValue: number
    DisableScaleIn?: boolean
    PredefinedMetricSpecification?: {
      ResourceLabel?: StringProperty
      PredefinedMetricType: StringProperty
    }
  }
  EstimatedInstanceWarmup?: number
  AdjustmentType?: StringProperty
  Arn?: StringProperty
}

export const AWSAutoScalingScalingPolicy = ({
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
      Type: 'AWS::AutoScaling::ScalingPolicy',
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