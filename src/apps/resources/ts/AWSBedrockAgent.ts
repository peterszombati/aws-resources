import {StringProperty} from "../StringProperty"


type Properties = {
  ActionGroups?: {
    ActionGroupName: StringProperty
    Description?: StringProperty
    ParentActionGroupSignature?: (string | "AMAZON.UserInput" | "AMAZON.CodeInterpreter")
    ActionGroupExecutor?: any
    ApiSchema?: any
    ActionGroupState?: (string | "ENABLED" | "DISABLED")
    FunctionSchema?: {
      Functions: {
        Name: StringProperty
        Description?: StringProperty
        Parameters?: Record<string, any>
        RequireConfirmation?: (string | "ENABLED" | "DISABLED")
      }[]
    }
    SkipResourceInUseCheckOnDelete?: boolean
  }[]
  AgentArn?: StringProperty
  AgentId?: StringProperty
  AgentName: StringProperty
  AgentResourceRoleArn?: StringProperty
  AgentStatus?: (string | "CREATING" | "PREPARING" | "PREPARED" | "NOT_PREPARED" | "DELETING" | "FAILED" | "VERSIONING" | "UPDATING")
  AgentVersion?: StringProperty
  AutoPrepare?: boolean
  CreatedAt?: StringProperty
  CustomOrchestration?: {
    Executor?: {
      Lambda: StringProperty
    }
  }
  CustomerEncryptionKeyArn?: StringProperty
  SkipResourceInUseCheckOnDelete?: boolean
  Description?: StringProperty
  FailureReasons?: StringProperty[]
  FoundationModel?: StringProperty
  GuardrailConfiguration?: {
    GuardrailIdentifier?: StringProperty
    GuardrailVersion?: StringProperty
  }
  MemoryConfiguration?: {
    EnabledMemoryTypes?: (string | "SESSION_SUMMARY")[]
    StorageDays?: number
    SessionSummaryConfiguration?: {
      MaxRecentSessions?: number
    }
  }
  IdleSessionTTLInSeconds?: number
  AgentCollaboration?: (string | "DISABLED" | "SUPERVISOR" | "SUPERVISOR_ROUTER")
  Instruction?: StringProperty
  KnowledgeBases?: {
    KnowledgeBaseId: StringProperty
    Description: StringProperty
    KnowledgeBaseState?: (string | "ENABLED" | "DISABLED")
  }[]
  AgentCollaborators?: {
    AgentDescriptor: {
      AliasArn?: StringProperty
    }
    CollaborationInstruction: StringProperty
    CollaboratorName: StringProperty
    RelayConversationHistory?: (string | "TO_COLLABORATOR" | "DISABLED")
  }[]
  OrchestrationType?: (string | "DEFAULT" | "CUSTOM_ORCHESTRATION")
  PreparedAt?: StringProperty
  PromptOverrideConfiguration?: {
    PromptConfigurations: {
      PromptType?: (string | "PRE_PROCESSING" | "ORCHESTRATION" | "POST_PROCESSING" | "ROUTING_CLASSIFIER" | "MEMORY_SUMMARIZATION" | "KNOWLEDGE_BASE_RESPONSE_GENERATION")
      PromptCreationMode?: (string | "DEFAULT" | "OVERRIDDEN")
      PromptState?: (string | "ENABLED" | "DISABLED")
      BasePromptTemplate?: StringProperty
      InferenceConfiguration?: {
        Temperature?: number
        TopP?: number
        TopK?: number
        MaximumLength?: number
        StopSequences?: StringProperty[]
      }
      ParserMode?: (string | "DEFAULT" | "OVERRIDDEN")
      FoundationModel?: StringProperty
      AdditionalModelRequestFields?: Record<string, any>
    }[]
    OverrideLambda?: StringProperty
  }
  RecommendedActions?: StringProperty[]
  Tags?: Record<string, any>
  TestAliasTags?: Record<string, any>
  UpdatedAt?: StringProperty
}

export const AWSBedrockAgent = ({
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
      Type: 'AWS::Bedrock::Agent',
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