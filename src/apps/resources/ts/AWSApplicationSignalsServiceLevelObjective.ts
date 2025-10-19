import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  CreatedTime?: number
  LastUpdatedTime?: number
  Sli?: {
    SliMetric: {
      KeyAttributes?: any
      OperationName?: StringProperty
      MetricType?: (string | "LATENCY" | "AVAILABILITY")
      Statistic?: StringProperty
      PeriodSeconds?: number
      MetricDataQueries?: {
        MetricStat?: {
          Period: number
          Metric: {
            MetricName?: StringProperty
            Dimensions?: {
              Value: StringProperty
              Name: StringProperty
            }[]
            Namespace?: StringProperty
          }
          Stat: StringProperty
          Unit?: StringProperty
        }
        Id: StringProperty
        ReturnData?: boolean
        Expression?: StringProperty
        AccountId?: StringProperty
      }[]
      DependencyConfig?: {
        DependencyKeyAttributes: any
        DependencyOperationName: StringProperty
      }
    }
    MetricThreshold: number
    ComparisonOperator: (string | "GreaterThanOrEqualTo" | "LessThanOrEqualTo" | "LessThan" | "GreaterThan")
  }
  RequestBasedSli?: {
    RequestBasedSliMetric: {
      KeyAttributes?: any
      OperationName?: StringProperty
      MetricType?: (string | "LATENCY" | "AVAILABILITY")
      TotalRequestCountMetric?: {
        MetricStat?: {
          Period: number
          Metric: {
            MetricName?: StringProperty
            Dimensions?: {
              Value: StringProperty
              Name: StringProperty
            }[]
            Namespace?: StringProperty
          }
          Stat: StringProperty
          Unit?: StringProperty
        }
        Id: StringProperty
        ReturnData?: boolean
        Expression?: StringProperty
        AccountId?: StringProperty
      }[]
      MonitoredRequestCountMetric?: {
        GoodCountMetric?: {
          MetricStat?: {
            Period: number
            Metric: {
              MetricName?: StringProperty
              Dimensions?: {
                Value: StringProperty
                Name: StringProperty
              }[]
              Namespace?: StringProperty
            }
            Stat: StringProperty
            Unit?: StringProperty
          }
          Id: StringProperty
          ReturnData?: boolean
          Expression?: StringProperty
          AccountId?: StringProperty
        }[]
        BadCountMetric?: {
          MetricStat?: {
            Period: number
            Metric: {
              MetricName?: StringProperty
              Dimensions?: {
                Value: StringProperty
                Name: StringProperty
              }[]
              Namespace?: StringProperty
            }
            Stat: StringProperty
            Unit?: StringProperty
          }
          Id: StringProperty
          ReturnData?: boolean
          Expression?: StringProperty
          AccountId?: StringProperty
        }[]
      }
      DependencyConfig?: {
        DependencyKeyAttributes: any
        DependencyOperationName: StringProperty
      }
    }
    MetricThreshold?: number
    ComparisonOperator?: (string | "GreaterThanOrEqualTo" | "LessThanOrEqualTo" | "LessThan" | "GreaterThan")
  }
  EvaluationType?: (string | "PeriodBased" | "RequestBased")
  Goal?: {
    Interval?: {
      RollingInterval?: {
        DurationUnit: (string | "MINUTE" | "HOUR" | "DAY" | "MONTH")
        Duration: number
      }
      CalendarInterval?: {
        StartTime: number
        DurationUnit: (string | "MINUTE" | "HOUR" | "DAY" | "MONTH")
        Duration: number
      }
    }
    AttainmentGoal?: number
    WarningThreshold?: number
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  BurnRateConfigurations?: {
    LookBackWindowMinutes: number
  }[]
  ExclusionWindows?: {
    Window: {
      DurationUnit: (string | "MINUTE" | "HOUR" | "DAY" | "MONTH")
      Duration: number
    }
    StartTime?: StringProperty
    RecurrenceRule?: {
      Expression: StringProperty
    }
    Reason?: StringProperty
  }[]
}

export const AWSApplicationSignalsServiceLevelObjective = ({
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
      Type: 'AWS::ApplicationSignals::ServiceLevelObjective',
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