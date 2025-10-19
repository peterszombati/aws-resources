import {StringProperty} from "../StringProperty"


type Properties = {
  AIAgentArn?: StringProperty
  AssistantArn?: StringProperty
  AIAgentId: StringProperty
  AssistantId: StringProperty
  AIAgentVersionId?: StringProperty
  VersionNumber?: number
  ModifiedTimeSeconds?: number
}

export const AWSWisdomAIAgentVersion = ({
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
      Type: 'AWS::Wisdom::AIAgentVersion',
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