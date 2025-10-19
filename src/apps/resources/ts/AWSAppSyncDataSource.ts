import {StringProperty} from "../StringProperty"


type Properties = {
  ApiId: StringProperty
  Description?: StringProperty
  DynamoDBConfig?: {
    TableName: StringProperty
    DeltaSyncConfig?: {
      BaseTableTTL: StringProperty
      DeltaSyncTableTTL: StringProperty
      DeltaSyncTableName: StringProperty
    }
    UseCallerCredentials?: boolean
    AwsRegion: StringProperty
    Versioned?: boolean
  }
  ElasticsearchConfig?: {
    AwsRegion: StringProperty
    Endpoint: StringProperty
  }
  EventBridgeConfig?: {
    EventBusArn: StringProperty
  }
  HttpConfig?: {
    Endpoint: StringProperty
    AuthorizationConfig?: {
      AuthorizationType: StringProperty
      AwsIamConfig?: {
        SigningRegion?: StringProperty
        SigningServiceName?: StringProperty
      }
    }
  }
  LambdaConfig?: {
    LambdaFunctionArn: StringProperty
  }
  Name: StringProperty
  OpenSearchServiceConfig?: {
    AwsRegion: StringProperty
    Endpoint: StringProperty
  }
  RelationalDatabaseConfig?: {
    RdsHttpEndpointConfig?: {
      DatabaseName?: StringProperty
      AwsRegion: StringProperty
      DbClusterIdentifier: StringProperty
      AwsSecretStoreArn: StringProperty
      Schema?: StringProperty
    }
    RelationalDatabaseSourceType: StringProperty
  }
  ServiceRoleArn?: StringProperty
  Type: StringProperty
  DataSourceArn?: StringProperty
  MetricsConfig?: (string | "DISABLED" | "ENABLED")
}

export const AWSAppSyncDataSource = ({
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
      Type: 'AWS::AppSync::DataSource',
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