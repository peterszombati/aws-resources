import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: {
    Message?: StringProperty
    Code?: StringProperty
  }
  TransitGatewayId: StringProperty
  PeerTransitGatewayId: StringProperty
  PeerAccountId: StringProperty
  State?: StringProperty
  CreationTime?: StringProperty
  PeerRegion: StringProperty
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  TransitGatewayAttachmentId?: StringProperty
}

export const AWSEC2TransitGatewayPeeringAttachment = ({
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
      Type: 'AWS::EC2::TransitGatewayPeeringAttachment',
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