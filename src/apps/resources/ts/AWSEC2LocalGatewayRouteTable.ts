import {StringProperty} from "../StringProperty"


type Properties = {
  LocalGatewayRouteTableId?: StringProperty
  LocalGatewayRouteTableArn?: StringProperty
  LocalGatewayId: StringProperty
  OutpostArn?: StringProperty
  OwnerId?: StringProperty
  State?: StringProperty
  Mode?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSEC2LocalGatewayRouteTable = ({
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
      Type: 'AWS::EC2::LocalGatewayRouteTable',
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