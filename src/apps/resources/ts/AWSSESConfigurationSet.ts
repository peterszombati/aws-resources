import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  TrackingOptions?: {
    CustomRedirectDomain?: StringProperty
    HttpsPolicy?: StringProperty
  }
  DeliveryOptions?: {
    TlsPolicy?: StringProperty
    SendingPoolName?: StringProperty
    MaxDeliverySeconds?: number
  }
  ReputationOptions?: {
    ReputationMetricsEnabled?: boolean
  }
  SendingOptions?: {
    SendingEnabled?: boolean
  }
  SuppressionOptions?: {
    SuppressedReasons?: StringProperty[]
  }
  VdmOptions?: {
    DashboardOptions?: {
      EngagementMetrics: StringProperty
    }
    GuardianOptions?: {
      OptimizedSharedDelivery: StringProperty
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSESConfigurationSet = ({
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
      Type: 'AWS::SES::ConfigurationSet',
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