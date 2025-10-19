import {StringProperty} from "../StringProperty"


type Properties = {
  CoreNetworkId: StringProperty
  CoreNetworkArn?: StringProperty
  AttachmentId?: StringProperty
  OwnerAccountId?: StringProperty
  AttachmentType?: StringProperty
  State?: StringProperty
  EdgeLocations: StringProperty[]
  DirectConnectGatewayArn: StringProperty
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
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  LastModificationErrors?: StringProperty[]
}

export const AWSNetworkManagerDirectConnectGatewayAttachment = ({
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
      Type: 'AWS::NetworkManager::DirectConnectGatewayAttachment',
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