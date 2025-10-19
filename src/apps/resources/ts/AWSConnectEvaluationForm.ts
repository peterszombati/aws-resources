import {StringProperty} from "../StringProperty"

type RefId = StringProperty

type Weight = number

type Score = number

type AutomaticFailConfiguration = {
  TargetSection?: StringProperty
}

type EvaluationFormBaseItem = {
  Section: EvaluationFormSection
}

type EvaluationFormItem = {
  Section?: EvaluationFormSection
  Question?: EvaluationFormQuestion
}

type EvaluationFormSection = {
  Title: StringProperty
  Instructions?: StringProperty
  RefId: RefId
  Items?: EvaluationFormItem[]
  Weight?: Weight
}

type EvaluationFormItemEnablementConfiguration = {
  Condition: EvaluationFormItemEnablementCondition
  Action: (string | "DISABLE" | "ENABLE")
  DefaultAction?: (string | "DISABLE" | "ENABLE")
}

type EvaluationFormItemEnablementCondition = {
  Operands: EvaluationFormItemEnablementConditionOperand[]
  Operator?: (string | "OR" | "AND")
}

type EvaluationFormItemEnablementConditionOperand = {
  Expression?: EvaluationFormItemEnablementExpression
}

type EvaluationFormItemEnablementExpression = {
  Source: EvaluationFormItemEnablementSource
  Values: EvaluationFormItemEnablementSourceValue[]
  Comparator: (string | "IN" | "NOT_IN")
}

type EvaluationFormItemEnablementSource = {
  Type: (string | "QUESTION_REF_ID")
  RefId?: RefId
}

type EvaluationFormItemEnablementSourceValue = {
  Type?: (string | "OPTION_REF_ID")
  RefId?: RefId
}

type EvaluationFormNumericQuestionOption = {
  MinValue: number
  MaxValue: number
  Score?: Score
  AutomaticFail?: boolean
  AutomaticFailConfiguration?: AutomaticFailConfiguration
}

type NumericQuestionPropertyValueAutomation = {
  Label: (string | "OVERALL_CUSTOMER_SENTIMENT_SCORE" | "OVERALL_AGENT_SENTIMENT_SCORE" | "NON_TALK_TIME" | "NON_TALK_TIME_PERCENTAGE" | "NUMBER_OF_INTERRUPTIONS" | "CONTACT_DURATION" | "AGENT_INTERACTION_DURATION" | "CUSTOMER_HOLD_TIME" | "LONGEST_HOLD_DURATION" | "NUMBER_OF_HOLDS" | "AGENT_INTERACTION_AND_HOLD_DURATION")
}

type EvaluationFormNumericQuestionAutomation = {
  PropertyValue?: NumericQuestionPropertyValueAutomation
  AnswerSource?: EvaluationFormQuestionAutomationAnswerSource
}

type EvaluationFormNumericQuestionProperties = {
  MinValue: number
  MaxValue: number
  Options?: EvaluationFormNumericQuestionOption[]
  Automation?: EvaluationFormNumericQuestionAutomation
}

type EvaluationFormSingleSelectQuestionAutomationOption = {
  RuleCategory: SingleSelectQuestionRuleCategoryAutomation
}

type SingleSelectQuestionRuleCategoryAutomation = {
  Category: StringProperty
  Condition: (string | "PRESENT" | "NOT_PRESENT")
  OptionRefId: RefId
}

type EvaluationFormSingleSelectQuestionAutomation = {
  Options: EvaluationFormSingleSelectQuestionAutomationOption[]
  DefaultOptionRefId?: RefId
  AnswerSource?: EvaluationFormQuestionAutomationAnswerSource
}

type EvaluationFormSingleSelectQuestionOption = {
  RefId: RefId
  Text: StringProperty
  Score?: Score
  AutomaticFail?: boolean
  AutomaticFailConfiguration?: AutomaticFailConfiguration
}

type EvaluationFormSingleSelectQuestionProperties = {
  Options: EvaluationFormSingleSelectQuestionOption[]
  DisplayAs?: (string | "DROPDOWN" | "RADIO")
  Automation?: EvaluationFormSingleSelectQuestionAutomation
}

type EvaluationFormQuestionAutomationAnswerSource = {
  SourceType: (string | "CONTACT_LENS_DATA" | "GEN_AI")
}

type EvaluationFormTextQuestionProperties = {
  Automation?: EvaluationFormTextQuestionAutomation
}

type EvaluationFormTextQuestionAutomation = {
  AnswerSource?: EvaluationFormQuestionAutomationAnswerSource
}

type EvaluationFormQuestionTypeProperties = {
  Numeric?: EvaluationFormNumericQuestionProperties
  SingleSelect?: EvaluationFormSingleSelectQuestionProperties
  Text?: EvaluationFormTextQuestionProperties
}

type EvaluationFormQuestion = {
  Title: StringProperty
  Instructions?: StringProperty
  RefId: RefId
  NotApplicableEnabled?: boolean
  QuestionType: (string | "NUMERIC" | "SINGLESELECT" | "TEXT")
  QuestionTypeProperties?: EvaluationFormQuestionTypeProperties
  Weight?: Weight
  Enablement?: EvaluationFormItemEnablementConfiguration
}

type ScoringStrategy = {
  Mode: (string | "QUESTION_ONLY" | "SECTION_ONLY")
  Status: (string | "ENABLED" | "DISABLED")
}

type AutoEvaluationConfiguration = {
  Enabled?: boolean
}

type Tag = {
  Key: StringProperty
  Value: StringProperty
}


type Properties = {
  Title: StringProperty
  Description?: StringProperty
  EvaluationFormArn?: StringProperty
  InstanceArn: StringProperty
  Items: EvaluationFormBaseItem[]
  ScoringStrategy?: ScoringStrategy
  AutoEvaluationConfiguration?: AutoEvaluationConfiguration
  Status: (string | "DRAFT" | "ACTIVE")
  Tags?: Tag[]
}

export const AWSConnectEvaluationForm = ({
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
      Type: 'AWS::Connect::EvaluationForm',
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