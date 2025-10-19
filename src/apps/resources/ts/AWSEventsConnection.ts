import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Arn?: StringProperty
  ArnForPolicy?: StringProperty
  SecretArn?: StringProperty
  Description?: StringProperty
  AuthorizationType?: (string | "API_KEY" | "BASIC" | "OAUTH_CLIENT_CREDENTIALS")
  AuthParameters?: {
    ApiKeyAuthParameters?: {
      ApiKeyName: StringProperty
      ApiKeyValue: StringProperty
    }
    BasicAuthParameters?: {
      Username: StringProperty
      Password: StringProperty
    }
    OAuthParameters?: {
      ClientParameters: {
        ClientID: StringProperty
        ClientSecret: StringProperty
      }
      AuthorizationEndpoint: StringProperty
      HttpMethod: (string | "GET" | "POST" | "PUT")
      OAuthHttpParameters?: {
        HeaderParameters?: {
          Key: StringProperty
          Value: StringProperty
          IsValueSecret?: boolean
        }[]
        QueryStringParameters?: {
          Key: StringProperty
          Value: StringProperty
          IsValueSecret?: boolean
        }[]
        BodyParameters?: {
          Key: StringProperty
          Value: StringProperty
          IsValueSecret?: boolean
        }[]
      }
    }
    InvocationHttpParameters?: {
      HeaderParameters?: {
        Key: StringProperty
        Value: StringProperty
        IsValueSecret?: boolean
      }[]
      QueryStringParameters?: {
        Key: StringProperty
        Value: StringProperty
        IsValueSecret?: boolean
      }[]
      BodyParameters?: {
        Key: StringProperty
        Value: StringProperty
        IsValueSecret?: boolean
      }[]
    }
    ConnectivityParameters?: {
      ResourceParameters: {
        ResourceConfigurationArn: StringProperty
        ResourceAssociationArn?: StringProperty
      }
    }
  }
  InvocationConnectivityParameters?: {
    ResourceParameters: {
      ResourceConfigurationArn: StringProperty
      ResourceAssociationArn?: StringProperty
    }
  }
  KmsKeyIdentifier?: StringProperty
}

export const AWSEventsConnection = ({
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
      Type: 'AWS::Events::Connection',
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