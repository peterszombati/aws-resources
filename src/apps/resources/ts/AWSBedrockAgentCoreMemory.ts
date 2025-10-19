import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  EncryptionKeyArn?: StringProperty
  MemoryExecutionRoleArn?: StringProperty
  EventExpiryDuration: number
  MemoryArn?: StringProperty
  MemoryId?: StringProperty
  Status?: (string | "CREATING" | "ACTIVE" | "FAILED" | "DELETING")
  FailureReason?: StringProperty
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  MemoryStrategies?: {
    SemanticMemoryStrategy?: {
      Name: StringProperty
      Description?: StringProperty
      Namespaces?: StringProperty[]
      StrategyId?: StringProperty
      Type?: (string | "SEMANTIC" | "SUMMARIZATION" | "USER_PREFERENCE" | "CUSTOM")
      Status?: (string | "CREATING" | "ACTIVE" | "DELETING" | "FAILED")
      CreatedAt?: StringProperty
      UpdatedAt?: StringProperty
    }
    SummaryMemoryStrategy?: {
      Name: StringProperty
      Description?: StringProperty
      Namespaces?: StringProperty[]
      StrategyId?: StringProperty
      Type?: (string | "SEMANTIC" | "SUMMARIZATION" | "USER_PREFERENCE" | "CUSTOM")
      Status?: (string | "CREATING" | "ACTIVE" | "DELETING" | "FAILED")
      CreatedAt?: StringProperty
      UpdatedAt?: StringProperty
    }
    UserPreferenceMemoryStrategy?: {
      Name: StringProperty
      Description?: StringProperty
      Namespaces?: StringProperty[]
      StrategyId?: StringProperty
      Type?: (string | "SEMANTIC" | "SUMMARIZATION" | "USER_PREFERENCE" | "CUSTOM")
      Status?: (string | "CREATING" | "ACTIVE" | "DELETING" | "FAILED")
      CreatedAt?: StringProperty
      UpdatedAt?: StringProperty
    }
    CustomMemoryStrategy?: {
      Name: StringProperty
      Description?: StringProperty
      Namespaces?: StringProperty[]
      Configuration?: {
        SemanticOverride?: {
          Extraction?: {
            AppendToPrompt: StringProperty
            ModelId: StringProperty
          }
          Consolidation?: {
            AppendToPrompt: StringProperty
            ModelId: StringProperty
          }
        }
        SummaryOverride?: {
          Consolidation?: {
            AppendToPrompt: StringProperty
            ModelId: StringProperty
          }
        }
        UserPreferenceOverride?: {
          Extraction?: {
            AppendToPrompt: StringProperty
            ModelId: StringProperty
          }
          Consolidation?: {
            AppendToPrompt: StringProperty
            ModelId: StringProperty
          }
        }
        SelfManagedConfiguration?: {
          TriggerConditions?: {
            MessageBasedTrigger?: {
              MessageCount?: number
            }
            TokenBasedTrigger?: {
              TokenCount?: number
            }
            TimeBasedTrigger?: {
              IdleSessionTimeout?: number
            }
          }[]
          InvocationConfiguration?: {
            TopicArn?: StringProperty
            PayloadDeliveryBucketName?: StringProperty
          }
          HistoricalContextWindowSize?: number
        }
      }
      StrategyId?: StringProperty
      Type?: (string | "SEMANTIC" | "SUMMARIZATION" | "USER_PREFERENCE" | "CUSTOM")
      Status?: (string | "CREATING" | "ACTIVE" | "DELETING" | "FAILED")
      CreatedAt?: StringProperty
      UpdatedAt?: StringProperty
    }
  }[]
  Tags?: Record<string, any>
}

export const AWSBedrockAgentCoreMemory = ({
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
      Type: 'AWS::BedrockAgentCore::Memory',
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