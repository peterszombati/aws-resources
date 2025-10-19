import {StringProperty} from "../StringProperty"


type Properties = {
  ApiId?: StringProperty
  ApiArn?: StringProperty
  Name: StringProperty
  OwnerContact?: StringProperty
  Dns?: {
    Realtime?: StringProperty
    Http?: StringProperty
  }
  EventConfig?: {
    AuthProviders: {
      AuthType: (string | "AMAZON_COGNITO_USER_POOLS" | "AWS_IAM" | "API_KEY" | "OPENID_CONNECT" | "AWS_LAMBDA")
      OpenIDConnectConfig?: {
        ClientId?: StringProperty
        AuthTTL?: number
        Issuer: StringProperty
        IatTTL?: number
      }
      CognitoConfig?: {
        AppIdClientRegex?: StringProperty
        UserPoolId: StringProperty
        AwsRegion: StringProperty
      }
      LambdaAuthorizerConfig?: {
        AuthorizerResultTtlInSeconds?: number
        AuthorizerUri: StringProperty
        IdentityValidationExpression?: StringProperty
      }
    }[]
    ConnectionAuthModes: {
      AuthType?: (string | "AMAZON_COGNITO_USER_POOLS" | "AWS_IAM" | "API_KEY" | "OPENID_CONNECT" | "AWS_LAMBDA")
    }[]
    DefaultPublishAuthModes: {
      AuthType?: (string | "AMAZON_COGNITO_USER_POOLS" | "AWS_IAM" | "API_KEY" | "OPENID_CONNECT" | "AWS_LAMBDA")
    }[]
    DefaultSubscribeAuthModes: {
      AuthType?: (string | "AMAZON_COGNITO_USER_POOLS" | "AWS_IAM" | "API_KEY" | "OPENID_CONNECT" | "AWS_LAMBDA")
    }[]
    LogConfig?: {
      LogLevel: (string | "NONE" | "ERROR" | "ALL" | "INFO" | "DEBUG")
      CloudWatchLogsRoleArn: StringProperty
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSAppSyncApi = ({
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
      Type: 'AWS::AppSync::Api',
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