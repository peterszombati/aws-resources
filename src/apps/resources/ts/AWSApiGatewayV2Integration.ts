import {StringProperty} from "../StringProperty"


type Properties = {
  ApiId: StringProperty
  ConnectionId?: StringProperty
  ConnectionType?: StringProperty
  ContentHandlingStrategy?: StringProperty
  CredentialsArn?: StringProperty
  Description?: StringProperty
  IntegrationMethod?: StringProperty
  IntegrationSubtype?: StringProperty
  IntegrationId?: StringProperty
  IntegrationType: StringProperty
  IntegrationUri?: StringProperty
  PassthroughBehavior?: StringProperty
  PayloadFormatVersion?: StringProperty
  RequestParameters?: Record<string, any>
  RequestTemplates?: Record<string, any>
  ResponseParameters?: Record<string, any>
  TemplateSelectionExpression?: StringProperty
  TimeoutInMillis?: number
  TlsConfig?: {
    ServerNameToVerify?: StringProperty
  }
}

export const AWSApiGatewayV2Integration = ({
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
      Type: 'AWS::ApiGatewayV2::Integration',
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