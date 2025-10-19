import {StringProperty} from "../StringProperty"


type Properties = {
  GroupIpAddress: StringProperty
  TransitGatewayAttachmentId?: StringProperty
  TransitGatewayMulticastDomainId: StringProperty
  SubnetId?: StringProperty
  ResourceId?: StringProperty
  ResourceType?: StringProperty
  NetworkInterfaceId: StringProperty
  GroupMember?: boolean
  GroupSource?: boolean
  SourceType?: StringProperty
}

export const AWSEC2TransitGatewayMulticastGroupSource = ({
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
      Type: 'AWS::EC2::TransitGatewayMulticastGroupSource',
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