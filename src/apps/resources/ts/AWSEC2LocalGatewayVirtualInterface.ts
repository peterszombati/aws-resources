import {StringProperty} from "../StringProperty"


type Properties = {
  LocalGatewayVirtualInterfaceId?: StringProperty
  LocalGatewayId?: StringProperty
  LocalGatewayVirtualInterfaceGroupId: StringProperty
  OutpostLagId: StringProperty
  Vlan: number
  LocalAddress: StringProperty
  PeerAddress: StringProperty
  LocalBgpAsn?: number
  PeerBgpAsn?: number
  PeerBgpAsnExtended?: number /* schema format: int64*/
  OwnerId?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  ConfigurationState?: StringProperty
}

export const AWSEC2LocalGatewayVirtualInterface = ({
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
      Type: 'AWS::EC2::LocalGatewayVirtualInterface',
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