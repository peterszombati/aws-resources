import {StringProperty} from "../StringProperty"


type Properties = {
  ExcludeMap?: {
    ACCOUNT?: StringProperty[]
    ORGUNIT?: StringProperty[]
  }
  ExcludeResourceTags: boolean
  IncludeMap?: {
    ACCOUNT?: StringProperty[]
    ORGUNIT?: StringProperty[]
  }
  Id?: StringProperty
  PolicyName: StringProperty
  PolicyDescription?: StringProperty
  RemediationEnabled: boolean
  ResourceTags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  ResourceTagLogicalOperator?: (string | "AND" | "OR")
  ResourceType?: StringProperty
  ResourceTypeList?: StringProperty[]
  ResourceSetIds?: StringProperty[]
  SecurityServicePolicyData: {
    ManagedServiceData?: StringProperty
    Type: (string | "WAF" | "WAFV2" | "SHIELD_ADVANCED" | "SECURITY_GROUPS_COMMON" | "SECURITY_GROUPS_CONTENT_AUDIT" | "SECURITY_GROUPS_USAGE_AUDIT" | "NETWORK_FIREWALL" | "THIRD_PARTY_FIREWALL" | "DNS_FIREWALL" | "IMPORT_NETWORK_FIREWALL" | "NETWORK_ACL_COMMON")
    PolicyOption?: {
      NetworkFirewallPolicy?: {
        FirewallDeploymentModel: (string | "DISTRIBUTED" | "CENTRALIZED")
      }
      ThirdPartyFirewallPolicy?: {
        FirewallDeploymentModel: (string | "DISTRIBUTED" | "CENTRALIZED")
      }
      NetworkAclCommonPolicy?: {
        NetworkAclEntrySet: {
          FirstEntries?: {
            CidrBlock?: StringProperty
            Egress: boolean
            IcmpTypeCode?: {
              Code: number
              Type: number
            }
            Ipv6CidrBlock?: StringProperty
            PortRange?: {
              From: number
              To: number
            }
            Protocol: StringProperty
            RuleAction: (string | "allow" | "deny")
          }[]
          ForceRemediateForFirstEntries: boolean
          LastEntries?: {
            CidrBlock?: StringProperty
            Egress: boolean
            IcmpTypeCode?: {
              Code: number
              Type: number
            }
            Ipv6CidrBlock?: StringProperty
            PortRange?: {
              From: number
              To: number
            }
            Protocol: StringProperty
            RuleAction: (string | "allow" | "deny")
          }[]
          ForceRemediateForLastEntries: boolean
        }
      }
    }
  }
  Arn?: StringProperty
  DeleteAllPolicyResources?: boolean
  ResourcesCleanUp?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSFMSPolicy = ({
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
      Type: 'AWS::FMS::Policy',
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