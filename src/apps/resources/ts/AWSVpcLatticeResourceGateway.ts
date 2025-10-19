import {StringProperty} from "../StringProperty"


type Properties = {
  IpAddressType?: (string | "IPV4" | "IPV6" | "DUALSTACK")
  VpcIdentifier: StringProperty
  Ipv4AddressesPerEni?: number
  Id?: StringProperty
  Arn?: StringProperty
  SubnetIds: StringProperty[]
  SecurityGroupIds?: StringProperty[]
  Tags?: {
    Value?: StringProperty
    Key: StringProperty
  }[]
  Name: StringProperty
}

export const AWSVpcLatticeResourceGateway = ({
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
      Type: 'AWS::VpcLattice::ResourceGateway',
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