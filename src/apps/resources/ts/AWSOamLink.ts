import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Label?: StringProperty
  LabelTemplate?: StringProperty
  ResourceTypes: (string | "AWS::CloudWatch::Metric" | "AWS::Logs::LogGroup" | "AWS::XRay::Trace" | "AWS::ApplicationInsights::Application" | "AWS::InternetMonitor::Monitor" | "AWS::ApplicationSignals::Service" | "AWS::ApplicationSignals::ServiceLevelObjective")[]
  SinkIdentifier: StringProperty
  LinkConfiguration?: {
    MetricConfiguration?: {
      Filter: StringProperty
    }
    LogGroupConfiguration?: {
      Filter: StringProperty
    }
  }
  Tags?: Record<string, any>
}

export const AWSOamLink = ({
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
      Type: 'AWS::Oam::Link',
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