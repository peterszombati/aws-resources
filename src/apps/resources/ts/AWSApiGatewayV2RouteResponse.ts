import {StringProperty} from "../StringProperty"


type Properties = {
  RouteResponseKey: StringProperty
  ResponseParameters?: any
  RouteId: StringProperty
  ModelSelectionExpression?: StringProperty
  ApiId: StringProperty
  ResponseModels?: Record<string, any>
  RouteResponseId?: StringProperty
}

export const AWSApiGatewayV2RouteResponse = ({
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
      Type: 'AWS::ApiGatewayV2::RouteResponse',
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