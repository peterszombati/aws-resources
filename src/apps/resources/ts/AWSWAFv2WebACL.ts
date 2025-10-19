import {StringProperty} from "../StringProperty"

type AndStatement = {
  Statements: Statement[]
}

type Body = {
  OversizeHandling?: OversizeHandling
}

type ByteMatchStatement = {
  SearchString?: SearchString
  SearchStringBase64?: SearchStringBase64
  FieldToMatch: FieldToMatch
  TextTransformations: TextTransformation[]
  PositionalConstraint: PositionalConstraint
}

type DefaultAction = {
  Allow?: AllowAction
  Block?: BlockAction
}

type EntityDescription = StringProperty

type EntityName = StringProperty

type ExcludedRule = {
  Name: EntityName
}

type RuleActionOverride = {
  Name: EntityName
  ActionToUse: RuleAction
}

type ExcludedRules = ExcludedRule[]

type FieldToMatch = {
  SingleHeader?: {
    Name: StringProperty
  }
  SingleQueryArgument?: {
    Name: StringProperty
  }
  AllQueryArguments?: Record<string, any>
  UriPath?: Record<string, any>
  QueryString?: Record<string, any>
  Body?: Body
  Method?: Record<string, any>
  JsonBody?: JsonBody
  Headers?: Headers
  Cookies?: Cookies
  JA3Fingerprint?: JA3Fingerprint
  JA4Fingerprint?: JA4Fingerprint
  UriFragment?: UriFragment
}

type JsonBody = {
  MatchPattern: JsonMatchPattern
  MatchScope: JsonMatchScope
  InvalidFallbackBehavior?: BodyParsingFallbackBehavior
  OversizeHandling?: OversizeHandling
}

type BodyParsingFallbackBehavior = (string | "MATCH" | "NO_MATCH" | "EVALUATE_AS_STRING")

type JsonMatchScope = (string | "ALL" | "KEY" | "VALUE")

type JsonMatchPattern = {
  All?: Record<string, any>
  IncludedPaths?: JsonPointerPath[]
}

type JsonPointerPath = StringProperty

type GeoMatchStatement = {
  CountryCodes?: StringProperty[]
  ForwardedIPConfig?: ForwardedIPConfiguration
}

type EntityId = StringProperty

type IPSetReferenceStatement = {
  Arn: ResourceArn
  IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration
}

type ManagedRuleGroupStatement = {
  Name: EntityName
  VendorName: StringProperty
  Version?: StringProperty
  ExcludedRules?: ExcludedRule[]
  ScopeDownStatement?: Statement
  ManagedRuleGroupConfigs?: ManagedRuleGroupConfig[]
  RuleActionOverrides?: RuleActionOverride[]
}

type NotStatement = {
  Statement: Statement
}

type OrStatement = {
  Statements: Statement[]
}

type OverrideAction = {
  Count?: Record<string, any>
  None?: Record<string, any>
}

type PositionalConstraint = (string | "EXACTLY" | "STARTS_WITH" | "ENDS_WITH" | "CONTAINS" | "CONTAINS_WORD")

type QueryString = Record<string, any>

type RateBasedStatement = {
  Limit: RateLimit
  EvaluationWindowSec?: EvaluationWindowSec
  AggregateKeyType: (string | "CONSTANT" | "IP" | "FORWARDED_IP" | "CUSTOM_KEYS")
  CustomKeys?: RateBasedStatementCustomKey[]
  ScopeDownStatement?: Statement
  ForwardedIPConfig?: ForwardedIPConfiguration
}

type RateBasedStatementCustomKey = {
  Cookie?: RateLimitCookie
  ForwardedIP?: RateLimitForwardedIP
  Header?: RateLimitHeader
  HTTPMethod?: RateLimitHTTPMethod
  IP?: RateLimitIP
  LabelNamespace?: RateLimitLabelNamespace
  QueryArgument?: RateLimitQueryArgument
  QueryString?: RateLimitQueryString
  UriPath?: RateLimitUriPath
  JA3Fingerprint?: RateLimitJA3Fingerprint
  JA4Fingerprint?: RateLimitJA4Fingerprint
  ASN?: RateLimitAsn
}

type RateLimitCookie = {
  Name: StringProperty
  TextTransformations: TextTransformation[]
}

type RateLimitForwardedIP = Record<string, any>

type RateLimitHeader = {
  Name: StringProperty
  TextTransformations: TextTransformation[]
}

type RateLimitHTTPMethod = Record<string, any>

type RateLimitIP = Record<string, any>

