import {StringProperty} from "../StringProperty"


type Properties = {
  TransitGatewayRouteTableId: StringProperty
  DestinationCidrBlock: StringProperty
  Blackhole?: boolean
  TransitGatewayAttachmentId?: StringProperty
}

export const AWSEC2TransitGatewayRoute = ({
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
      Type: 'AWS::EC2::TransitGatewayRoute',
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