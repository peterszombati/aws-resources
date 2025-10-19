import {StringProperty} from "../StringProperty"


type Properties = {
  TransitGatewayRouteTableId?: StringProperty
  TransitGatewayId: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEC2TransitGatewayRouteTable = ({
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
      Type: 'AWS::EC2::TransitGatewayRouteTable',
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