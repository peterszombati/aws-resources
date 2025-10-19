import {StringProperty} from "../StringProperty"


type Properties = {
  SlackWorkspaceId: StringProperty
  SlackChannelId: StringProperty
  ConfigurationName: StringProperty
  IamRoleArn: StringProperty
  SnsTopicArns?: StringProperty[]
  LoggingLevel?: StringProperty
  Arn?: StringProperty
  GuardrailPolicies?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UserRoleRequired?: boolean
  CustomizationResourceArns?: StringProperty[]
}

export const AWSChatbotSlackChannelConfiguration = ({
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
      Type: 'AWS::Chatbot::SlackChannelConfiguration',
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