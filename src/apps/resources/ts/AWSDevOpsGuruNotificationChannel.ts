import {StringProperty} from "../StringProperty"


type Properties = {
  Config: {
    Sns?: {
      TopicArn?: StringProperty
    }
    Filters?: {
      Severities?: (string | "LOW" | "MEDIUM" | "HIGH")[]
      MessageTypes?: (string | "NEW_INSIGHT" | "CLOSED_INSIGHT" | "NEW_ASSOCIATION" | "SEVERITY_UPGRADED" | "NEW_RECOMMENDATION")[]
    }
  }
  Id?: StringProperty
}

export const AWSDevOpsGuruNotificationChannel = ({
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
      Type: 'AWS::DevOpsGuru::NotificationChannel',
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