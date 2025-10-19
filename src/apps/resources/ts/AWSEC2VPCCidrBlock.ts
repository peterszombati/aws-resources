import {StringProperty} from "../StringProperty"


type Properties = {
  CidrBlock?: StringProperty
  Ipv6Pool?: StringProperty
  Id?: StringProperty
  VpcId: StringProperty
  Ipv6CidrBlock?: StringProperty
  Ipv4IpamPoolId?: StringProperty
  Ipv4NetmaskLength?: number
  Ipv6IpamPoolId?: StringProperty
  Ipv6NetmaskLength?: number
  AmazonProvidedIpv6CidrBlock?: boolean
  Ipv6AddressAttribute?: StringProperty
  IpSource?: StringProperty
  Ipv6CidrBlockNetworkBorderGroup?: StringProperty
}

export const AWSEC2VPCCidrBlock = ({
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
      Type: 'AWS::EC2::VPCCidrBlock',
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