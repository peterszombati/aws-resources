import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ConfigurationSetName: StringProperty
  EventDestination: {
    Name?: StringProperty
    Enabled?: boolean
    MatchingEventTypes: StringProperty[]
    CloudWatchDestination?: {
      DimensionConfigurations?: {
        DimensionValueSource: StringProperty
        DefaultDimensionValue: StringProperty
        DimensionName: StringProperty
      }[]
    }
    KinesisFirehoseDestination?: {
      IAMRoleARN: StringProperty
      DeliveryStreamARN: StringProperty
    }
    SnsDestination?: {
      TopicARN: StringProperty
    }
    EventBridgeDestination?: {
      EventBusArn: StringProperty
    }
  }
}

export const AWSSESConfigurationSetEventDestination = ({
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
      Type: 'AWS::SES::ConfigurationSetEventDestination',
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