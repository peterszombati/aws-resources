import {StringProperty} from "../StringProperty"


type Properties = {
  ThresholdMetricId?: StringProperty
  EvaluateLowSampleCountPercentile?: StringProperty
  ExtendedStatistic?: StringProperty
  ComparisonOperator: StringProperty
  TreatMissingData?: StringProperty
  Dimensions?: {
    Value: StringProperty
    Name: StringProperty
  }[]
  Period?: number
  EvaluationPeriods: number
  Unit?: StringProperty
  Namespace?: StringProperty
  OKActions?: StringProperty[]
  AlarmActions?: StringProperty[]
  MetricName?: StringProperty
  ActionsEnabled?: boolean
  Metrics?: {
    Label?: StringProperty
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
    Period?: number
    AccountId?: StringProperty
  }[]
  AlarmDescription?: StringProperty
  AlarmName?: StringProperty
  Statistic?: StringProperty
  InsufficientDataActions?: StringProperty[]
  Arn?: StringProperty
  DatapointsToAlarm?: number
  Threshold?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCloudWatchAlarm = ({
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
      Type: 'AWS::CloudWatch::Alarm',
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