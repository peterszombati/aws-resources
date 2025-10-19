import {StringProperty} from "../StringProperty"


type Properties = {
  DestinationCidrBlock?: StringProperty
  LocalGatewayRouteTableId?: StringProperty
  LocalGatewayVirtualInterfaceGroupId?: StringProperty
  NetworkInterfaceId?: StringProperty
  State?: StringProperty
  Type?: StringProperty
}

export const AWSEC2LocalGatewayRoute = ({
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
      Type: 'AWS::EC2::LocalGatewayRoute',
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