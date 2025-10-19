import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Status?: (string | "ENABLED" | "IN_PROGRESS" | "DISABLED")
  HttpUrlProperties?: {
    ConfirmationUrl?: StringProperty
  }
  StatusReason?: StringProperty
  VpcProperties?: {
    SubnetIds?: StringProperty[]
    SecurityGroups?: StringProperty[]
    VpcId?: StringProperty
    RoleArn?: StringProperty
  }
}

export const AWSIoTTopicRuleDestination = ({
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
      Type: 'AWS::IoT::TopicRuleDestination',
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