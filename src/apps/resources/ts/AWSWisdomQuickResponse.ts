import {StringProperty} from "../StringProperty"


type Properties = {
  ContentType?: StringProperty
  KnowledgeBaseArn: StringProperty
  Name: StringProperty
  QuickResponseArn?: StringProperty
  QuickResponseId?: StringProperty
  Channels?: (string | "Chat" | "Email")[]
  Content: {
    Content?: StringProperty
  }
  Contents?: {
    Markdown?: {
      Content?: StringProperty
    }
    PlainText?: {
      Content?: StringProperty
    }
  }
  Description?: StringProperty
  GroupingConfiguration?: {
    Criteria: StringProperty
    Values: StringProperty[]
  }
  IsActive?: boolean
  Language?: StringProperty
  ShortcutKey?: StringProperty
  Status?: (string | "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "CREATED" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_IN_PROGRESS" | "UPDATE_FAILED")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWisdomQuickResponse = ({
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
      Type: 'AWS::Wisdom::QuickResponse',
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