import {StringProperty} from "../StringProperty"


type Properties = {
  SecurityGroups?: StringProperty[]
  ConnectionDrainingPolicy?: {
    Enabled: boolean
    Timeout?: number
  }
  Policies?: {
    Attributes: Record<string, any>[]
    PolicyType: StringProperty
    LoadBalancerPorts?: StringProperty[]
    PolicyName: StringProperty
    InstancePorts?: StringProperty[]
  }[]
  Scheme?: StringProperty
  AvailabilityZones?: StringProperty[]
  SourceSecurityGroupOwnerAlias?: StringProperty
  HealthCheck?: {
    Target: StringProperty
    UnhealthyThreshold: StringProperty
    Timeout: StringProperty
    HealthyThreshold: StringProperty
    Interval: StringProperty
  }
  CanonicalHostedZoneNameID?: StringProperty
  CanonicalHostedZoneName?: StringProperty
  DNSName?: StringProperty
  AccessLoggingPolicy?: {
    Enabled: boolean
    S3BucketName: StringProperty
    EmitInterval?: number
    S3BucketPrefix?: StringProperty
  }
  Instances?: StringProperty[]
  LoadBalancerName?: StringProperty
  Listeners: {
    PolicyNames?: StringProperty[]
    InstancePort: StringProperty
    LoadBalancerPort: StringProperty
    Protocol: StringProperty
    SSLCertificateId?: StringProperty
    InstanceProtocol?: StringProperty
  }[]
  Subnets?: StringProperty[]
  CrossZone?: boolean
  AppCookieStickinessPolicy?: {
    CookieName: StringProperty
    PolicyName: StringProperty
  }[]
  LBCookieStickinessPolicy?: {
    CookieExpirationPeriod?: StringProperty
    PolicyName?: StringProperty
  }[]
  Id?: StringProperty
  SourceSecurityGroupGroupName?: StringProperty
  ConnectionSettings?: {
    IdleTimeout: number
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSElasticLoadBalancingLoadBalancer = ({
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
      Type: 'AWS::ElasticLoadBalancing::LoadBalancer',
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