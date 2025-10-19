import {StringProperty} from "../StringProperty"


type Properties = {
  ContentType?: StringProperty
  Description?: StringProperty
  Name?: StringProperty
  RestApiId: StringProperty
  Schema?: Record<string, any> | StringProperty
}

export const AWSApiGatewayModel = ({
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
      Type: 'AWS::ApiGateway::Model',
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