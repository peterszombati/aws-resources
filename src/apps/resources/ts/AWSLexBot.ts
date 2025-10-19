import {StringProperty} from "../StringProperty"

type ReplicaRegion = StringProperty

type Replication = {
  ReplicaRegions: ReplicaRegion[]
}

type BotAliasLocaleSettingsList = BotAliasLocaleSettingsItem[]

type BotAliasLocaleSettingsItem = {
  LocaleId: StringProperty
  BotAliasLocaleSetting: BotAliasLocaleSettings
}

type BotAliasLocaleSettings = {
  CodeHookSpecification?: CodeHookSpecification
  Enabled: boolean
}

type CodeHookSpecification = {
  LambdaCodeHook: LambdaCodeHook
}

type LambdaCodeHook = {
  CodeHookInterfaceVersion: StringProperty
  LambdaArn: StringProperty
}

type ConversationLogSettings = {
  AudioLogSettings?: AudioLogSettings
  TextLogSettings?: TextLogSettings
}

type AudioLogSettings = AudioLogSetting[]

type TextLogSettings = TextLogSetting[]

type AudioLogSetting = {
  Destination: AudioLogDestination
  Enabled: boolean
}

type TextLogSetting = {
  Destination: TextLogDestination
  Enabled: boolean
}

type AudioLogDestination = {
  S3Bucket: S3BucketLogDestination
}

type TextLogDestination = {
  CloudWatch: CloudWatchLogGroupLogDestination
}

type CloudWatchLogGroupLogDestination = {
  CloudWatchLogGroupArn: StringProperty
  LogPrefix: StringProperty
}

type S3BucketLogDestination = {
  S3BucketArn: StringProperty
  LogPrefix: StringProperty
  KmsKeyArn?: StringProperty
}

type TestBotAliasSettings = {
  BotAliasLocaleSettings?: BotAliasLocaleSettingsList
  ConversationLogSettings?: ConversationLogSettings
  Description?: Description
  SentimentAnalysisSettings?: {
    DetectSentiment: boolean
  }
}

type RoleArn = StringProperty

type Id = StringProperty

type BotArn = StringProperty

type Name = StringProperty

type Description = StringProperty

type DataPrivacy = {
  ChildDirected: boolean
}

type ErrorLogSettings = {
  Enabled: boolean
}

type IdleSessionTTLInSeconds = number

type Utterance = StringProperty

type SampleUtterance = {
  Utterance: Utterance
}

type SampleUtterancesList = SampleUtterance[]

type Tag = {
  Key: StringProperty
  Value: StringProperty
}

type LocaleId = StringProperty

type VoiceSettings = {
  VoiceId: StringProperty
  Engine?: (string | "standard" | "neural" | "long-form" | "generative")
}

type GenerativeAISettings = {
  BuildtimeSettings?: {
    DescriptiveBotBuilderSpecification?: {
      Enabled: boolean
      BedrockModelSpecification?: BedrockModelSpecification
    }
    SampleUtteranceGenerationSpecification?: {
      Enabled: boolean
      BedrockModelSpecification?: BedrockModelSpecification
    }
  }
  RuntimeSettings?: {
    NluImprovementSpecification?: {
      Enabled: boolean
    }
    SlotResolutionImprovementSpecification?: {
      Enabled: boolean
      BedrockModelSpecification?: BedrockModelSpecification
    }
  }
}

type ConfidenceThreshold = number

type ParentIntentSignature = StringProperty

type DialogCodeHookSetting = {
  Enabled: boolean
}

type FulfillmentStartResponseSpecification = {
  MessageGroups: MessageGroupsList
  DelayInSeconds: number
  AllowInterrupt?: boolean
}

type FulfillmentUpdateResponseSpecification = {
  MessageGroups: MessageGroupsList
  FrequencyInSeconds: number
  AllowInterrupt?: boolean
}

type FulfillmentUpdatesSpecification = {
  StartResponse?: FulfillmentStartResponseSpecification
  UpdateResponse?: FulfillmentUpdateResponseSpecification
  TimeoutInSeconds?: number
  Active: boolean
}

