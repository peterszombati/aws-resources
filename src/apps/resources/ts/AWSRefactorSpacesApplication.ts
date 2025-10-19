import {StringProperty} from "../StringProperty"


type Properties = {
  ApiGatewayProxy?: {
    StageName?: StringProperty
    EndpointType?: (string | "REGIONAL" | "PRIVATE")
  }
  Arn?: StringProperty
  ApiGatewayId?: StringProperty
  VpcLinkId?: StringProperty
  NlbArn?: StringProperty
  NlbName?: StringProperty
  ApplicationIdentifier?: StringProperty
  EnvironmentIdentifier: StringProperty
  Name: StringProperty
  ProxyType: (string | "API_GATEWAY")
  VpcId: StringProperty
  StageName?: StringProperty
  ProxyUrl?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRefactorSpacesApplication = ({
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
      Type: 'AWS::RefactorSpaces::Application',
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