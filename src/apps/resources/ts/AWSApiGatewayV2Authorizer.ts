import {StringProperty} from "../StringProperty"


type Properties = {
  IdentityValidationExpression?: StringProperty
  AuthorizerUri?: StringProperty
  AuthorizerCredentialsArn?: StringProperty
  AuthorizerType: StringProperty
  IdentitySource?: StringProperty[]
  JwtConfiguration?: {
    Issuer?: StringProperty
    Audience?: StringProperty[]
  }
  AuthorizerResultTtlInSeconds?: number
  AuthorizerPayloadFormatVersion?: StringProperty
  EnableSimpleResponses?: boolean
  ApiId: StringProperty
  AuthorizerId?: StringProperty
  Name: StringProperty
}

export const AWSApiGatewayV2Authorizer = ({
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
      Type: 'AWS::ApiGatewayV2::Authorizer',
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