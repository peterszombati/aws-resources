import {StringProperty} from "../StringProperty"


type Properties = {
  PeeringId: StringProperty
  TransitGatewayRouteTableArn: StringProperty
  CoreNetworkId?: StringProperty
  CoreNetworkArn?: StringProperty
  AttachmentId?: StringProperty
  OwnerAccountId?: StringProperty
  AttachmentType?: StringProperty
  State?: StringProperty
  EdgeLocation?: StringProperty
  ResourceArn?: StringProperty
  AttachmentPolicyRuleNumber?: number
  SegmentName?: StringProperty
  ProposedSegmentChange?: {
    Tags?: {
      Key: StringProperty
      Value: StringProperty
    }[]
    AttachmentPolicyRuleNumber?: number
    SegmentName?: StringProperty
  }
  NetworkFunctionGroupName?: StringProperty
  ProposedNetworkFunctionGroupChange?: {
    Tags?: {
      Key: StringProperty
      Value: StringProperty
    }[]
    AttachmentPolicyRuleNumber?: number
    NetworkFunctionGroupName?: StringProperty
  }
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LastModificationErrors?: StringProperty[]
}

export const AWSNetworkManagerTransitGatewayRouteTableAttachment = ({
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
      Type: 'AWS::NetworkManager::TransitGatewayRouteTableAttachment',
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