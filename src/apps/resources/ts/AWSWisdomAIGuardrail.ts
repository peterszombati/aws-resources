import {StringProperty} from "../StringProperty"


type Properties = {
  AssistantId: StringProperty
  AssistantArn?: StringProperty
  AIGuardrailArn?: StringProperty
  AIGuardrailId?: StringProperty
  Name?: StringProperty
  BlockedInputMessaging: StringProperty
  BlockedOutputsMessaging: StringProperty
  Description?: StringProperty
  TopicPolicyConfig?: {
    TopicsConfig: {
      Name: StringProperty
      Definition: StringProperty
      Examples?: StringProperty[]
      Type: (string | "DENY")
    }[]
  }
  ContentPolicyConfig?: {
    FiltersConfig: {
      Type: (string | "SEXUAL" | "VIOLENCE" | "HATE" | "INSULTS" | "MISCONDUCT" | "PROMPT_ATTACK")
      InputStrength: (string | "NONE" | "LOW" | "MEDIUM" | "HIGH")
      OutputStrength: (string | "NONE" | "LOW" | "MEDIUM" | "HIGH")
    }[]
  }
  WordPolicyConfig?: {
    WordsConfig?: {
      Text: StringProperty
    }[]
    ManagedWordListsConfig?: {
      Type: (string | "PROFANITY")
    }[]
  }
  SensitiveInformationPolicyConfig?: {
    PiiEntitiesConfig?: {
      Type: (string | "ADDRESS" | "AGE" | "AWS_ACCESS_KEY" | "AWS_SECRET_KEY" | "CA_HEALTH_NUMBER" | "CA_SOCIAL_INSURANCE_NUMBER" | "CREDIT_DEBIT_CARD_CVV" | "CREDIT_DEBIT_CARD_EXPIRY" | "CREDIT_DEBIT_CARD_NUMBER" | "DRIVER_ID" | "EMAIL" | "INTERNATIONAL_BANK_ACCOUNT_NUMBER" | "IP_ADDRESS" | "LICENSE_PLATE" | "MAC_ADDRESS" | "NAME" | "PASSWORD" | "PHONE" | "PIN" | "SWIFT_CODE" | "UK_NATIONAL_HEALTH_SERVICE_NUMBER" | "UK_NATIONAL_INSURANCE_NUMBER" | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" | "URL" | "USERNAME" | "US_BANK_ACCOUNT_NUMBER" | "US_BANK_ROUTING_NUMBER" | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" | "US_PASSPORT_NUMBER" | "US_SOCIAL_SECURITY_NUMBER" | "VEHICLE_IDENTIFICATION_NUMBER")
      Action: (string | "BLOCK" | "ANONYMIZE")
    }[]
    RegexesConfig?: {
      Name: StringProperty
      Description?: StringProperty
      Pattern: StringProperty
      Action: (string | "BLOCK" | "ANONYMIZE")
    }[]
  }
  ContextualGroundingPolicyConfig?: {
    FiltersConfig: {
      Type: (string | "GROUNDING" | "RELEVANCE")
      Threshold: number
    }[]
  }
  Tags?: Record<string, any>
}

export const AWSWisdomAIGuardrail = ({
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
      Type: 'AWS::Wisdom::AIGuardrail',
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