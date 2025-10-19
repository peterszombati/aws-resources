import {StringProperty} from "../StringProperty"


type Properties = {
  AIPromptId?: StringProperty
  AIPromptArn?: StringProperty
  ApiFormat: (string | "ANTHROPIC_CLAUDE_MESSAGES" | "ANTHROPIC_CLAUDE_TEXT_COMPLETIONS" | "MESSAGES" | "TEXT_COMPLETIONS")
  AssistantId?: StringProperty
  AssistantArn?: StringProperty
  Description?: StringProperty
  ModelId: StringProperty
  Name?: StringProperty
  Tags?: Record<string, any>
  TemplateConfiguration: Record<string, any>
  TemplateType: (string | "TEXT")
  Type: (string | "ANSWER_GENERATION" | "INTENT_LABELING_GENERATION" | "QUERY_REFORMULATION" | "SELF_SERVICE_PRE_PROCESSING" | "SELF_SERVICE_ANSWER_GENERATION" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "EMAIL_QUERY_REFORMULATION")
  ModifiedTimeSeconds?: number
}

export const AWSWisdomAIPrompt = ({
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
      Type: 'AWS::Wisdom::AIPrompt',
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