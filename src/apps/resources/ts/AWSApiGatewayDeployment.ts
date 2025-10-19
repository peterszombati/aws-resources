import {StringProperty} from "../StringProperty"


type Properties = {
  DeploymentId?: StringProperty
  Description?: StringProperty
  StageDescription?: {
    CacheTtlInSeconds?: number
    Description?: StringProperty
    LoggingLevel?: StringProperty
    CanarySetting?: {
      StageVariableOverrides?: Record<string, any>
      PercentTraffic?: number
      UseStageCache?: boolean
    }
    ThrottlingRateLimit?: number
    ClientCertificateId?: StringProperty
    Variables?: Record<string, any>
    DocumentationVersion?: StringProperty
    CacheDataEncrypted?: boolean
    DataTraceEnabled?: boolean
    ThrottlingBurstLimit?: number
    CachingEnabled?: boolean
    TracingEnabled?: boolean
    MethodSettings?: {
      CacheTtlInSeconds?: number
      LoggingLevel?: StringProperty
      ResourcePath?: StringProperty
      CacheDataEncrypted?: boolean
      DataTraceEnabled?: boolean
      ThrottlingBurstLimit?: number
      CachingEnabled?: boolean
      MetricsEnabled?: boolean
      HttpMethod?: StringProperty
      ThrottlingRateLimit?: number
    }[]
    AccessLogSetting?: {
      Format?: StringProperty
      DestinationArn?: StringProperty
    }
    CacheClusterSize?: StringProperty
    MetricsEnabled?: boolean
    Tags?: {
      Value: StringProperty
      Key: StringProperty
    }[]
    CacheClusterEnabled?: boolean
  }
  StageName?: StringProperty
  RestApiId: StringProperty
  DeploymentCanarySettings?: {
    StageVariableOverrides?: Record<string, any>
    PercentTraffic?: number
    UseStageCache?: boolean
  }
}

export const AWSApiGatewayDeployment = ({
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
      Type: 'AWS::ApiGateway::Deployment',
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