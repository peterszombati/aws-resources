import {StringProperty} from "../StringProperty"


type Properties = {
  DomainName?: StringProperty
  DomainNameArn?: StringProperty
  DistributionDomainName?: StringProperty
  DistributionHostedZoneId?: StringProperty
  EndpointConfiguration?: {
    Types?: StringProperty[]
    IpAddressType?: StringProperty
  }
  MutualTlsAuthentication?: {
    TruststoreUri?: StringProperty
    TruststoreVersion?: StringProperty
  }
  RegionalDomainName?: StringProperty
  RegionalHostedZoneId?: StringProperty
  CertificateArn?: StringProperty
  RegionalCertificateArn?: StringProperty
  OwnershipVerificationCertificateArn?: StringProperty
  SecurityPolicy?: StringProperty
  RoutingMode?: (string | "BASE_PATH_MAPPING_ONLY" | "ROUTING_RULE_THEN_BASE_PATH_MAPPING" | "ROUTING_RULE_ONLY")
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSApiGatewayDomainName = ({
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
      Type: 'AWS::ApiGateway::DomainName',
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