import {StringProperty} from "../StringProperty"


type Properties = {
  MetricCharacteristics?: {
    PeriodicSpikes?: boolean
  }
  MetricName?: StringProperty
  Stat?: StringProperty
  Configuration?: {
    MetricTimeZone?: StringProperty
    ExcludedTimeRanges?: {
      EndTime: StringProperty
      StartTime: StringProperty
    }[]
  }
  MetricMathAnomalyDetector?: {
    MetricDataQueries?: {
      AccountId?: StringProperty
      ReturnData?: boolean
      Expression?: StringProperty
      MetricStat?: {
        Period: number
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
      Label?: StringProperty
      Period?: number
      Id: StringProperty
    }[]
  }
  Dimensions?: {
    Value: StringProperty
    Name: StringProperty
  }[]
  Id?: StringProperty
  Namespace?: StringProperty
  SingleMetricAnomalyDetector?: {
    MetricName?: StringProperty
    Dimensions?: {
      Value: StringProperty
      Name: StringProperty
    }[]
    AccountId?: StringProperty
    Stat?: StringProperty
    Namespace?: StringProperty
  }
}

export const AWSCloudWatchAnomalyDetector = ({
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
      Type: 'AWS::CloudWatch::AnomalyDetector',
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