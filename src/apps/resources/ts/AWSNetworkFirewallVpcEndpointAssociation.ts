import {StringProperty} from "../StringProperty"


type Properties = {
  VpcEndpointAssociationArn?: StringProperty
  VpcEndpointAssociationId?: StringProperty
  Description?: StringProperty
  FirewallArn: StringProperty
  VpcId: StringProperty
  EndpointId?: StringProperty
  SubnetMapping: {
    SubnetId: StringProperty
    IPAddressType?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSNetworkFirewallVpcEndpointAssociation = ({
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
      Type: 'AWS::NetworkFirewall::VpcEndpointAssociation',
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