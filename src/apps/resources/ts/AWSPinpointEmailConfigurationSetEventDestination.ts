import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  EventDestinationName: StringProperty
  ConfigurationSetName: StringProperty
  EventDestination?: {
    SnsDestination?: {
      TopicArn: StringProperty
    }
    CloudWatchDestination?: {
      DimensionConfigurations?: {
        DimensionValueSource: StringProperty
        DefaultDimensionValue: StringProperty
        DimensionName: StringProperty
      }[]
    }
    Enabled?: boolean
    MatchingEventTypes: StringProperty[]
    PinpointDestination?: {
      ApplicationArn?: StringProperty
    }
    KinesisFirehoseDestination?: {
      DeliveryStreamArn: StringProperty
      IamRoleArn: StringProperty
    }
  }
}

export const AWSPinpointEmailConfigurationSetEventDestination = ({
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
      Type: 'AWS::PinpointEmail::ConfigurationSetEventDestination',
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