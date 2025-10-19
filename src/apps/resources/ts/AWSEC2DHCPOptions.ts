import {StringProperty} from "../StringProperty"


type Properties = {
  DhcpOptionsId?: StringProperty
  DomainName?: StringProperty
  DomainNameServers?: StringProperty[]
  NetbiosNameServers?: StringProperty[]
  NetbiosNodeType?: number
  NtpServers?: StringProperty[]
  Ipv6AddressPreferredLeaseTime?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2DHCPOptions = ({
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
      Type: 'AWS::EC2::DHCPOptions',
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