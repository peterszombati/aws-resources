import {StringProperty} from "../StringProperty"


type Properties = {
  AlarmName: StringProperty
  MonitoredResourceName: StringProperty
  MetricName: StringProperty
  ComparisonOperator: StringProperty
  ContactProtocols?: StringProperty[]
  AlarmArn?: StringProperty
  DatapointsToAlarm?: number
  EvaluationPeriods: number
  NotificationEnabled?: boolean
  NotificationTriggers?: StringProperty[]
  Threshold: number
  TreatMissingData?: StringProperty
  State?: StringProperty
}

export const AWSLightsailAlarm = ({
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
      Type: 'AWS::Lightsail::Alarm',
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