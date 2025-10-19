import {StringProperty} from "../StringProperty"


type Properties = {
  ResourceGroupName: StringProperty
  ApplicationARN?: StringProperty
  CWEMonitorEnabled?: boolean
  OpsCenterEnabled?: boolean
  OpsItemSNSTopicArn?: StringProperty
  SNSNotificationArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CustomComponents?: {
    ComponentName: StringProperty
    ResourceList: StringProperty[]
  }[]
  LogPatternSets?: {
    PatternSetName: StringProperty
    LogPatterns: {
      PatternName: StringProperty
      Pattern: StringProperty
      Rank: number
    }[]
  }[]
  AutoConfigurationEnabled?: boolean
  ComponentMonitoringSettings?: {
    ComponentName?: StringProperty
    ComponentARN?: StringProperty
    Tier: StringProperty
    ComponentConfigurationMode: (string | "DEFAULT" | "DEFAULT_WITH_OVERWRITE" | "CUSTOM")
    DefaultOverwriteComponentConfiguration?: {
      ConfigurationDetails?: {
        AlarmMetrics?: {
          AlarmMetricName: StringProperty
        }[]
        Logs?: {
          LogGroupName?: StringProperty
          LogPath?: StringProperty
          LogType: StringProperty
          Encoding?: (string | "utf-8" | "utf-16" | "ascii")
          PatternSet?: StringProperty
        }[]
        WindowsEvents?: {
          LogGroupName: StringProperty
          EventName: StringProperty
          EventLevels: (string | "INFORMATION" | "WARNING" | "ERROR" | "CRITICAL" | "VERBOSE")[]
          PatternSet?: StringProperty
        }[]
        Processes?: {
          ProcessName: StringProperty
          AlarmMetrics: {
            AlarmMetricName: StringProperty
          }[]
        }[]
        Alarms?: {
          AlarmName: StringProperty
          Severity?: (string | "HIGH" | "MEDIUM" | "LOW")
        }[]
        JMXPrometheusExporter?: {
          JMXURL?: StringProperty
          HostPort?: StringProperty
          PrometheusPort?: StringProperty
        }
        HANAPrometheusExporter?: {
          HANASID: StringProperty
          HANAPort: StringProperty
          HANASecretName: StringProperty
          AgreeToInstallHANADBClient: boolean
          PrometheusPort?: StringProperty
        }
        HAClusterPrometheusExporter?: {
          PrometheusPort?: StringProperty
        }
        NetWeaverPrometheusExporter?: {
          SAPSID: StringProperty
          InstanceNumbers: StringProperty[]
          PrometheusPort?: StringProperty
        }
        SQLServerPrometheusExporter?: {
          PrometheusPort: StringProperty
          SQLSecretName: StringProperty
        }
      }
      SubComponentTypeConfigurations?: {
        SubComponentType: (string | "AWS::EC2::Instance" | "AWS::EC2::Volume")
        SubComponentConfigurationDetails: {
          AlarmMetrics?: {
            AlarmMetricName: StringProperty
          }[]
          Logs?: {
            LogGroupName?: StringProperty
            LogPath?: StringProperty
            LogType: StringProperty
            Encoding?: (string | "utf-8" | "utf-16" | "ascii")
            PatternSet?: StringProperty
          }[]
          WindowsEvents?: {
            LogGroupName: StringProperty
            EventName: StringProperty
            EventLevels: (string | "INFORMATION" | "WARNING" | "ERROR" | "CRITICAL" | "VERBOSE")[]
            PatternSet?: StringProperty
          }[]
          Processes?: {
            ProcessName: StringProperty
            AlarmMetrics: {
              AlarmMetricName: StringProperty
            }[]
          }[]
        }
      }[]
    }
    CustomComponentConfiguration?: {
      ConfigurationDetails?: {
        AlarmMetrics?: {
          AlarmMetricName: StringProperty
        }[]
        Logs?: {
          LogGroupName?: StringProperty
          LogPath?: StringProperty
          LogType: StringProperty
          Encoding?: (string | "utf-8" | "utf-16" | "ascii")
          PatternSet?: StringProperty
        }[]
        WindowsEvents?: {
          LogGroupName: StringProperty
          EventName: StringProperty
          EventLevels: (string | "INFORMATION" | "WARNING" | "ERROR" | "CRITICAL" | "VERBOSE")[]
          PatternSet?: StringProperty
        }[]
        Processes?: {
          ProcessName: StringProperty
          AlarmMetrics: {
            AlarmMetricName: StringProperty
          }[]
        }[]
        Alarms?: {
          AlarmName: StringProperty
          Severity?: (string | "HIGH" | "MEDIUM" | "LOW")
        }[]
        JMXPrometheusExporter?: {
          JMXURL?: StringProperty
          HostPort?: StringProperty
          PrometheusPort?: StringProperty
        }
        HANAPrometheusExporter?: {
          HANASID: StringProperty
          HANAPort: StringProperty
          HANASecretName: StringProperty
          AgreeToInstallHANADBClient: boolean
          PrometheusPort?: StringProperty
        }
        HAClusterPrometheusExporter?: {
          PrometheusPort?: StringProperty
        }
        NetWeaverPrometheusExporter?: {
          SAPSID: StringProperty
          InstanceNumbers: StringProperty[]
          PrometheusPort?: StringProperty
        }
        SQLServerPrometheusExporter?: {
          PrometheusPort: StringProperty
          SQLSecretName: StringProperty
        }
      }
      SubComponentTypeConfigurations?: {
        SubComponentType: (string | "AWS::EC2::Instance" | "AWS::EC2::Volume")
        SubComponentConfigurationDetails: {
          AlarmMetrics?: {
            AlarmMetricName: StringProperty
          }[]
          Logs?: {
            LogGroupName?: StringProperty
            LogPath?: StringProperty
            LogType: StringProperty
            Encoding?: (string | "utf-8" | "utf-16" | "ascii")
            PatternSet?: StringProperty
          }[]
          WindowsEvents?: {
            LogGroupName: StringProperty
            EventName: StringProperty
            EventLevels: (string | "INFORMATION" | "WARNING" | "ERROR" | "CRITICAL" | "VERBOSE")[]
            PatternSet?: StringProperty
          }[]
          Processes?: {
            ProcessName: StringProperty
            AlarmMetrics: {
              AlarmMetricName: StringProperty
            }[]
          }[]
        }
      }[]
    }
  }[]
  GroupingType?: (string | "ACCOUNT_BASED")
  AttachMissingPermission?: boolean
}

export const AWSApplicationInsightsApplication = ({
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
      Type: 'AWS::ApplicationInsights::Application',
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