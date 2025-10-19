import {StringProperty} from "../StringProperty"


type Properties = {
  Type?: StringProperty
  Description?: StringProperty
  HealthCheckCustomConfig?: {
    FailureThreshold?: number
  }
  DnsConfig?: {
    DnsRecords: {
      TTL: number
      Type: StringProperty
    }[]
    RoutingPolicy?: StringProperty
    NamespaceId?: StringProperty
  }
  ServiceAttributes?: Record<string, any>
  Id?: StringProperty
  NamespaceId?: StringProperty
  HealthCheckConfig?: {
    Type: StringProperty
    ResourcePath?: StringProperty
    FailureThreshold?: number
  }
  Arn?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name?: StringProperty
}

export const AWSServiceDiscoveryService = ({
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
      Type: 'AWS::ServiceDiscovery::Service',
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