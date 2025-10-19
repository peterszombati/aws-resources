import {StringProperty} from "../StringProperty"


type Properties = {
  PeerAddress: StringProperty
  CoreNetworkAddress?: StringProperty
  BgpOptions?: {
    PeerAsn?: number
  }
  InsideCidrBlocks?: StringProperty[]
  CoreNetworkId?: StringProperty
  ConnectAttachmentId: StringProperty
  ConnectPeerId?: StringProperty
  EdgeLocation?: StringProperty
  State?: StringProperty
  CreatedAt?: StringProperty
  Configuration?: {
    CoreNetworkAddress?: StringProperty
    PeerAddress?: StringProperty
    InsideCidrBlocks?: StringProperty[]
    Protocol?: StringProperty
    BgpConfigurations?: {
      CoreNetworkAsn?: number
      PeerAsn?: number
      CoreNetworkAddress?: StringProperty
      PeerAddress?: StringProperty
    }[]
  }
  SubnetArn?: StringProperty
  LastModificationErrors?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSNetworkManagerConnectPeer = ({
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
      Type: 'AWS::NetworkManager::ConnectPeer',
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