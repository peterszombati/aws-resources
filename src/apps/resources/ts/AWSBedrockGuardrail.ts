import {StringProperty} from "../StringProperty"


type Properties = {
  BlockedInputMessaging: StringProperty
  BlockedOutputsMessaging: StringProperty
  AutomatedReasoningPolicyConfig?: {
    ConfidenceThreshold?: number
    Policies: StringProperty[]
  }
  ContentPolicyConfig?: {
    FiltersConfig: {
      Type: (string | "SEXUAL" | "VIOLENCE" | "HATE" | "INSULTS" | "MISCONDUCT" | "PROMPT_ATTACK")
      InputStrength: (string | "NONE" | "LOW" | "MEDIUM" | "HIGH")
      OutputStrength: (string | "NONE" | "LOW" | "MEDIUM" | "HIGH")
      InputModalities?: (string | "TEXT" | "IMAGE")[]
      OutputModalities?: (string | "TEXT" | "IMAGE")[]
      InputAction?: (string | "BLOCK" | "NONE")
      OutputAction?: (string | "BLOCK" | "NONE")
      InputEnabled?: boolean
      OutputEnabled?: boolean
    }[]
    ContentFiltersTierConfig?: {
      TierName: (string | "CLASSIC" | "STANDARD")
    }
  }
  ContextualGroundingPolicyConfig?: {
    FiltersConfig: {
      Type: (string | "GROUNDING" | "RELEVANCE")
      Threshold: number
      Action?: (string | "BLOCK" | "NONE")
      Enabled?: boolean
    }[]
  }
  CreatedAt?: StringProperty
  CrossRegionConfig?: {
    GuardrailProfileArn: StringProperty
  }
  Description?: StringProperty
  FailureRecommendations?: StringProperty[]
  GuardrailArn?: StringProperty
  GuardrailId?: StringProperty
  KmsKeyArn?: StringProperty
  Name: StringProperty
  SensitiveInformationPolicyConfig?: {
    PiiEntitiesConfig?: {
      Type: (string | "ADDRESS" | "AGE" | "AWS_ACCESS_KEY" | "AWS_SECRET_KEY" | "CA_HEALTH_NUMBER" | "CA_SOCIAL_INSURANCE_NUMBER" | "CREDIT_DEBIT_CARD_CVV" | "CREDIT_DEBIT_CARD_EXPIRY" | "CREDIT_DEBIT_CARD_NUMBER" | "DRIVER_ID" | "EMAIL" | "INTERNATIONAL_BANK_ACCOUNT_NUMBER" | "IP_ADDRESS" | "LICENSE_PLATE" | "MAC_ADDRESS" | "NAME" | "PASSWORD" | "PHONE" | "PIN" | "SWIFT_CODE" | "UK_NATIONAL_HEALTH_SERVICE_NUMBER" | "UK_NATIONAL_INSURANCE_NUMBER" | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" | "URL" | "USERNAME" | "US_BANK_ACCOUNT_NUMBER" | "US_BANK_ROUTING_NUMBER" | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" | "US_PASSPORT_NUMBER" | "US_SOCIAL_SECURITY_NUMBER" | "VEHICLE_IDENTIFICATION_NUMBER")
      Action: (string | "BLOCK" | "ANONYMIZE" | "NONE")
      InputAction?: (string | "BLOCK" | "ANONYMIZE" | "NONE")
      OutputAction?: (string | "BLOCK" | "ANONYMIZE" | "NONE")
      InputEnabled?: boolean
      OutputEnabled?: boolean
    }[]
    RegexesConfig?: {
      Name: StringProperty
      Description?: StringProperty
      Pattern: StringProperty
      Action: (string | "BLOCK" | "ANONYMIZE" | "NONE")
      InputAction?: (string | "BLOCK" | "ANONYMIZE" | "NONE")
      OutputAction?: (string | "BLOCK" | "ANONYMIZE" | "NONE")
      InputEnabled?: boolean
      OutputEnabled?: boolean
    }[]
  }
  Status?: (string | "CREATING" | "UPDATING" | "VERSIONING" | "READY" | "FAILED" | "DELETING")
  StatusReasons?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TopicPolicyConfig?: {
    TopicsConfig: {
      Name: StringProperty
      Definition: StringProperty
      Examples?: StringProperty[]
      Type: (string | "DENY")
      InputAction?: (string | "BLOCK" | "NONE")
      OutputAction?: (string | "BLOCK" | "NONE")
      InputEnabled?: boolean
      OutputEnabled?: boolean
    }[]
    TopicsTierConfig?: {
      TierName: (string | "CLASSIC" | "STANDARD")
    }
  }
  UpdatedAt?: StringProperty
  Version?: StringProperty
  WordPolicyConfig?: {
    WordsConfig?: {
      Text: StringProperty
      InputAction?: (string | "BLOCK" | "NONE")
      OutputAction?: (string | "BLOCK" | "NONE")
      InputEnabled?: boolean
      OutputEnabled?: boolean
    }[]
    ManagedWordListsConfig?: {
      Type: (string | "PROFANITY")
      InputAction?: (string | "BLOCK" | "NONE")
      OutputAction?: (string | "BLOCK" | "NONE")
      InputEnabled?: boolean
      OutputEnabled?: boolean
    }[]
  }
}

export const AWSBedrockGuardrail = ({
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
      Type: 'AWS::Bedrock::Guardrail',
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