type RateLimitLabelNamespace = {
  Namespace: StringProperty
}

type RateLimitQueryArgument = {
  Name: StringProperty
  TextTransformations: TextTransformation[]
}

type RateLimitQueryString = {
  TextTransformations: TextTransformation[]
}

type RateLimitUriPath = {
  TextTransformations: TextTransformation[]
}

type RateLimitJA3Fingerprint = {
  FallbackBehavior: (string | "MATCH" | "NO_MATCH")
}

type RateLimitJA4Fingerprint = {
  FallbackBehavior: (string | "MATCH" | "NO_MATCH")
}

type RateLimitAsn = Record<string, any>

type RateLimit = number

type EvaluationWindowSec = number

type RegexPatternSetReferenceStatement = {
  Arn: ResourceArn
  FieldToMatch: FieldToMatch
  TextTransformations: TextTransformation[]
}

type ResourceArn = StringProperty

type ForwardedIPConfiguration = {
  HeaderName: StringProperty
  FallbackBehavior: (string | "MATCH" | "NO_MATCH")
}

type IPSetForwardedIPConfiguration = {
  HeaderName: StringProperty
  FallbackBehavior: (string | "MATCH" | "NO_MATCH")
  Position: (string | "FIRST" | "LAST" | "ANY")
}

type Rule = {
  Name: EntityName
  Priority: RulePriority
  Statement: Statement
  Action?: RuleAction
  OverrideAction?: OverrideAction
  RuleLabels?: Label[]
  VisibilityConfig: VisibilityConfig
  CaptchaConfig?: CaptchaConfig
  ChallengeConfig?: ChallengeConfig
}

type Rules = Rule[]

type RuleAction = {
  Allow?: AllowAction
  Block?: BlockAction
  Count?: CountAction
  Captcha?: CaptchaAction
  Challenge?: ChallengeAction
}

type AllowAction = {
  CustomRequestHandling?: CustomRequestHandling
}

type CountAction = {
  CustomRequestHandling?: CustomRequestHandling
}

type CaptchaAction = {
  CustomRequestHandling?: CustomRequestHandling
}

type ChallengeAction = {
  CustomRequestHandling?: CustomRequestHandling
}

type BlockAction = {
  CustomResponse?: CustomResponse
}

type CustomHTTPHeaderName = StringProperty

type CustomHTTPHeaderValue = StringProperty

type CustomHTTPHeader = {
  Name: CustomHTTPHeaderName
  Value: CustomHTTPHeaderValue
}

type CustomRequestHandling = {
  InsertHeaders: CustomHTTPHeader[]
}

type ResponseStatusCode = number

type ResponseContentType = (string | "TEXT_PLAIN" | "TEXT_HTML" | "APPLICATION_JSON")

type ResponseContent = StringProperty

type CustomResponseBody = {
  ContentType: ResponseContentType
  Content: ResponseContent
}

type CustomResponse = {
  ResponseCode: ResponseStatusCode
  CustomResponseBodyKey?: StringProperty
  ResponseHeaders?: CustomHTTPHeader[]
}

type CustomResponseBodies = Record<string, any>

type RuleGroupReferenceStatement = {
  Arn: ResourceArn
  ExcludedRules?: ExcludedRule[]
  RuleActionOverrides?: RuleActionOverride[]
}

type RulePriority = number

type Scope = (string | "CLOUDFRONT" | "REGIONAL")

type SearchString = StringProperty

type SearchStringBase64 = StringProperty

type SingleHeader = {
  Name?: StringProperty
}

type SingleQueryArgument = {
  Name?: StringProperty
}

type SizeConstraintStatement = {
  FieldToMatch: FieldToMatch
  ComparisonOperator: (string | "EQ" | "NE" | "LE" | "LT" | "GE" | "GT")
  Size: number
  TextTransformations: TextTransformation[]
}

type SqliMatchStatement = {
  FieldToMatch: FieldToMatch
  TextTransformations: TextTransformation[]
  SensitivityLevel?: SensitivityLevel
}

type Statement = {
  ByteMatchStatement?: ByteMatchStatement
  SqliMatchStatement?: SqliMatchStatement
  XssMatchStatement?: XssMatchStatement
  SizeConstraintStatement?: SizeConstraintStatement
  GeoMatchStatement?: GeoMatchStatement
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement
  IPSetReferenceStatement?: IPSetReferenceStatement
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement
  RateBasedStatement?: RateBasedStatement
  AndStatement?: AndStatement
  OrStatement?: OrStatement
  NotStatement?: NotStatement
  LabelMatchStatement?: LabelMatchStatement
  RegexMatchStatement?: RegexMatchStatement
  AsnMatchStatement?: AsnMatchStatement
}

