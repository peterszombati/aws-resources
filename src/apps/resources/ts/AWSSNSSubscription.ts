import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ReplayPolicy?: Record<string, any> | StringProperty
  RawMessageDelivery?: boolean
  Endpoint?: StringProperty
  FilterPolicy?: Record<string, any> | StringProperty
  TopicArn: StringProperty
  RedrivePolicy?: Record<string, any> | StringProperty
  DeliveryPolicy?: Record<string, any> | StringProperty
  Region?: StringProperty
  SubscriptionRoleArn?: StringProperty
  FilterPolicyScope?: StringProperty
  Protocol: StringProperty
}

export const AWSSNSSubscription = ({
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
      Type: 'AWS::SNS::Subscription',
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