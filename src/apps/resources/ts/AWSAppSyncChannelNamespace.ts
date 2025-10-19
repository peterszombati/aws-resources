import {StringProperty} from "../StringProperty"


type Properties = {
  ApiId: StringProperty
  Name: StringProperty
  SubscribeAuthModes?: {
    AuthType?: (string | "AMAZON_COGNITO_USER_POOLS" | "AWS_IAM" | "API_KEY" | "OPENID_CONNECT" | "AWS_LAMBDA")
  }[]
  PublishAuthModes?: {
    AuthType?: (string | "AMAZON_COGNITO_USER_POOLS" | "AWS_IAM" | "API_KEY" | "OPENID_CONNECT" | "AWS_LAMBDA")
  }[]
  CodeHandlers?: StringProperty
  CodeS3Location?: StringProperty
  ChannelNamespaceArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  HandlerConfigs?: {
    OnPublish?: {
      Behavior: (string | "CODE" | "DIRECT")
      Integration: {
        DataSourceName: StringProperty
        LambdaConfig?: {
          InvokeType: (string | "REQUEST_RESPONSE" | "EVENT")
        }
      }
    }
    OnSubscribe?: {
      Behavior: (string | "CODE" | "DIRECT")
      Integration: {
        DataSourceName: StringProperty
        LambdaConfig?: {
          InvokeType: (string | "REQUEST_RESPONSE" | "EVENT")
        }
      }
    }
  }
}

export const AWSAppSyncChannelNamespace = ({
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
      Type: 'AWS::AppSync::ChannelNamespace',
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