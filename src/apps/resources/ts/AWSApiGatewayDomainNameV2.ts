import {StringProperty} from "../StringProperty"


type Properties = {
  CertificateArn?: StringProperty
  DomainName?: StringProperty
  EndpointConfiguration?: {
    Types?: StringProperty[]
    IpAddressType?: StringProperty
  }
  SecurityPolicy?: StringProperty
  Policy?: Record<string, any> | StringProperty
  DomainNameId?: StringProperty
  DomainNameArn?: StringProperty
  RoutingMode?: (string | "BASE_PATH_MAPPING_ONLY" | "ROUTING_RULE_THEN_BASE_PATH_MAPPING" | "ROUTING_RULE_ONLY")
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSApiGatewayDomainNameV2 = ({
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
      Type: 'AWS::ApiGateway::DomainNameV2',
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