import {StringProperty} from "../StringProperty"


type Properties = {
  TransitGatewayAttachmentId: StringProperty
  TransitGatewayConnectPeerId?: StringProperty
  State?: StringProperty
  CreationTime?: StringProperty
  ConnectPeerConfiguration: {
    TransitGatewayAddress?: StringProperty
    PeerAddress: StringProperty
    InsideCidrBlocks: StringProperty[]
    Protocol?: StringProperty
    BgpConfigurations?: {
      TransitGatewayAsn?: number
      PeerAsn?: number
      TransitGatewayAddress?: StringProperty
      PeerAddress?: StringProperty
      BgpStatus?: StringProperty
    }[]
  }
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
}

export const AWSEC2TransitGatewayConnectPeer = ({
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
      Type: 'AWS::EC2::TransitGatewayConnectPeer',
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