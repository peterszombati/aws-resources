import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ComparisonOperator: (string | "GreaterThanOrEqualToThreshold" | "GreaterThanThreshold" | "LessThanThreshold" | "LessThanOrEqualToThreshold")
  CreatedAt?: StringProperty
  DatapointsToAlarm?: number
  Description?: StringProperty
  EvaluationPeriods: number
  GroupId?: StringProperty
  GroupIdentifier?: StringProperty
  Id?: StringProperty
  Identifier?: StringProperty
  MetricName: StringProperty
  ModifiedAt?: StringProperty
  Name: StringProperty
  Period: number
  Statistic: (string | "SampleCount" | "Average" | "Sum" | "Minimum" | "Maximum")
  Tags?: Record<string, any>
  TargetResourceType: (string | "CLOUDFRONT_DISTRIBUTION" | "MEDIALIVE_MULTIPLEX" | "MEDIALIVE_CHANNEL" | "MEDIALIVE_INPUT_DEVICE" | "MEDIAPACKAGE_CHANNEL" | "MEDIAPACKAGE_ORIGIN_ENDPOINT" | "MEDIACONNECT_FLOW" | "MEDIATAILOR_PLAYBACK_CONFIGURATION" | "S3_BUCKET")
  Threshold: number
  TreatMissingData: (string | "notBreaching" | "breaching" | "ignore" | "missing")
}

export const AWSMediaLiveCloudWatchAlarmTemplate = ({
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
      Type: 'AWS::MediaLive::CloudWatchAlarmTemplate',
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