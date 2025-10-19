import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  IpAddressType?: (string | "IPV4" | "DUAL_STACK")
  IpAddresses?: StringProperty[]
  Enabled?: boolean
  DnsName?: StringProperty
  Ipv4Addresses?: StringProperty[]
  Ipv6Addresses?: StringProperty[]
  DualStackDnsName?: StringProperty
  AcceleratorArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGlobalAcceleratorAccelerator = ({
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
      Type: 'AWS::GlobalAccelerator::Accelerator',
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