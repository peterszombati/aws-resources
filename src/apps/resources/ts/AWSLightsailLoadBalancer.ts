import {StringProperty} from "../StringProperty"


type Properties = {
  LoadBalancerName: StringProperty
  LoadBalancerArn?: StringProperty
  InstancePort: number
  IpAddressType?: StringProperty
  AttachedInstances?: StringProperty[]
  HealthCheckPath?: StringProperty
  SessionStickinessEnabled?: boolean
  SessionStickinessLBCookieDurationSeconds?: StringProperty
  TlsPolicyName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSLightsailLoadBalancer = ({
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
      Type: 'AWS::Lightsail::LoadBalancer',
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