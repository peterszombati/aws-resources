import {StringProperty} from "../StringProperty"


type Properties = {
  RouteSelectionExpression?: StringProperty
  Body?: Record<string, any>
  BodyS3Location?: {
    Etag?: StringProperty
    Bucket?: StringProperty
    Version?: StringProperty
    Key?: StringProperty
  }
  BasePath?: StringProperty
  CredentialsArn?: StringProperty
  CorsConfiguration?: {
    AllowOrigins?: StringProperty[]
    AllowCredentials?: boolean
    ExposeHeaders?: StringProperty[]
    AllowHeaders?: StringProperty[]
    MaxAge?: number
    AllowMethods?: StringProperty[]
  }
  RouteKey?: StringProperty
  Target?: StringProperty
  FailOnWarnings?: boolean
  ApiEndpoint?: StringProperty
  Description?: StringProperty
  DisableExecuteApiEndpoint?: boolean
  DisableSchemaValidation?: boolean
  Name?: StringProperty
  Version?: StringProperty
  ProtocolType?: StringProperty
  ApiId?: StringProperty
  Tags?: Record<string, any>
  ApiKeySelectionExpression?: StringProperty
  IpAddressType?: StringProperty
}

export const AWSApiGatewayV2Api = ({
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
      Type: 'AWS::ApiGatewayV2::Api',
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