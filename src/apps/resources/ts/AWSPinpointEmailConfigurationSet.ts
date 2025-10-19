import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  SendingOptions?: {
    SendingEnabled?: boolean
  }
  TrackingOptions?: {
    CustomRedirectDomain?: StringProperty
  }
  ReputationOptions?: {
    ReputationMetricsEnabled?: boolean
  }
  DeliveryOptions?: {
    SendingPoolName?: StringProperty
  }
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  Name: StringProperty
}

export const AWSPinpointEmailConfigurationSet = ({
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
      Type: 'AWS::PinpointEmail::ConfigurationSet',
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