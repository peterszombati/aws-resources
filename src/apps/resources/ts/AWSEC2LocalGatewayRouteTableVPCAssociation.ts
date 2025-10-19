import {StringProperty} from "../StringProperty"


type Properties = {
  LocalGatewayId?: StringProperty
  LocalGatewayRouteTableId: StringProperty
  LocalGatewayRouteTableVpcAssociationId?: StringProperty
  State?: StringProperty
  VpcId: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSEC2LocalGatewayRouteTableVPCAssociation = ({
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
      Type: 'AWS::EC2::LocalGatewayRouteTableVPCAssociation',
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