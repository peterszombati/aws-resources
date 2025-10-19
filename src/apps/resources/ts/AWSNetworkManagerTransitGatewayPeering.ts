import {StringProperty} from "../StringProperty"


type Properties = {
  CoreNetworkId: StringProperty
  CoreNetworkArn?: StringProperty
  TransitGatewayArn: StringProperty
  TransitGatewayPeeringAttachmentId?: StringProperty
  PeeringId?: StringProperty
  State?: StringProperty
  EdgeLocation?: StringProperty
  ResourceArn?: StringProperty
  OwnerAccountId?: StringProperty
  PeeringType?: StringProperty
  CreatedAt?: StringProperty
  LastModificationErrors?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSNetworkManagerTransitGatewayPeering = ({
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
      Type: 'AWS::NetworkManager::TransitGatewayPeering',
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