import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  PrivateIpAddress?: StringProperty
  PrimaryIpv6Address?: StringProperty
  PrivateIpAddresses?: {
    PrivateIpAddress: StringProperty
    Primary: boolean
  }[]
  SecondaryPrivateIpAddressCount?: number
  Ipv6PrefixCount?: number
  PrimaryPrivateIpAddress?: StringProperty
  Ipv4Prefixes?: {
    Ipv4Prefix: StringProperty
  }[]
  Ipv4PrefixCount?: number
  EnablePrimaryIpv6?: boolean
  GroupSet?: StringProperty[]
  Ipv6Addresses?: {
    Ipv6Address: StringProperty
  }[]
  Ipv6Prefixes?: {
    Ipv6Prefix: StringProperty
  }[]
  SubnetId: StringProperty
  SourceDestCheck?: boolean
  InterfaceType?: StringProperty
  SecondaryPrivateIpAddresses?: StringProperty[]
  VpcId?: StringProperty
  Ipv6AddressCount?: number
  Id?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  ConnectionTrackingSpecification?: {
    UdpTimeout?: number
    TcpEstablishedTimeout?: number
    UdpStreamTimeout?: number
  }
}

export const AWSEC2NetworkInterface = ({
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
      Type: 'AWS::EC2::NetworkInterface',
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