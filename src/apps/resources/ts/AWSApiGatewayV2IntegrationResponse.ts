import {StringProperty} from "../StringProperty"


type Properties = {
  IntegrationResponseId?: StringProperty
  ResponseTemplates?: Record<string, any>
  TemplateSelectionExpression?: StringProperty
  ResponseParameters?: Record<string, any>
  ContentHandlingStrategy?: StringProperty
  IntegrationId: StringProperty
  IntegrationResponseKey: StringProperty
  ApiId: StringProperty
}

export const AWSApiGatewayV2IntegrationResponse = ({
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
      Type: 'AWS::ApiGatewayV2::IntegrationResponse',
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