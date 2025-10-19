import {StringProperty} from "../StringProperty"


type Properties = {
  FirewallPolicyName: StringProperty
  FirewallPolicyArn?: StringProperty
  FirewallPolicy: {
    StatelessDefaultActions: StringProperty[]
    StatelessFragmentDefaultActions: StringProperty[]
    StatelessCustomActions?: {
      ActionName: StringProperty
      ActionDefinition: {
        PublishMetricAction?: {
          Dimensions: {
            Value: StringProperty
          }[]
        }
      }
    }[]
    StatelessRuleGroupReferences?: {
      ResourceArn: StringProperty
      Priority: number
    }[]
    StatefulRuleGroupReferences?: {
      ResourceArn: StringProperty
      Priority?: number
      Override?: {
        Action?: (string | "DROP_TO_ALERT")
      }
      DeepThreatInspection?: boolean
    }[]
    StatefulDefaultActions?: StringProperty[]
    StatefulEngineOptions?: {
      RuleOrder?: (string | "DEFAULT_ACTION_ORDER" | "STRICT_ORDER")
      StreamExceptionPolicy?: (string | "DROP" | "CONTINUE" | "REJECT")
      FlowTimeouts?: {
        TcpIdleTimeoutSeconds?: number
      }
    }
    PolicyVariables?: {
      RuleVariables?: Record<string, any>
    }
    TLSInspectionConfigurationArn?: StringProperty
  }
  FirewallPolicyId?: StringProperty
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSNetworkFirewallFirewallPolicy = ({
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
      Type: 'AWS::NetworkFirewall::FirewallPolicy',
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