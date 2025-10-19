import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  Name?: StringProperty
  RuleCount?: number
  Status?: (string | "COMPLETE" | "DELETING" | "UPDATING" | "INACTIVE_OWNER_ACCOUNT_CLOSED")
  StatusMessage?: StringProperty
  OwnerId?: StringProperty
  ShareStatus?: (string | "NOT_SHARED" | "SHARED_WITH_ME" | "SHARED_BY_ME")
  CreatorRequestId?: StringProperty
  CreationTime?: StringProperty
  ModificationTime?: StringProperty
  FirewallRules?: {
    FirewallDomainListId?: StringProperty
    FirewallThreatProtectionId?: StringProperty
    Priority: number
    Action: (string | "ALLOW" | "BLOCK" | "ALERT")
    BlockResponse?: (string | "NODATA" | "NXDOMAIN" | "OVERRIDE")
    BlockOverrideDomain?: StringProperty
    BlockOverrideDnsType?: (string | "CNAME")
    BlockOverrideTtl?: number
    Qtype?: StringProperty
    ConfidenceThreshold?: (string | "LOW" | "MEDIUM" | "HIGH")
    DnsThreatProtection?: (string | "DGA" | "DNS_TUNNELING")
    FirewallDomainRedirectionAction?: (string | "INSPECT_REDIRECTION_DOMAIN" | "TRUST_REDIRECTION_DOMAIN")
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRoute53ResolverFirewallRuleGroup = ({
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
      Type: 'AWS::Route53Resolver::FirewallRuleGroup',
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