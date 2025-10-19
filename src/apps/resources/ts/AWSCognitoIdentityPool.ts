import {StringProperty} from "../StringProperty"


type Properties = {
  PushSync?: {
    ApplicationArns?: StringProperty[]
    RoleArn?: StringProperty
  }
  CognitoIdentityProviders?: {
    ServerSideTokenCheck?: boolean
    ProviderName: StringProperty
    ClientId: StringProperty
  }[]
  DeveloperProviderName?: StringProperty
  CognitoStreams?: {
    StreamingStatus?: StringProperty
    StreamName?: StringProperty
    RoleArn?: StringProperty
  }
  SupportedLoginProviders?: Record<string, any>
  Name?: StringProperty
  CognitoEvents?: Record<string, any>
  Id?: StringProperty
  IdentityPoolName?: StringProperty
  AllowUnauthenticatedIdentities: boolean
  SamlProviderARNs?: StringProperty[]
  OpenIdConnectProviderARNs?: StringProperty[]
  AllowClassicFlow?: boolean
  IdentityPoolTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCognitoIdentityPool = ({
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
      Type: 'AWS::Cognito::IdentityPool',
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