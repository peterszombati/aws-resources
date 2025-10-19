import {StringProperty} from "../StringProperty"


type Properties = {
  Integration?: {
    CacheNamespace?: StringProperty
    ConnectionType?: (string | "INTERNET" | "VPC_LINK")
    IntegrationResponses?: {
      ResponseTemplates?: Record<string, any>
      SelectionPattern?: StringProperty
      ContentHandling?: (string | "CONVERT_TO_BINARY" | "CONVERT_TO_TEXT")
      ResponseParameters?: Record<string, any>
      StatusCode: StringProperty
    }[]
    IntegrationHttpMethod?: StringProperty
    Uri?: StringProperty
    PassthroughBehavior?: (string | "WHEN_NO_MATCH" | "WHEN_NO_TEMPLATES" | "NEVER")
    RequestParameters?: Record<string, any>
    ConnectionId?: StringProperty
    Type: (string | "AWS" | "AWS_PROXY" | "HTTP" | "HTTP_PROXY" | "MOCK")
    CacheKeyParameters?: StringProperty[]
    ContentHandling?: (string | "CONVERT_TO_BINARY" | "CONVERT_TO_TEXT")
    RequestTemplates?: Record<string, any>
    TimeoutInMillis?: number
    Credentials?: StringProperty
  }
  OperationName?: StringProperty
  RequestModels?: Record<string, any>
  RestApiId: StringProperty
  AuthorizationScopes?: StringProperty[]
  RequestValidatorId?: StringProperty
  RequestParameters?: Record<string, any>
  MethodResponses?: {
    ResponseParameters?: Record<string, any>
    StatusCode: StringProperty
    ResponseModels?: Record<string, any>
  }[]
  AuthorizerId?: StringProperty
  ResourceId: StringProperty
  ApiKeyRequired?: boolean
  AuthorizationType?: StringProperty
  HttpMethod: StringProperty
}

export const AWSApiGatewayMethod = ({
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
      Type: 'AWS::ApiGateway::Method',
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