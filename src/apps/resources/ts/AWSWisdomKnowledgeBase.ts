import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  KnowledgeBaseArn?: StringProperty
  KnowledgeBaseId?: StringProperty
  KnowledgeBaseType: (string | "EXTERNAL" | "CUSTOM" | "MESSAGE_TEMPLATES" | "MANAGED" | "QUICK_RESPONSES")
  Name: StringProperty
  RenderingConfiguration?: {
    TemplateUri?: StringProperty
  }
  ServerSideEncryptionConfiguration?: {
    KmsKeyId?: StringProperty
  }
  SourceConfiguration?: any
  VectorIngestionConfiguration?: {
    ChunkingConfiguration?: {
      ChunkingStrategy: (string | "FIXED_SIZE" | "NONE" | "HIERARCHICAL" | "SEMANTIC")
      FixedSizeChunkingConfiguration?: {
        MaxTokens: number
        OverlapPercentage: number
      }
      HierarchicalChunkingConfiguration?: {
        LevelConfigurations: {
          MaxTokens: number
        }[]
        OverlapTokens: number
      }
      SemanticChunkingConfiguration?: {
        MaxTokens: number
        BufferSize: number
        BreakpointPercentileThreshold: number
      }
    }
    ParsingConfiguration?: {
      ParsingStrategy: (string | "BEDROCK_FOUNDATION_MODEL")
      BedrockFoundationModelConfiguration?: {
        ModelArn: StringProperty
        ParsingPrompt?: {
          ParsingPromptText: StringProperty
        }
      }
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWisdomKnowledgeBase = ({
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
      Type: 'AWS::Wisdom::KnowledgeBase',
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