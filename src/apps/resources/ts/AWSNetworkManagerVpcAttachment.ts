import {StringProperty} from "../StringProperty"


type Properties = {
  CoreNetworkId: StringProperty
  CoreNetworkArn?: StringProperty
  AttachmentId?: StringProperty
  OwnerAccountId?: StringProperty
  AttachmentType?: StringProperty
  State?: StringProperty
  EdgeLocation?: StringProperty
  VpcArn: StringProperty
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
  SubnetArns: StringProperty[]
  Options?: {
    Ipv6Support?: boolean
    ApplianceModeSupport?: boolean
    DnsSupport?: boolean
    SecurityGroupReferencingSupport?: boolean
  }
  LastModificationErrors?: StringProperty[]
}

export const AWSNetworkManagerVpcAttachment = ({
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
      Type: 'AWS::NetworkManager::VpcAttachment',
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