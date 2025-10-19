import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  DisplayName?: StringProperty
  ChatChannel?: {
    ChatbotSns?: StringProperty[]
  }
  Engagements?: StringProperty[]
  Actions?: {
    SsmAutomation?: {
      RoleArn: StringProperty
      DocumentName: StringProperty
      DocumentVersion?: StringProperty
      TargetAccount?: (string | "IMPACTED_ACCOUNT" | "RESPONSE_PLAN_OWNER_ACCOUNT")
      Parameters?: {
        Key: StringProperty
        Values: StringProperty[]
      }[]
      DynamicParameters?: {
        Key: StringProperty
        Value: {
          Variable?: (string | "INCIDENT_RECORD_ARN" | "INVOLVED_RESOURCES")
        }
      }[]
    }
  }[]
  Integrations?: {
    PagerDutyConfiguration?: {
      Name: StringProperty
      SecretId: StringProperty
      PagerDutyIncidentConfiguration: {
        ServiceId: StringProperty
      }
    }
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  IncidentTemplate: {
    DedupeString?: StringProperty
    Impact: number
    NotificationTargets?: {
      SnsTopicArn?: StringProperty
    }[]
    Summary?: StringProperty
    Title: StringProperty
    IncidentTags?: {
      Key: StringProperty
      Value: StringProperty
    }[]
  }
}

export const AWSSSMIncidentsResponsePlan = ({
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
      Type: 'AWS::SSMIncidents::ResponsePlan',
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