import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  RestApiId: StringProperty
  ResponseType: StringProperty
  StatusCode?: StringProperty
  ResponseParameters?: Record<string, any>
  ResponseTemplates?: Record<string, any>
}

export const AWSApiGatewayGatewayResponse = ({
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
      Type: 'AWS::ApiGateway::GatewayResponse',
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