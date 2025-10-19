import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  RuleArn?: StringProperty
  InstanceArn: StringProperty
  TriggerEventSource: {
    EventSourceName: (string | "OnContactEvaluationSubmit" | "OnPostCallAnalysisAvailable" | "OnRealTimeCallAnalysisAvailable" | "OnRealTimeChatAnalysisAvailable" | "OnPostChatAnalysisAvailable" | "OnZendeskTicketCreate" | "OnZendeskTicketStatusUpdate" | "OnSalesforceCaseCreate" | "OnMetricDataUpdate" | "OnCaseCreate" | "OnCaseUpdate")
    IntegrationAssociationArn?: StringProperty
  }
  Function: StringProperty
  Actions: {
    AssignContactCategoryActions?: Record<string, any>[]
    EventBridgeActions?: {
      Name: StringProperty
    }[]
    TaskActions?: {
      Name: StringProperty
      Description?: StringProperty
      ContactFlowArn: StringProperty
      References?: any
    }[]
    SendNotificationActions?: {
      DeliveryMethod: (string | "EMAIL")
      Subject?: StringProperty
      Content: StringProperty
      ContentType: (string | "PLAIN_TEXT")
      Recipient: {
        UserTags?: any
        UserArns?: StringProperty[]
      }
    }[]
    CreateCaseActions?: {
      Fields: {
        Id: StringProperty
        Value: {
          StringValue?: StringProperty
          BooleanValue?: boolean
          DoubleValue?: number
          EmptyValue?: Record<string, any>
        }
      }[]
      TemplateId: StringProperty
    }[]
    UpdateCaseActions?: {
      Fields: {
        Id: StringProperty
        Value: {
          StringValue?: StringProperty
          BooleanValue?: boolean
          DoubleValue?: number
          EmptyValue?: Record<string, any>
        }
      }[]
    }[]
    EndAssociatedTasksActions?: Record<string, any>[]
    SubmitAutoEvaluationActions?: {
      EvaluationFormArn: StringProperty
    }[]
  }
  PublishStatus: (string | "DRAFT" | "PUBLISHED")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSConnectRule = ({
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
      Type: 'AWS::Connect::Rule',
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