type PostFulfillmentStatusSpecification = {
  SuccessResponse?: ResponseSpecification
  SuccessNextStep?: DialogState
  SuccessConditional?: ConditionalSpecification
  FailureResponse?: ResponseSpecification
  FailureNextStep?: DialogState
  FailureConditional?: ConditionalSpecification
  TimeoutResponse?: ResponseSpecification
  TimeoutNextStep?: DialogState
  TimeoutConditional?: ConditionalSpecification
}

type FulfillmentCodeHookSetting = {
  FulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification
  PostFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification
  Enabled: boolean
  IsActive?: boolean
}

type Button = {
  Text: StringProperty
  Value: StringProperty
}

type AttachmentTitle = StringProperty

type AttachmentUrl = StringProperty

type ImageResponseCard = {
  Title: AttachmentTitle
  Subtitle?: AttachmentTitle
  ImageUrl?: AttachmentUrl
  Buttons?: Button[]
}

type PlainTextMessage = {
  Value: StringProperty
}

type CustomPayload = {
  Value: StringProperty
}

type SSMLMessage = {
  Value: StringProperty
}

type Message = {
  PlainTextMessage?: PlainTextMessage
  CustomPayload?: CustomPayload
  SSMLMessage?: SSMLMessage
  ImageResponseCard?: ImageResponseCard
}

type MessageGroup = {
  Message: Message
  Variations?: Message[]
}

type MessageGroupsList = MessageGroup[]

type PromptMaxRetries = number

type MessageSelectionStrategy = (string | "Random" | "Ordered")

type AllowedInputTypes = {
  AllowAudioInput: boolean
  AllowDTMFInput: boolean
}

type DTMFSpecification = {
  DeletionCharacter: StringProperty
  EndCharacter: StringProperty
  EndTimeoutMs: number
  MaxLength: number
}

type AudioSpecification = {
  EndTimeoutMs: number
  MaxLengthMs: number
}

type AudioAndDTMFInputSpecification = {
  StartTimeoutMs: number
  DTMFSpecification?: DTMFSpecification
  AudioSpecification?: AudioSpecification
}

type TextInputSpecification = {
  StartTimeoutMs: number
}

type PromptAttemptSpecification = {
  AllowedInputTypes: AllowedInputTypes
  AllowInterrupt?: boolean
  AudioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification
  TextInputSpecification?: TextInputSpecification
}

type PromptSpecification = {
  MessageGroupsList: MessageGroupsList
  MaxRetries: PromptMaxRetries
  AllowInterrupt?: boolean
  MessageSelectionStrategy?: MessageSelectionStrategy
  PromptAttemptsSpecification?: Record<string, any>
}

type ResponseSpecification = {
  MessageGroupsList: MessageGroupsList
  AllowInterrupt?: boolean
}

type StillWaitingResponseFrequency = number

type StillWaitingResponseTimeout = number

type StillWaitingResponseSpecification = {
  MessageGroupsList: MessageGroupsList
  FrequencyInSeconds: StillWaitingResponseFrequency
  TimeoutInSeconds: StillWaitingResponseTimeout
  AllowInterrupt?: boolean
}

type IntentConfirmationSetting = {
  PromptSpecification: PromptSpecification
  IsActive?: boolean
  ConfirmationResponse?: ResponseSpecification
  ConfirmationNextStep?: DialogState
  ConfirmationConditional?: ConditionalSpecification
  DeclinationResponse?: ResponseSpecification
  DeclinationNextStep?: DialogState
  DeclinationConditional?: ConditionalSpecification
  FailureResponse?: ResponseSpecification
  FailureNextStep?: DialogState
  FailureConditional?: ConditionalSpecification
  CodeHook?: DialogCodeHookInvocationSetting
  ElicitationCodeHook?: ElicitationCodeHookInvocationSetting
}

type IntentClosingSetting = {
  ClosingResponse?: ResponseSpecification
  IsActive?: boolean
  Conditional?: ConditionalSpecification
  NextStep?: DialogState
}

type InputContext = {
  Name: Name
}

type InputContextsList = InputContext[]

