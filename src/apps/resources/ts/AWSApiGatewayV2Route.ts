import {StringProperty} from "../StringProperty"


type Properties = {
  RouteId?: StringProperty
  RouteResponseSelectionExpression?: StringProperty
  RequestModels?: Record<string, any>
  OperationName?: StringProperty
  AuthorizationScopes?: StringProperty[]
  ApiKeyRequired?: boolean
  RouteKey: StringProperty
  AuthorizationType?: StringProperty
  ModelSelectionExpression?: StringProperty
  ApiId: StringProperty
  RequestParameters?: Record<string, any>
  Target?: StringProperty
  AuthorizerId?: StringProperty
}

export const AWSApiGatewayV2Route = ({
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
      Type: 'AWS::ApiGatewayV2::Route',
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