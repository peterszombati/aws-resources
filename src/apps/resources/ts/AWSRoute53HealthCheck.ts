import {StringProperty} from "../StringProperty"


type Properties = {
  HealthCheckId?: StringProperty
  HealthCheckConfig: {
    AlarmIdentifier?: {
      Name: StringProperty
      Region: StringProperty
    }
    ChildHealthChecks?: StringProperty[]
    EnableSNI?: boolean
    FailureThreshold?: number
    FullyQualifiedDomainName?: StringProperty
    HealthThreshold?: number
    InsufficientDataHealthStatus?: (string | "Healthy" | "LastKnownStatus" | "Unhealthy")
    Inverted?: boolean
    IPAddress?: StringProperty
    MeasureLatency?: boolean
    Port?: number
    Regions?: StringProperty[]
    RequestInterval?: number
    ResourcePath?: StringProperty
    SearchString?: StringProperty
    RoutingControlArn?: StringProperty
    Type: (string | "CALCULATED" | "CLOUDWATCH_METRIC" | "HTTP" | "HTTP_STR_MATCH" | "HTTPS" | "HTTPS_STR_MATCH" | "TCP" | "RECOVERY_CONTROL")
  }
  HealthCheckTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRoute53HealthCheck = ({
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
      Type: 'AWS::Route53::HealthCheck',
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