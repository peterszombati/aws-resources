import {StringProperty} from "../StringProperty"


type Properties = {
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: StringProperty
  LocalGatewayId?: StringProperty
  LocalGatewayRouteTableId: StringProperty
  LocalGatewayRouteTableArn?: StringProperty
  LocalGatewayVirtualInterfaceGroupId: StringProperty
  OwnerId?: StringProperty
  State?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSEC2LocalGatewayRouteTableVirtualInterfaceGroupAssociation = ({
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
      Type: 'AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation',
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