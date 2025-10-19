import {StringProperty} from "../StringProperty"


type Properties = {
  AssignIpv6AddressOnCreation?: boolean
  VpcId: StringProperty
  MapPublicIpOnLaunch?: boolean
  EnableLniAtDeviceIndex?: number
  NetworkAclAssociationId?: StringProperty
  AvailabilityZone?: StringProperty
  AvailabilityZoneId?: StringProperty
  CidrBlock?: StringProperty
  SubnetId?: StringProperty
  Ipv6CidrBlocks?: StringProperty[]
  Ipv6CidrBlock?: StringProperty
  OutpostArn?: StringProperty
  Ipv6Native?: boolean
  EnableDns64?: boolean
  PrivateDnsNameOptionsOnLaunch?: {
    HostnameType?: StringProperty
    EnableResourceNameDnsARecord?: boolean
    EnableResourceNameDnsAAAARecord?: boolean
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Ipv4IpamPoolId?: StringProperty
  Ipv4NetmaskLength?: number
  Ipv6IpamPoolId?: StringProperty
  Ipv6NetmaskLength?: number
  BlockPublicAccessStates?: {
    InternetGatewayBlockMode?: StringProperty
  }
}

export const AWSEC2Subnet = ({
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
      Type: 'AWS::EC2::Subnet',
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