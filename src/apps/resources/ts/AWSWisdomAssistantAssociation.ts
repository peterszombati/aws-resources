import {StringProperty} from "../StringProperty"


type Properties = {
  AssistantAssociationArn?: StringProperty
  AssistantArn?: StringProperty
  AssistantAssociationId?: StringProperty
  AssistantId: StringProperty
  Association: {
    KnowledgeBaseId: StringProperty
  }
  AssociationType: (string | "KNOWLEDGE_BASE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWisdomAssistantAssociation = ({
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
      Type: 'AWS::Wisdom::AssistantAssociation',
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