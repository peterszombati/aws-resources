import {StringProperty} from "../StringProperty"


type Properties = {
  ResolverEndpointId?: StringProperty
  DomainName?: StringProperty
  Name?: StringProperty
  RuleType: (string | "FORWARD" | "SYSTEM" | "RECURSIVE" | "DELEGATE")
  DelegationRecord?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TargetIps?: {
    Ip?: StringProperty
    Ipv6?: StringProperty
    Port?: StringProperty
    Protocol?: (string | "Do53" | "DoH")
    ServerNameIndication?: StringProperty
  }[]
  Arn?: StringProperty
  ResolverRuleId?: StringProperty
}

export const AWSRoute53ResolverResolverRule = ({
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
      Type: 'AWS::Route53Resolver::ResolverRule',
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