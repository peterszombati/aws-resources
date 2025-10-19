import {StringProperty} from "../StringProperty"


type Properties = {
  UserPoolId: StringProperty
  ClientId: StringProperty
  RiskExceptionConfiguration?: {
    BlockedIPRangeList?: StringProperty[]
    SkippedIPRangeList?: StringProperty[]
  }
  CompromisedCredentialsRiskConfiguration?: {
    Actions: {
      EventAction: StringProperty
    }
    EventFilter?: StringProperty[]
  }
  AccountTakeoverRiskConfiguration?: {
    Actions: {
      HighAction?: {
        EventAction: StringProperty
        Notify: boolean
      }
      LowAction?: {
        EventAction: StringProperty
        Notify: boolean
      }
      MediumAction?: {
        EventAction: StringProperty
        Notify: boolean
      }
    }
    NotifyConfiguration?: {
      BlockEmail?: {
        HtmlBody?: StringProperty
        Subject: StringProperty
        TextBody?: StringProperty
      }
      MfaEmail?: {
        HtmlBody?: StringProperty
        Subject: StringProperty
        TextBody?: StringProperty
      }
      NoActionEmail?: {
        HtmlBody?: StringProperty
        Subject: StringProperty
        TextBody?: StringProperty
      }
      From?: StringProperty
      ReplyTo?: StringProperty
      SourceArn: StringProperty
    }
  }
}

export const AWSCognitoUserPoolRiskConfigurationAttachment = ({
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
      Type: 'AWS::Cognito::UserPoolRiskConfigurationAttachment',
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