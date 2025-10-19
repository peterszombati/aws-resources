import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Ipv6CidrBlock?: StringProperty
  Ipv6IpamPoolId?: StringProperty
  Ipv6NetmaskLength?: number
  SubnetId: StringProperty
  Ipv6AddressAttribute?: StringProperty
  IpSource?: StringProperty
}

export const AWSEC2SubnetCidrBlock = ({
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
      Type: 'AWS::EC2::SubnetCidrBlock',
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