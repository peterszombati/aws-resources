import {StringProperty} from "../StringProperty"


type Properties = {
  AIAgentId?: StringProperty
  AIAgentArn?: StringProperty
  AssistantId: StringProperty
  AssistantArn?: StringProperty
  Configuration: any
  Description?: StringProperty
  Name?: StringProperty
  Tags?: Record<string, any>
  Type: (string | "MANUAL_SEARCH" | "ANSWER_RECOMMENDATION" | "SELF_SERVICE")
  ModifiedTimeSeconds?: number
}

export const AWSWisdomAIAgent = ({
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
      Type: 'AWS::Wisdom::AIAgent',
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