import {StringProperty} from "../StringProperty"


type Properties = {
  DistributionId: StringProperty
  MonitoringSubscription: {
    RealtimeMetricsSubscriptionConfig?: {
      RealtimeMetricsSubscriptionStatus: (string | "Enabled" | "Disabled")
    }
  }
}

export const AWSCloudFrontMonitoringSubscription = ({
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
      Type: 'AWS::CloudFront::MonitoringSubscription',
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