type Tag = {
  Key?: StringProperty
  Value?: StringProperty
}

type TextTransformation = {
  Priority: TextTransformationPriority
  Type: TextTransformationType
}

type TextTransformationPriority = number

type TextTransformationType = (string | "NONE" | "COMPRESS_WHITE_SPACE" | "HTML_ENTITY_DECODE" | "LOWERCASE" | "CMD_LINE" | "URL_DECODE" | "BASE64_DECODE" | "HEX_DECODE" | "MD5" | "REPLACE_COMMENTS" | "ESCAPE_SEQ_DECODE" | "SQL_HEX_DECODE" | "CSS_DECODE" | "JS_DECODE" | "NORMALIZE_PATH" | "NORMALIZE_PATH_WIN" | "REMOVE_NULLS" | "REPLACE_NULLS" | "BASE64_DECODE_EXT" | "URL_DECODE_UNI" | "UTF8_TO_UNICODE")

type UriPath = Record<string, any>

type VisibilityConfig = {
  SampledRequestsEnabled: boolean
  CloudWatchMetricsEnabled: boolean
  MetricName: StringProperty
}

type DataProtectionConfig = {
  DataProtections: DataProtections
}

type DataProtections = DataProtect[]

type DataProtect = {
  Field: FieldToProtect
  Action: DataProtectionAction
  ExcludeRuleMatchDetails?: boolean
  ExcludeRateBasedDetails?: boolean
}

type DataProtectionAction = (string | "SUBSTITUTION" | "HASH")

type FieldToProtect = {
  FieldType: (string | "SINGLE_HEADER" | "SINGLE_COOKIE" | "SINGLE_QUERY_ARGUMENT" | "QUERY_STRING" | "BODY")
  FieldKeys?: FieldToProtectKeyName[]
}

type FieldToProtectKeyName = StringProperty

type XssMatchStatement = {
  FieldToMatch: FieldToMatch
  TextTransformations: TextTransformation[]
}

type LabelName = StringProperty

type Label = {
  Name: LabelName
}

type LabelMatchKey = StringProperty

type LabelMatchScope = (string | "LABEL" | "NAMESPACE")

type LabelMatchStatement = {
  Scope: LabelMatchScope
  Key: LabelMatchKey
}

type RegexMatchStatement = {
  RegexString: StringProperty
  FieldToMatch: FieldToMatch
  TextTransformations: TextTransformation[]
}

type AsnMatchStatement = {
  AsnList?: number[]
  ForwardedIPConfig?: ForwardedIPConfiguration
}

type CaptchaConfig = {
  ImmunityTimeProperty?: ImmunityTimeProperty
}

type ChallengeConfig = {
  ImmunityTimeProperty?: ImmunityTimeProperty
}

type ImmunityTimeProperty = {
  ImmunityTime: number
}

type ManagedRuleGroupConfig = {
  LoginPath?: StringProperty
  PayloadType?: (string | "JSON" | "FORM_ENCODED")
  UsernameField?: FieldIdentifier
  PasswordField?: FieldIdentifier
  AWSManagedRulesBotControlRuleSet?: AWSManagedRulesBotControlRuleSet
  AWSManagedRulesATPRuleSet?: AWSManagedRulesATPRuleSet
  AWSManagedRulesACFPRuleSet?: AWSManagedRulesACFPRuleSet
  AWSManagedRulesAntiDDoSRuleSet?: AWSManagedRulesAntiDDoSRuleSet
}

type AWSManagedRulesBotControlRuleSet = {
  InspectionLevel: (string | "COMMON" | "TARGETED")
  EnableMachineLearning?: boolean
}

type AWSManagedRulesATPRuleSet = {
  LoginPath: StringProperty
  EnableRegexInPath?: boolean
  RequestInspection?: RequestInspection
  ResponseInspection?: ResponseInspection
}

type AWSManagedRulesACFPRuleSet = {
  CreationPath: StringProperty
  RegistrationPagePath: StringProperty
  RequestInspection: RequestInspectionACFP
  ResponseInspection?: ResponseInspection
  EnableRegexInPath?: boolean
}

type AWSManagedRulesAntiDDoSRuleSet = {
  ClientSideActionConfig: ClientSideActionConfig
  SensitivityToBlock?: SensitivityToAct
}