type ContextTimeToLiveInSeconds = number

type ContextTurnsToLive = number

type OutputContext = {
  Name: Name
  TimeToLiveInSeconds: ContextTimeToLiveInSeconds
  TurnsToLive: ContextTurnsToLive
}

type OutputContextsList = OutputContext[]

type KendraIndexArn = StringProperty

type QueryFilterString = StringProperty

type BedrockModelSpecification = {
  ModelArn: StringProperty
  BedrockGuardrailConfiguration?: {
    BedrockGuardrailIdentifier?: StringProperty
    BedrockGuardrailVersion?: StringProperty
  }
  BedrockTraceStatus?: (string | "ENABLED" | "DISABLED")
  BedrockModelCustomPrompt?: StringProperty
}

type KendraConfiguration = {
  KendraIndex: KendraIndexArn
  QueryFilterStringEnabled?: boolean
  QueryFilterString?: QueryFilterString
}

type QnAIntentConfiguration = {
  DataSourceConfiguration: {
    OpensearchConfiguration?: {
      DomainEndpoint?: StringProperty
      IndexName?: StringProperty
      IncludeFields?: StringProperty[]
      ExactResponse?: boolean
      ExactResponseFields?: {
        QuestionField?: StringProperty
        AnswerField?: StringProperty
      }
    }
    BedrockKnowledgeStoreConfiguration?: {
      BedrockKnowledgeBaseArn?: StringProperty
      ExactResponse?: boolean
      BKBExactResponseFields?: {
        AnswerField?: StringProperty
      }
    }
    KendraConfiguration?: QnAKendraConfiguration
  }
  BedrockModelConfiguration: BedrockModelSpecification
}

type QInConnectIntentConfiguration = {
  QInConnectAssistantConfiguration?: {
    AssistantArn: StringProperty
  }
}

type QnAKendraConfiguration = {
  KendraIndex: StringProperty
  QueryFilterString?: StringProperty
  QueryFilterStringEnabled: boolean
  ExactResponse: boolean
}

type BedrockAgentIntentConfiguration = {
  BedrockAgentConfiguration?: {
    BedrockAgentId?: StringProperty
    BedrockAgentAliasId?: StringProperty
  }
  BedrockAgentIntentKnowledgeBaseConfiguration?: {
    BedrockKnowledgeBaseArn: StringProperty
    BedrockModelConfiguration: BedrockModelSpecification
  }
}

type PriorityValue = number

type SlotPriority = {
  Priority: PriorityValue
  SlotName: Name
}

type SlotPrioritiesList = SlotPriority[]

type Intent = {
  Name: Name
  Description?: Description
  ParentIntentSignature?: ParentIntentSignature
  SampleUtterances?: SampleUtterancesList
  DialogCodeHook?: DialogCodeHookSetting
  FulfillmentCodeHook?: FulfillmentCodeHookSetting
  IntentConfirmationSetting?: IntentConfirmationSetting
  IntentClosingSetting?: IntentClosingSetting
  InitialResponseSetting?: InitialResponseSetting
  InputContexts?: InputContextsList
  OutputContexts?: OutputContextsList
  KendraConfiguration?: KendraConfiguration
  QnAIntentConfiguration?: QnAIntentConfiguration
  QInConnectIntentConfiguration?: QInConnectIntentConfiguration
  BedrockAgentIntentConfiguration?: BedrockAgentIntentConfiguration
  SlotPriorities?: SlotPrioritiesList
  Slots?: Slot[]
}

type ParentSlotTypeSignature = StringProperty

type SlotTypeName = StringProperty

type SampleValue = {
  Value: StringProperty
}

type SynonymList = SampleValue[]

type SlotTypeValue = {
  SampleValue: SampleValue
  Synonyms?: SynonymList
}

type SlotTypeValues = SlotTypeValue[]

type SlotValueResolutionStrategy = (string | "ORIGINAL_VALUE" | "TOP_RESOLUTION" | "CONCATENATION")

type SlotValueRegexFilter = {
  Pattern: StringProperty
}

type AudioRecognitionStrategy = (string | "UseSlotValuesAsCustomVocabulary")

