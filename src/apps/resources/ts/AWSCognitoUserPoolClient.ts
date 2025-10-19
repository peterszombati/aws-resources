import {StringProperty} from "../StringProperty"


type Properties = {
  ClientName?: StringProperty
  ExplicitAuthFlows?: StringProperty[]
  GenerateSecret?: boolean
  ReadAttributes?: StringProperty[]
  AuthSessionValidity?: number
  RefreshTokenValidity?: number
  AccessTokenValidity?: number
  IdTokenValidity?: number
  TokenValidityUnits?: {
    AccessToken?: StringProperty
    IdToken?: StringProperty
    RefreshToken?: StringProperty
  }
  RefreshTokenRotation?: {
    Feature?: (string | "ENABLED" | "DISABLED")
    RetryGracePeriodSeconds?: number
  }
  UserPoolId: StringProperty
  WriteAttributes?: StringProperty[]
  AllowedOAuthFlows?: StringProperty[]
  AllowedOAuthFlowsUserPoolClient?: boolean
  AllowedOAuthScopes?: StringProperty[]
  CallbackURLs?: StringProperty[]
  DefaultRedirectURI?: StringProperty
  LogoutURLs?: StringProperty[]
  SupportedIdentityProviders?: StringProperty[]
  AnalyticsConfiguration?: {
    ApplicationArn?: StringProperty
    ApplicationId?: StringProperty
    ExternalId?: StringProperty
    RoleArn?: StringProperty
    UserDataShared?: boolean
  }
  PreventUserExistenceErrors?: StringProperty
  EnableTokenRevocation?: boolean
  EnablePropagateAdditionalUserContextData?: boolean
  Name?: StringProperty
  ClientSecret?: StringProperty
  ClientId?: StringProperty
}

export const AWSCognitoUserPoolClient = ({
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
      Type: 'AWS::Cognito::UserPoolClient',
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