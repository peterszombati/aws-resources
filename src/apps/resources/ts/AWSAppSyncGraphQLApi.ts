import {StringProperty} from "../StringProperty"


type Properties = {
  AdditionalAuthenticationProviders?: {
    LambdaAuthorizerConfig?: {
      IdentityValidationExpression?: StringProperty
      AuthorizerUri?: StringProperty
      AuthorizerResultTtlInSeconds?: number
    }
    OpenIDConnectConfig?: {
      ClientId?: StringProperty
      AuthTTL?: number
      Issuer?: StringProperty
      IatTTL?: number
    }
    UserPoolConfig?: {
      AppIdClientRegex?: StringProperty
      UserPoolId?: StringProperty
      AwsRegion?: StringProperty
    }
    AuthenticationType: StringProperty
  }[]
  ApiId?: StringProperty
  ApiType?: StringProperty
  Arn?: StringProperty
  AuthenticationType: StringProperty
  EnhancedMetricsConfig?: {
    OperationLevelMetricsConfig: StringProperty
    ResolverLevelMetricsBehavior: StringProperty
    DataSourceLevelMetricsBehavior: StringProperty
  }
  EnvironmentVariables?: Record<string, any>
  GraphQLDns?: StringProperty
  GraphQLEndpointArn?: StringProperty
  GraphQLUrl?: StringProperty
  IntrospectionConfig?: StringProperty
  LambdaAuthorizerConfig?: {
    IdentityValidationExpression?: StringProperty
    AuthorizerUri?: StringProperty
    AuthorizerResultTtlInSeconds?: number
  }
  LogConfig?: {
    ExcludeVerboseContent?: boolean
    FieldLogLevel?: StringProperty
    CloudWatchLogsRoleArn?: StringProperty
  }
  MergedApiExecutionRoleArn?: StringProperty
  Name: StringProperty
  OpenIDConnectConfig?: {
    ClientId?: StringProperty
    AuthTTL?: number
    Issuer?: StringProperty
    IatTTL?: number
  }
  OwnerContact?: StringProperty
  QueryDepthLimit?: number
  RealtimeDns?: StringProperty
  RealtimeUrl?: StringProperty
  ResolverCountLimit?: number
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  UserPoolConfig?: {
    AppIdClientRegex?: StringProperty
    UserPoolId?: StringProperty
    AwsRegion?: StringProperty
    DefaultAction?: StringProperty
  }
  Visibility?: StringProperty
  XrayEnabled?: boolean
}

export const AWSAppSyncGraphQLApi = ({
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
      Type: 'AWS::AppSync::GraphQLApi',
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