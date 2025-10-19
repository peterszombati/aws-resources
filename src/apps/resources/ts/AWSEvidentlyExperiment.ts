import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Project: StringProperty
  Description?: StringProperty
  RunningStatus?: {
    Status?: StringProperty
    AnalysisCompleteTime?: StringProperty
    Reason?: StringProperty
    DesiredState?: StringProperty
  }
  RandomizationSalt?: StringProperty
  Treatments: {
    TreatmentName: StringProperty
    Description?: StringProperty
    Feature: StringProperty
    Variation: StringProperty
  }[]
  MetricGoals: {
    MetricName: StringProperty
    EntityIdKey: StringProperty
    ValueKey: StringProperty
    EventPattern?: StringProperty
    UnitLabel?: StringProperty
    DesiredChange: (string | "INCREASE" | "DECREASE")
  }[]
  SamplingRate?: number
  OnlineAbConfig: {
    ControlTreatmentName?: StringProperty
    TreatmentWeights?: {
      Treatment: StringProperty
      SplitWeight: number
    }[]
  }
  Segment?: StringProperty
  RemoveSegment?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEvidentlyExperiment = ({
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
      Type: 'AWS::Evidently::Experiment',
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