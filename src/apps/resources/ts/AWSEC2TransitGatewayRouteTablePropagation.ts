import {StringProperty} from "../StringProperty"


type Properties = {
  TransitGatewayRouteTableId: StringProperty
  TransitGatewayAttachmentId: StringProperty
}

export const AWSEC2TransitGatewayRouteTablePropagation = ({
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
      Type: 'AWS::EC2::TransitGatewayRouteTablePropagation',
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