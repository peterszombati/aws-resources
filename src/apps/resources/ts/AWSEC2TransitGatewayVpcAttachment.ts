import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  TransitGatewayId: StringProperty
  VpcId: StringProperty
  SubnetIds: StringProperty[]
  AddSubnetIds?: StringProperty[]
  RemoveSubnetIds?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Options?: {
    DnsSupport?: StringProperty
    Ipv6Support?: StringProperty
    ApplianceModeSupport?: StringProperty
    SecurityGroupReferencingSupport?: StringProperty
  }
}

export const AWSEC2TransitGatewayVpcAttachment = ({
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
      Type: 'AWS::EC2::TransitGatewayVpcAttachment',
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