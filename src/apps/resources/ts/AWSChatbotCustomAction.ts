import {StringProperty} from "../StringProperty"


type Properties = {
  ActionName: StringProperty
  AliasName?: StringProperty
  Attachments?: {
    NotificationType?: StringProperty
    ButtonText?: StringProperty
    Criteria?: {
      Operator: (string | "HAS_VALUE" | "EQUALS")
      VariableName: StringProperty
      Value?: StringProperty
    }[]
    Variables?: Record<string, any>
  }[]
  CustomActionArn?: StringProperty
  Definition: {
    CommandText: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSChatbotCustomAction = ({
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
      Type: 'AWS::Chatbot::CustomAction',
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