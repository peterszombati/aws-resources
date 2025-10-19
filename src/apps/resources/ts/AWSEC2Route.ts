import {StringProperty} from "../StringProperty"


type Properties = {
  CarrierGatewayId?: StringProperty
  CidrBlock?: StringProperty
  CoreNetworkArn?: StringProperty
  DestinationCidrBlock?: StringProperty
  DestinationIpv6CidrBlock?: StringProperty
  DestinationPrefixListId?: StringProperty
  EgressOnlyInternetGatewayId?: StringProperty
  GatewayId?: StringProperty
  InstanceId?: StringProperty
  LocalGatewayId?: StringProperty
  NatGatewayId?: StringProperty
  NetworkInterfaceId?: StringProperty
  RouteTableId: StringProperty
  TransitGatewayId?: StringProperty
  VpcEndpointId?: StringProperty
  VpcPeeringConnectionId?: StringProperty
}

export const AWSEC2Route = ({
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
      Type: 'AWS::EC2::Route',
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