type AdvancedRecognitionSetting = {
  AudioRecognitionStrategy?: AudioRecognitionStrategy
}

type SlotValueSelectionSetting = {
  ResolutionStrategy: SlotValueResolutionStrategy
  RegexFilter?: SlotValueRegexFilter
  AdvancedRecognitionSetting?: AdvancedRecognitionSetting
}

type S3BucketName = StringProperty

type S3ObjectKey = StringProperty

type GrammarSlotTypeSource = {
  S3BucketName: S3BucketName
  S3ObjectKey: S3ObjectKey
  KmsKeyArn?: StringProperty
}

type GrammarSlotTypeSetting = {
  Source?: GrammarSlotTypeSource
}

type ExternalSourceSetting = {
  GrammarSlotTypeSetting?: GrammarSlotTypeSetting
}

type CompositeSlotTypeSetting = {
  SubSlots?: SubSlotTypeComposition[]
}

type SubSlotTypeComposition = {
  Name: StringProperty
  SlotTypeId: SlotTypeId
}

type SubSlotSetting = {
  Expression?: StringProperty
  SlotSpecifications?: Record<string, any>
}

type Specifications = {
  SlotTypeId: SlotTypeId
  ValueElicitationSetting: SubSlotValueElicitationSetting
}

type SlotTypeId = StringProperty

type SubSlotValueElicitationSetting = {
  PromptSpecification?: PromptSpecification
  DefaultValueSpecification?: SlotDefaultValueSpecification
  SampleUtterances?: SampleUtterancesList
  WaitAndContinueSpecification?: WaitAndContinueSpecification
}

type SlotType = {
  Name: Name
  Description?: Description
  ParentSlotTypeSignature?: ParentSlotTypeSignature
  SlotTypeValues?: SlotTypeValues
  ValueSelectionSetting?: SlotValueSelectionSetting
  ExternalSourceSetting?: ExternalSourceSetting
  CompositeSlotTypeSetting?: CompositeSlotTypeSetting
}

type CustomVocabularyItem = {
  Phrase: StringProperty
  Weight?: number
  DisplayAs?: StringProperty
}

type CustomVocabularyItems = CustomVocabularyItem[]

type CustomVocabulary = {
  CustomVocabularyItems: CustomVocabularyItems
}

type SlotDefaultValue = {
  DefaultValue: StringProperty
}

type SlotDefaultValueSpecification = {
  DefaultValueList: SlotDefaultValue[]
}

type SlotConstraint = (string | "Required" | "Optional")

type WaitAndContinueSpecification = {
  WaitingResponse: ResponseSpecification
  ContinueResponse: ResponseSpecification
  StillWaitingResponse?: StillWaitingResponseSpecification
  IsActive?: boolean
}

type SlotValueElicitationSetting = {
  DefaultValueSpecification?: SlotDefaultValueSpecification
  SlotConstraint: SlotConstraint
  PromptSpecification?: PromptSpecification
  SampleUtterances?: SampleUtterancesList
  WaitAndContinueSpecification?: WaitAndContinueSpecification
  SlotCaptureSetting?: SlotCaptureSetting
}

type ObfuscationSetting = {
  ObfuscationSettingType: (string | "None" | "DefaultObfuscation")
}

type MultipleValuesSetting = {
  AllowMultipleValues?: boolean
}

type Slot = {
  Name: Name
  Description?: Description
  SlotTypeName: SlotTypeName
  ValueElicitationSetting: SlotValueElicitationSetting
  ObfuscationSetting?: ObfuscationSetting
  MultipleValuesSetting?: MultipleValuesSetting
  SubSlotSetting?: SubSlotSetting
}

type BotLocale = {
  LocaleId: LocaleId
  Description?: Description
  VoiceSettings?: VoiceSettings
  GenerativeAISettings?: GenerativeAISettings
  NluConfidenceThreshold: ConfidenceThreshold
  Intents?: Intent[]
  SlotTypes?: SlotType[]
  CustomVocabulary?: CustomVocabulary
}

