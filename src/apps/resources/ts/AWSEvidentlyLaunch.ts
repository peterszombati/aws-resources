import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Project: StringProperty
  Description?: StringProperty
  RandomizationSalt?: StringProperty
  ScheduledSplitsConfig: {
    StartTime: StringProperty
    GroupWeights: {
      GroupName: StringProperty
      SplitWeight: number
    }[]
    SegmentOverrides?: {
      Segment: StringProperty
      EvaluationOrder: number
      Weights: {
        GroupName: StringProperty
        SplitWeight: number
      }[]
    }[]
  }[]
  Groups: {
    GroupName: StringProperty
    Description?: StringProperty
    Feature: StringProperty
    Variation: StringProperty
  }[]
  MetricMonitors?: {
    MetricName: StringProperty
    EntityIdKey: StringProperty
    ValueKey: StringProperty
    EventPattern?: StringProperty
    UnitLabel?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ExecutionStatus?: {
    Status: StringProperty
    DesiredState?: StringProperty
    Reason?: StringProperty
  }
}

export const AWSEvidentlyLaunch = ({
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
      Type: 'AWS::Evidently::Launch',
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