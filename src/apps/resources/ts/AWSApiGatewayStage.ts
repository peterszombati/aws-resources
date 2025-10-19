import {StringProperty} from "../StringProperty"


type Properties = {
  AccessLogSetting?: {
    DestinationArn?: StringProperty
    Format?: StringProperty
  }
  CacheClusterEnabled?: boolean
  CacheClusterSize?: StringProperty
  CanarySetting?: {
    DeploymentId?: StringProperty
    PercentTraffic?: number
    StageVariableOverrides?: Record<string, any>
    UseStageCache?: boolean
  }
  ClientCertificateId?: StringProperty
  DeploymentId?: StringProperty
  Description?: StringProperty
  DocumentationVersion?: StringProperty
  MethodSettings?: {
    CacheDataEncrypted?: boolean
    CacheTtlInSeconds?: number
    CachingEnabled?: boolean
    DataTraceEnabled?: boolean
    HttpMethod?: StringProperty
    LoggingLevel?: StringProperty
    MetricsEnabled?: boolean
    ResourcePath?: StringProperty
    ThrottlingBurstLimit?: number
    ThrottlingRateLimit?: number
  }[]
  RestApiId: StringProperty
  StageName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TracingEnabled?: boolean
  Variables?: Record<string, any>
}

export const AWSApiGatewayStage = ({
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
      Type: 'AWS::ApiGateway::Stage',
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