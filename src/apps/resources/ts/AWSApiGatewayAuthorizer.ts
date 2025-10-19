import {StringProperty} from "../StringProperty"


type Properties = {
  RestApiId: StringProperty
  AuthorizerId?: StringProperty
  AuthType?: StringProperty
  AuthorizerCredentials?: StringProperty
  AuthorizerResultTtlInSeconds?: number
  AuthorizerUri?: StringProperty
  IdentitySource?: StringProperty
  IdentityValidationExpression?: StringProperty
  Name: StringProperty
  ProviderARNs?: StringProperty[]
  Type: StringProperty
}

export const AWSApiGatewayAuthorizer = ({
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
      Type: 'AWS::ApiGateway::Authorizer',
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