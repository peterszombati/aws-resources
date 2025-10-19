import {StringProperty} from "../StringProperty"


type Properties = {
  AIGuardrailArn?: StringProperty
  AssistantArn?: StringProperty
  AIGuardrailId: StringProperty
  AssistantId: StringProperty
  AIGuardrailVersionId?: StringProperty
  VersionNumber?: number
  ModifiedTimeSeconds?: number
}

export const AWSWisdomAIGuardrailVersion = ({
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
      Type: 'AWS::Wisdom::AIGuardrailVersion',
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