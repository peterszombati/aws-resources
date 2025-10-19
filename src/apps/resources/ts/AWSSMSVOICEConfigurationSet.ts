import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ConfigurationSetName?: StringProperty
  DefaultSenderId?: StringProperty
  MessageFeedbackEnabled?: boolean
  ProtectConfigurationId?: StringProperty
  EventDestinations?: {
    EventDestinationName: StringProperty
    Enabled: boolean
    MatchingEventTypes: StringProperty[]
    CloudWatchLogsDestination?: {
      IamRoleArn: StringProperty
      LogGroupArn: StringProperty
    }
    KinesisFirehoseDestination?: {
      IamRoleArn: StringProperty
      DeliveryStreamArn: StringProperty
    }
    SnsDestination?: {
      TopicArn: StringProperty
    }
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSMSVOICEConfigurationSet = ({
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
      Type: 'AWS::SMSVOICE::ConfigurationSet',
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