type ClientSideActionConfig = {
  Challenge: ClientSideAction
}

type ClientSideAction = {
  UsageOfAction: UsageOfAction
  Sensitivity?: SensitivityToAct
  ExemptUriRegularExpressions?: RegularExpressionList
}

type UsageOfAction = (string | "ENABLED" | "DISABLED")

type SensitivityToAct = (string | "LOW" | "MEDIUM" | "HIGH")

type RegularExpressionList = Regex[]

type Regex = {
  RegexString?: RegexPatternString
}

type RegexPatternString = StringProperty

type RequestInspection = {
  PayloadType: (string | "JSON" | "FORM_ENCODED")
  UsernameField: FieldIdentifier
  PasswordField: FieldIdentifier
}

type RequestInspectionACFP = {
  PayloadType: (string | "JSON" | "FORM_ENCODED")
  UsernameField?: FieldIdentifier
  PasswordField?: FieldIdentifier
  EmailField?: FieldIdentifier
  PhoneNumberFields?: PhoneNumberField[]
  AddressFields?: AddressField[]
}

type ResponseInspection = {
  StatusCode?: ResponseInspectionStatusCode
  Header?: ResponseInspectionHeader
  BodyContains?: ResponseInspectionBodyContains
  Json?: ResponseInspectionJson
}

type ResponseInspectionStatusCode = {
  SuccessCodes: number[]
  FailureCodes: number[]
}

type ResponseInspectionHeader = {
  Name: StringProperty
  SuccessValues: StringProperty[]
  FailureValues: StringProperty[]
}

type ResponseInspectionBodyContains = {
  SuccessStrings: StringProperty[]
  FailureStrings: StringProperty[]
}

type ResponseInspectionJson = {
  Identifier: StringProperty
  SuccessValues: StringProperty[]
  FailureValues: StringProperty[]
}

type TokenDomains = StringProperty[]

type AssociationConfig = {
  RequestBody?: RequestBody
}

type RequestBody = Record<string, any>

type RequestBodyAssociatedResourceTypeConfig = {
  DefaultSizeInspectionLimit: SizeInspectionLimit
}

type SizeInspectionLimit = (string | "KB_16" | "KB_32" | "KB_48" | "KB_64")

type PhoneNumberField = FieldIdentifier

type AddressField = FieldIdentifier

type FieldIdentifier = {
  Identifier: StringProperty
}

type Headers = {
  MatchPattern: HeaderMatchPattern
  MatchScope: MapMatchScope
  OversizeHandling: OversizeHandling
}

type Cookies = {
  MatchPattern: CookieMatchPattern
  MatchScope: MapMatchScope
  OversizeHandling: OversizeHandling
}

type HeaderMatchPattern = {
  All?: Record<string, any>
  IncludedHeaders?: StringProperty[]
  ExcludedHeaders?: StringProperty[]
}

type CookieMatchPattern = {
  All?: Record<string, any>
  IncludedCookies?: StringProperty[]
  ExcludedCookies?: StringProperty[]
}

type MapMatchScope = (string | "ALL" | "KEY" | "VALUE")

type OversizeHandling = (string | "CONTINUE" | "MATCH" | "NO_MATCH")

type SensitivityLevel = (string | "LOW" | "HIGH")

type JA3Fingerprint = {
  FallbackBehavior: (string | "MATCH" | "NO_MATCH")
}

type JA4Fingerprint = {
  FallbackBehavior: (string | "MATCH" | "NO_MATCH")
}

type UriFragment = {
  FallbackBehavior?: (string | "MATCH" | "NO_MATCH")
}

type OnSourceDDoSProtectionConfig = {
  ALBLowReputationMode: (string | "ACTIVE_UNDER_DDOS" | "ALWAYS_ON")
}


type Properties = {
  Arn?: ResourceArn
  Capacity?: number
  DefaultAction: DefaultAction
  Description?: EntityDescription
  Name?: EntityName
  Id?: EntityId
  Scope: Scope
  Rules?: Rule[]
  VisibilityConfig: VisibilityConfig
  DataProtectionConfig?: DataProtectionConfig
  Tags?: Tag[]
  LabelNamespace?: LabelName
  CustomResponseBodies?: CustomResponseBodies
  CaptchaConfig?: CaptchaConfig
  ChallengeConfig?: ChallengeConfig
  TokenDomains?: TokenDomains
  AssociationConfig?: AssociationConfig
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig
}

export const AWSWAFv2WebACL = ({
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
      Type: 'AWS::WAFv2::WebACL',
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