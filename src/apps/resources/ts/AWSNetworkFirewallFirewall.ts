import {StringProperty} from "../StringProperty"


type Properties = {
  FirewallName: StringProperty
  FirewallArn?: StringProperty
  FirewallId?: StringProperty
  FirewallPolicyArn: StringProperty
  VpcId?: StringProperty
  SubnetMappings?: {
    SubnetId: StringProperty
    IPAddressType?: StringProperty
  }[]
  AvailabilityZoneMappings?: {
    AvailabilityZone: StringProperty
  }[]
  DeleteProtection?: boolean
  SubnetChangeProtection?: boolean
  AvailabilityZoneChangeProtection?: boolean
  FirewallPolicyChangeProtection?: boolean
  TransitGatewayId?: StringProperty
  Description?: StringProperty
  EndpointIds?: StringProperty[]
  EnabledAnalysisTypes?: (string | "TLS_SNI" | "HTTP_HOST")[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSNetworkFirewallFirewall = ({
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
      Type: 'AWS::NetworkFirewall::Firewall',
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