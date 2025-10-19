import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CloudWatchAlarmTemplateGroupIdentifiers?: StringProperty[]
  CloudWatchAlarmTemplateGroupIds?: StringProperty[]
  CreatedAt?: StringProperty
  Description?: StringProperty
  DiscoveryEntryPointArn: StringProperty
  ErrorMessage?: StringProperty
  EventBridgeRuleTemplateGroupIdentifiers?: StringProperty[]
  EventBridgeRuleTemplateGroupIds?: StringProperty[]
  FailedMediaResourceMap?: Record<string, any>
  ForceRediscovery?: boolean
  Id?: StringProperty
  Identifier?: StringProperty
  LastDiscoveredAt?: StringProperty
  LastSuccessfulMonitorDeployment?: {
    DetailsUri: StringProperty
    Status: (string | "NOT_DEPLOYED" | "DRY_RUN_DEPLOYMENT_COMPLETE" | "DRY_RUN_DEPLOYMENT_FAILED" | "DRY_RUN_DEPLOYMENT_IN_PROGRESS" | "DEPLOYMENT_COMPLETE" | "DEPLOYMENT_FAILED" | "DEPLOYMENT_IN_PROGRESS" | "DELETE_COMPLETE" | "DELETE_FAILED" | "DELETE_IN_PROGRESS")
  }
  MediaResourceMap?: Record<string, any>
  ModifiedAt?: StringProperty
  MonitorChangesPendingDeployment?: boolean
  MonitorDeployment?: {
    DetailsUri?: StringProperty
    ErrorMessage?: StringProperty
    Status: (string | "NOT_DEPLOYED" | "DRY_RUN_DEPLOYMENT_COMPLETE" | "DRY_RUN_DEPLOYMENT_FAILED" | "DRY_RUN_DEPLOYMENT_IN_PROGRESS" | "DEPLOYMENT_COMPLETE" | "DEPLOYMENT_FAILED" | "DEPLOYMENT_IN_PROGRESS" | "DELETE_COMPLETE" | "DELETE_FAILED" | "DELETE_IN_PROGRESS")
  }
  Name: StringProperty
  Status?: (string | "CREATE_IN_PROGRESS" | "CREATE_COMPLETE" | "CREATE_FAILED" | "UPDATE_IN_PROGRESS" | "UPDATE_COMPLETE" | "UPDATE_REVERTED" | "UPDATE_FAILED" | "READY" | "NOT_READY")
  Tags?: Record<string, any>
}

export const AWSMediaLiveSignalMap = ({
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
      Type: 'AWS::MediaLive::SignalMap',
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