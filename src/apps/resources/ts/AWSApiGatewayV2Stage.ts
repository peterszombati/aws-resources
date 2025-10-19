import {StringProperty} from "../StringProperty"


type Properties = {
  DeploymentId?: StringProperty
  Description?: StringProperty
  AutoDeploy?: boolean
  RouteSettings?: Record<string, any>
  StageName: StringProperty
  StageVariables?: Record<string, any>
  AccessPolicyId?: StringProperty
  ClientCertificateId?: StringProperty
  AccessLogSettings?: {
    DestinationArn?: StringProperty
    Format?: StringProperty
  }
  Id?: StringProperty
  ApiId: StringProperty
  DefaultRouteSettings?: {
    DetailedMetricsEnabled?: boolean
    LoggingLevel?: StringProperty
    DataTraceEnabled?: boolean
    ThrottlingBurstLimit?: number
    ThrottlingRateLimit?: number
  }
  Tags?: Record<string, any>
}

export const AWSApiGatewayV2Stage = ({
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
      Type: 'AWS::ApiGatewayV2::Stage',
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