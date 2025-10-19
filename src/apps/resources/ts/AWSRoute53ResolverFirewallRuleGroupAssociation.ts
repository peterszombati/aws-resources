import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  FirewallRuleGroupId: StringProperty
  VpcId: StringProperty
  Name?: StringProperty
  Priority: number
  MutationProtection?: (string | "ENABLED" | "DISABLED")
  ManagedOwnerName?: StringProperty
  Status?: (string | "COMPLETE" | "DELETING" | "UPDATING" | "INACTIVE_OWNER_ACCOUNT_CLOSED")
  StatusMessage?: StringProperty
  CreatorRequestId?: StringProperty
  CreationTime?: StringProperty
  ModificationTime?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRoute53ResolverFirewallRuleGroupAssociation = ({
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
      Type: 'AWS::Route53Resolver::FirewallRuleGroupAssociation',
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