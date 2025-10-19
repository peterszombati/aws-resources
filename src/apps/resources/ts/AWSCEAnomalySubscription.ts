import {StringProperty} from "../StringProperty"


type Properties = {
  SubscriptionArn?: StringProperty
  SubscriptionName: StringProperty
  AccountId?: StringProperty
  MonitorArnList: StringProperty[]
  Subscribers: {
    Address: StringProperty
    Status?: (string | "CONFIRMED" | "DECLINED")
    Type: (string | "EMAIL" | "SNS")
  }[]
  Threshold?: number
  ThresholdExpression?: StringProperty
  Frequency: (string | "DAILY" | "IMMEDIATE" | "WEEKLY")
  ResourceTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCEAnomalySubscription = ({
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
      Type: 'AWS::CE::AnomalySubscription',
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