type S3Location = {
  S3Bucket: S3BucketName
  S3ObjectKey: S3ObjectKey
  S3ObjectVersion?: StringProperty
}

type Condition = {
  ExpressionString: ConditionExpression
}

type Conditional = {
  IsActive: boolean
  ConditionalBranches: ConditionalBranches
}

type ConditionalSpecification = {
  IsActive: boolean
  ConditionalBranches: ConditionalBranches
  DefaultBranch: DefaultConditionalBranch
}

type DefaultConditionalBranch = {
  NextStep?: DialogState
  Response?: ResponseSpecification
}

type ConditionalBranch = {
  Name: Name
  Condition: Condition
  NextStep: DialogState
  Response?: ResponseSpecification
}

type ConditionalBranches = ConditionalBranch[]

type InitialResponseSetting = {
  InitialResponse?: ResponseSpecification
  NextStep?: DialogState
  Conditional?: ConditionalSpecification
  CodeHook?: DialogCodeHookInvocationSetting
}

type ConditionExpression = StringProperty

type DialogCodeHookInvocationSetting = {
  EnableCodeHookInvocation: boolean
  IsActive: boolean
  InvocationLabel?: Name
  PostCodeHookSpecification: PostDialogCodeHookInvocationSpecification
}

type ElicitationCodeHookInvocationSetting = {
  EnableCodeHookInvocation: boolean
  InvocationLabel?: Name
}

type PostDialogCodeHookInvocationSpecification = {
  SuccessResponse?: ResponseSpecification
  SuccessNextStep?: DialogState
  SuccessConditional?: ConditionalSpecification
  FailureResponse?: ResponseSpecification
  FailureNextStep?: DialogState
  FailureConditional?: ConditionalSpecification
  TimeoutResponse?: ResponseSpecification
  TimeoutNextStep?: DialogState
  TimeoutConditional?: ConditionalSpecification
}

type DialogState = {
  DialogAction?: DialogAction
  Intent?: IntentOverride
  SessionAttributes?: SessionAttribute[]
}

type DialogAction = {
  Type: DialogActionType
  SlotToElicit?: Name
  SuppressNextMessage?: boolean
}

type DialogActionType = (string | "CloseIntent" | "ConfirmIntent" | "ElicitIntent" | "ElicitSlot" | "StartIntent" | "FulfillIntent" | "EndConversation" | "EvaluateConditional" | "InvokeDialogCodeHook")

type SessionAttribute = {
  Key: StringProperty
  Value?: StringProperty
}

type IntentOverride = {
  Name?: Name
  Slots?: SlotValueOverrideMap[]
}

type SlotValueOverrideMap = {
  SlotName?: Name
  SlotValueOverride?: SlotValueOverride
}

type SlotValueOverride = {
  Shape?: SlotShape
  Value?: SlotValue
  Values?: SlotValues
}

type SlotValue = {
  InterpretedValue?: StringProperty
}

type SlotValues = SlotValueOverride[]

type SlotShape = (string | "Scalar" | "List")

type SlotCaptureSetting = {
  CaptureResponse?: ResponseSpecification
  CaptureNextStep?: DialogState
  CaptureConditional?: ConditionalSpecification
  FailureResponse?: ResponseSpecification
  FailureNextStep?: DialogState
  FailureConditional?: ConditionalSpecification
  CodeHook?: DialogCodeHookInvocationSetting
  ElicitationCodeHook?: ElicitationCodeHookInvocationSetting
}


type Properties = {
  Id?: Id
  Arn?: BotArn
  Name: Name
  Description?: Description
  RoleArn: RoleArn
  DataPrivacy: {
    ChildDirected: boolean
  }
  ErrorLogSettings?: {
    Enabled: boolean
  }
  IdleSessionTTLInSeconds: number
  BotLocales?: BotLocale[]
  BotFileS3Location?: S3Location
  BotTags?: Tag[]
  TestBotAliasTags?: Tag[]
  AutoBuildBotLocales?: boolean
  TestBotAliasSettings?: TestBotAliasSettings
  Replication?: Replication
}

export const AWSLexBot = ({
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
      Type: 'AWS::Lex::Bot',
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