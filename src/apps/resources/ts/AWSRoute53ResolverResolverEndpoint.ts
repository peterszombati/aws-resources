import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Direction: StringProperty
  HostVPCId?: StringProperty
  IpAddressCount?: StringProperty
  IpAddresses: {
    Ip?: StringProperty
    Ipv6?: StringProperty
    SubnetId: StringProperty
  }[]
  Name?: StringProperty
  OutpostArn?: StringProperty
  PreferredInstanceType?: StringProperty
  Protocols?: StringProperty[]
  ResolverEndpointId?: StringProperty
  ResolverEndpointType?: (string | "IPV6" | "IPV4" | "DUALSTACK")
  SecurityGroupIds: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRoute53ResolverResolverEndpoint = ({
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
      Type: 'AWS::Route53Resolver::ResolverEndpoint',
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