import {StringProperty} from "../StringProperty"


type Properties = {
  AwsAccountId?: StringProperty
  Status?: (string | "ENABLED" | "PAUSED")
  FindingPublishingFrequency?: (string | "FIFTEEN_MINUTES" | "ONE_HOUR" | "SIX_HOURS")
  ServiceRole?: StringProperty
  AutomatedDiscoveryStatus?: (string | "ENABLED" | "DISABLED")
}

export const AWSMacieSession = ({
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
      Type: 'AWS::Macie::Session',
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