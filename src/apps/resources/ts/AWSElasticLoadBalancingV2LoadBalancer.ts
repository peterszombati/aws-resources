import {StringProperty} from "../StringProperty"


type Properties = {
  IpAddressType?: StringProperty
  EnablePrefixForIpv6SourceNat?: StringProperty
  SecurityGroups?: StringProperty[]
  LoadBalancerAttributes?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  MinimumLoadBalancerCapacity?: {
    CapacityUnits: number
  }
  EnableCapacityReservationProvisionStabilize?: boolean
  Scheme?: StringProperty
  DNSName?: StringProperty
  Name?: StringProperty
  LoadBalancerName?: StringProperty
  LoadBalancerFullName?: StringProperty
  Subnets?: StringProperty[]
  Type?: StringProperty
  CanonicalHostedZoneID?: StringProperty
  Tags?: {
    Value?: StringProperty
    Key: StringProperty
  }[]
  LoadBalancerArn?: StringProperty
  SubnetMappings?: {
    SubnetId: StringProperty
    AllocationId?: StringProperty
    PrivateIPv4Address?: StringProperty
    IPv6Address?: StringProperty
    SourceNatIpv6Prefix?: StringProperty
  }[]
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: StringProperty
  Ipv4IpamPoolId?: StringProperty
}

export const AWSElasticLoadBalancingV2LoadBalancer = ({
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
      Type: 'AWS::ElasticLoadBalancingV2::LoadBalancer',
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