import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AlarmName?: StringProperty
  AlarmRule: StringProperty
  AlarmDescription?: StringProperty
  ActionsEnabled?: boolean
  OKActions?: StringProperty[]
  AlarmActions?: StringProperty[]
  InsufficientDataActions?: StringProperty[]
  ActionsSuppressor?: StringProperty
  ActionsSuppressorWaitPeriod?: number
  ActionsSuppressorExtensionPeriod?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCloudWatchCompositeAlarm = ({
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
      Type: 'AWS::CloudWatch::CompositeAlarm',
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