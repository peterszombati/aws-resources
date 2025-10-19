import {StringProperty} from "../StringProperty"


type Properties = {
  MutualTlsAuthentication?: {
    TruststoreVersion?: StringProperty
    TruststoreUri?: StringProperty
  }
  RegionalHostedZoneId?: StringProperty
  RegionalDomainName?: StringProperty
  DomainNameArn?: StringProperty
  DomainName: StringProperty
  DomainNameConfigurations?: {
    OwnershipVerificationCertificateArn?: StringProperty
    EndpointType?: StringProperty
    CertificateName?: StringProperty
    SecurityPolicy?: StringProperty
    CertificateArn?: StringProperty
    IpAddressType?: StringProperty
  }[]
  RoutingMode?: (string | "API_MAPPING_ONLY" | "ROUTING_RULE_THEN_API_MAPPING" | "ROUTING_RULE_ONLY")
  Tags?: Record<string, any>
}

export const AWSApiGatewayV2DomainName = ({
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
      Type: 'AWS::ApiGatewayV2::DomainName',
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