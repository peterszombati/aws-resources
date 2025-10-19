import {StringProperty} from "../StringProperty"


type Properties = {
  FirewallName?: StringProperty
  FirewallArn: StringProperty
  LoggingConfiguration: {
    LogDestinationConfigs: {
      LogType: (string | "ALERT" | "FLOW" | "TLS")
      LogDestinationType: (string | "S3" | "CloudWatchLogs" | "KinesisDataFirehose")
      LogDestination: Record<string, any>
    }[]
  }
  EnableMonitoringDashboard?: boolean
}

export const AWSNetworkFirewallLoggingConfiguration = ({
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
      Type: 'AWS::NetworkFirewall::LoggingConfiguration',
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