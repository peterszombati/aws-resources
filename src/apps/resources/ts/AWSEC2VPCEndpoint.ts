import {StringProperty} from "../StringProperty"


type Properties = {
  PrivateDnsEnabled?: boolean
  IpAddressType?: (string | "ipv4" | "ipv6" | "dualstack" | "not-specified")
  ServiceRegion?: StringProperty
  CreationTimestamp?: StringProperty
  DnsOptions?: {
    PrivateDnsOnlyForInboundResolverEndpoint?: (string | "OnlyInboundResolver" | "AllResolvers" | "NotSpecified")
    DnsRecordIpType?: (string | "ipv4" | "ipv6" | "dualstack" | "service-defined" | "not-specified")
  }
  NetworkInterfaceIds?: StringProperty[]
  DnsEntries?: StringProperty[]
  ResourceConfigurationArn?: StringProperty
  SecurityGroupIds?: StringProperty[]
  SubnetIds?: StringProperty[]
  ServiceNetworkArn?: StringProperty
  VpcId: StringProperty
  RouteTableIds?: StringProperty[]
  ServiceName?: StringProperty
  PolicyDocument?: StringProperty | Record<string, any>
  VpcEndpointType?: (string | "Interface" | "Gateway" | "GatewayLoadBalancer" | "ServiceNetwork" | "Resource")
  Id?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEC2VPCEndpoint = ({
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
      Type: 'AWS::EC2::VPCEndpoint',
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