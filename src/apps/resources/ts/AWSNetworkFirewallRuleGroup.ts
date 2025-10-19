import {StringProperty} from "../StringProperty"


type Properties = {
  RuleGroupName: StringProperty
  RuleGroupArn?: StringProperty
  RuleGroupId?: StringProperty
  RuleGroup?: {
    RuleVariables?: {
      IPSets?: Record<string, any>
      PortSets?: Record<string, any>
    }
    ReferenceSets?: {
      IPSetReferences?: Record<string, any>
    }
    RulesSource: {
      RulesString?: StringProperty
      RulesSourceList?: {
        Targets: StringProperty[]
        TargetTypes: (string | "TLS_SNI" | "HTTP_HOST")[]
        GeneratedRulesType: (string | "ALLOWLIST" | "DENYLIST")
      }
      StatefulRules?: {
        Action: (string | "PASS" | "DROP" | "ALERT" | "REJECT")
        Header: {
          Protocol: (string | "IP" | "TCP" | "UDP" | "ICMP" | "HTTP" | "FTP" | "TLS" | "SMB" | "DNS" | "DCERPC" | "SSH" | "SMTP" | "IMAP" | "MSN" | "KRB5" | "IKEV2" | "TFTP" | "NTP" | "DHCP")
          Source: StringProperty
          SourcePort: StringProperty
          Direction: (string | "FORWARD" | "ANY")
          Destination: StringProperty
          DestinationPort: StringProperty
        }
        RuleOptions: {
          Keyword: StringProperty
          Settings?: StringProperty[]
        }[]
      }[]
      StatelessRulesAndCustomActions?: {
        StatelessRules: {
          RuleDefinition: {
            MatchAttributes: {
              Sources?: {
                AddressDefinition: StringProperty
              }[]
              Destinations?: {
                AddressDefinition: StringProperty
              }[]
              SourcePorts?: {
                FromPort: number
                ToPort: number
              }[]
              DestinationPorts?: {
                FromPort: number
                ToPort: number
              }[]
              Protocols?: number[]
              TCPFlags?: {
                Flags: (string | "FIN" | "SYN" | "RST" | "PSH" | "ACK" | "URG" | "ECE" | "CWR")[]
                Masks?: (string | "FIN" | "SYN" | "RST" | "PSH" | "ACK" | "URG" | "ECE" | "CWR")[]
              }[]
            }
            Actions: StringProperty[]
          }
          Priority: number
        }[]
        CustomActions?: {
          ActionName: StringProperty
          ActionDefinition: {
            PublishMetricAction?: {
              Dimensions: {
                Value: StringProperty
              }[]
            }
          }
        }[]
      }
    }
    StatefulRuleOptions?: {
      RuleOrder?: (string | "DEFAULT_ACTION_ORDER" | "STRICT_ORDER")
    }
  }
  Type: (string | "STATELESS" | "STATEFUL")
  Capacity: number
  SummaryConfiguration?: {
    RuleOptions?: (string | "SID" | "MSG" | "METADATA")[]
  }
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSNetworkFirewallRuleGroup = ({
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
      Type: 'AWS::NetworkFirewall::RuleGroup',
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