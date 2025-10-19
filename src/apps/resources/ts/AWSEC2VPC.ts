import {StringProperty} from "../StringProperty"


type Properties = {
  VpcId?: StringProperty
  InstanceTenancy?: StringProperty
  Ipv4NetmaskLength?: number
  CidrBlockAssociations?: StringProperty[]
  CidrBlock?: StringProperty
  Ipv4IpamPoolId?: StringProperty
  DefaultNetworkAcl?: StringProperty
  EnableDnsSupport?: boolean
  Ipv6CidrBlocks?: StringProperty[]
  DefaultSecurityGroup?: StringProperty
  EnableDnsHostnames?: boolean
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEC2VPC = ({
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
      Type: 'AWS::EC2::VPC',
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