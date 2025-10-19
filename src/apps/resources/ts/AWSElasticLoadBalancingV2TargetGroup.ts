import {StringProperty} from "../StringProperty"


type Properties = {
  IpAddressType?: StringProperty
  TargetGroupArn?: StringProperty
  HealthCheckIntervalSeconds?: number
  LoadBalancerArns?: StringProperty[]
  Matcher?: {
    GrpcCode?: StringProperty
    HttpCode?: StringProperty
  }
  HealthCheckPath?: StringProperty
  Port?: number
  Targets?: {
    Port?: number
    AvailabilityZone?: StringProperty
    Id: StringProperty
  }[]
  HealthCheckEnabled?: boolean
  ProtocolVersion?: StringProperty
  UnhealthyThresholdCount?: number
  HealthCheckTimeoutSeconds?: number
  Name?: StringProperty
  VpcId?: StringProperty
  TargetGroupFullName?: StringProperty
  HealthyThresholdCount?: number
  HealthCheckProtocol?: StringProperty
  TargetGroupAttributes?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  TargetType?: StringProperty
  HealthCheckPort?: StringProperty
  Protocol?: StringProperty
  TargetGroupName?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSElasticLoadBalancingV2TargetGroup = ({
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
      Type: 'AWS::ElasticLoadBalancingV2::TargetGroup',
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