import {StringProperty} from "../StringProperty"


type Properties = {
  BasePath?: StringProperty
  DomainNameArn: StringProperty
  RestApiId: StringProperty
  Stage?: StringProperty
  BasePathMappingArn?: StringProperty
}

export const AWSApiGatewayBasePathMappingV2 = ({
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
      Type: 'AWS::ApiGateway::BasePathMappingV2',
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