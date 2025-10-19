import {StringProperty} from "../StringProperty"


type Properties = {
  CreatedAt?: StringProperty
  ModifiedAt?: StringProperty
  MonitorArn?: StringProperty
  MonitorName: StringProperty
  LinkedAccountId?: StringProperty
  IncludeLinkedAccounts?: boolean
  ProcessingStatus?: (string | "OK" | "INACTIVE" | "COLLECTING_DATA" | "INSUFFICIENT_DATA" | "FAULT_SERVICE" | "FAULT_ACCESS_CLOUDWATCH")
  ProcessingStatusInfo?: StringProperty
  Resources?: StringProperty[]
  ResourcesToAdd?: StringProperty[]
  ResourcesToRemove?: StringProperty[]
  Status?: (string | "PENDING" | "ACTIVE" | "INACTIVE" | "ERROR")
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  MaxCityNetworksToMonitor?: number
  TrafficPercentageToMonitor?: number
  InternetMeasurementsLogDelivery?: {
    S3Config?: {
      BucketName?: StringProperty
      BucketPrefix?: StringProperty
      LogDeliveryStatus?: (string | "ENABLED" | "DISABLED")
    }
  }
  HealthEventsConfig?: {
    AvailabilityScoreThreshold?: number
    PerformanceScoreThreshold?: number
    AvailabilityLocalHealthEventsConfig?: {
      Status?: (string | "ENABLED" | "DISABLED")
      HealthScoreThreshold?: number
      MinTrafficImpact?: number
    }
    PerformanceLocalHealthEventsConfig?: {
      Status?: (string | "ENABLED" | "DISABLED")
      HealthScoreThreshold?: number
      MinTrafficImpact?: number
    }
  }
}

export const AWSInternetMonitorMonitor = ({
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
      Type: 'AWS::InternetMonitor::Monitor',
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