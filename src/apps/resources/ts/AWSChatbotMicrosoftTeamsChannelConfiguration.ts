import {StringProperty} from "../StringProperty"


type Properties = {
  TeamId: StringProperty
  TeamsChannelId: StringProperty
  TeamsChannelName?: StringProperty
  TeamsTenantId: StringProperty
  ConfigurationName: StringProperty
  IamRoleArn: StringProperty
  SnsTopicArns?: StringProperty[]
  LoggingLevel?: StringProperty
  Arn?: StringProperty
  GuardrailPolicies?: StringProperty[]
  UserRoleRequired?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CustomizationResourceArns?: StringProperty[]
}

export const AWSChatbotMicrosoftTeamsChannelConfiguration = ({
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
      Type: 'AWS::Chatbot::MicrosoftTeamsChannelConfiguration',
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