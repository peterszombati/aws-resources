import {StringProperty} from "../StringProperty"


type Properties = {
  AIPromptArn?: StringProperty
  AssistantArn?: StringProperty
  AIPromptId: StringProperty
  AssistantId: StringProperty
  AIPromptVersionId?: StringProperty
  VersionNumber?: number
  ModifiedTimeSeconds?: number
}

export const AWSWisdomAIPromptVersion = ({
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
      Type: 'AWS::Wisdom::AIPromptVersion',
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