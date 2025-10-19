import {StringProperty} from "../StringProperty"


type Properties = {
  SecurityProfileName?: StringProperty
  SecurityProfileDescription?: StringProperty
  Behaviors?: {
    Name: StringProperty
    Metric?: StringProperty
    MetricDimension?: {
      DimensionName: StringProperty
      Operator?: (string | "IN" | "NOT_IN")
    }
    Criteria?: {
      ComparisonOperator?: (string | "less-than" | "less-than-equals" | "greater-than" | "greater-than-equals" | "in-cidr-set" | "not-in-cidr-set" | "in-port-set" | "not-in-port-set" | "in-set" | "not-in-set")
      Value?: {
        Count?: StringProperty
        Cidrs?: StringProperty[]
        Ports?: number[]
        Number?: number
        Numbers?: number[]
        Strings?: StringProperty[]
      }
      DurationSeconds?: number
      ConsecutiveDatapointsToAlarm?: number
      ConsecutiveDatapointsToClear?: number
      StatisticalThreshold?: {
        Statistic?: (string | "Average" | "p0" | "p0.1" | "p0.01" | "p1" | "p10" | "p50" | "p90" | "p99" | "p99.9" | "p99.99" | "p100")
      }
      MlDetectionConfig?: {
        ConfidenceLevel?: (string | "LOW" | "MEDIUM" | "HIGH")
      }
    }
    SuppressAlerts?: boolean
    ExportMetric?: boolean
  }[]
  AlertTargets?: Record<string, any>
  AdditionalMetricsToRetainV2?: {
    Metric: StringProperty
    MetricDimension?: {
      DimensionName: StringProperty
      Operator?: (string | "IN" | "NOT_IN")
    }
    ExportMetric?: boolean
  }[]
  MetricsExportConfig?: {
    MqttTopic: StringProperty
    RoleArn: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TargetArns?: StringProperty[]
  SecurityProfileArn?: StringProperty
}

export const AWSIoTSecurityProfile = ({
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
      Type: 'AWS::IoT::SecurityProfile',
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