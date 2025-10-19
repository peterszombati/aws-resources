import {StringProperty} from "../StringProperty"


type Properties = {
  Stage?: {
    Description?: StringProperty
    AccessLogSettings?: {
      DestinationArn?: StringProperty
      Format?: StringProperty
    }
    AutoDeploy?: boolean
    RouteSettings?: Record<string, any>
    StageVariables?: Record<string, any>
    DefaultRouteSettings?: {
      DetailedMetricsEnabled?: boolean
      LoggingLevel?: StringProperty
      DataTraceEnabled?: boolean
      ThrottlingBurstLimit?: number
      ThrottlingRateLimit?: number
    }
  }
  Integration?: {
    TimeoutInMillis?: number
    Description?: StringProperty
    PayloadFormatVersion?: StringProperty
    IntegrationMethod?: StringProperty
  }
  Id?: StringProperty
  ApiId: StringProperty
  Route?: {
    AuthorizationScopes?: StringProperty[]
    Target?: StringProperty
    AuthorizationType?: StringProperty
    AuthorizerId?: StringProperty
    OperationName?: StringProperty
  }
}

export const AWSApiGatewayV2ApiGatewayManagedOverrides = ({
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
      Type: 'AWS::ApiGatewayV2::ApiGatewayManagedOverrides',
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