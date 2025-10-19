import {StringProperty} from "../StringProperty"

type AndStatement = {
  Statements: Statement[]
}

type ByteMatchStatement = {
  SearchString?: SearchString
  SearchStringBase64?: SearchStringBase64
  FieldToMatch: FieldToMatch
  TextTransformations: TextTransformation[]
  PositionalConstraint: PositionalConstraint
}

type EntityDescription = StringProperty

type EntityName = StringProperty

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

type NotStatement = {
  Statement: Statement
}

type OrStatement = {
  Statements: Statement[]
}

type PositionalConstraint = (string | "EXACTLY" | "STARTS_WITH" | "ENDS_WITH" | "CONTAINS" | "CONTAINS_WORD")

type RateBasedStatement = {
  Limit: RateLimit
  EvaluationWindowSec?: EvaluationWindowSec
  AggregateKeyType: (string | "IP" | "FORWARDED_IP" | "CONSTANT" | "CUSTOM_KEYS")
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
  RuleLabels?: Label[]
  VisibilityConfig: VisibilityConfig
  CaptchaConfig?: CaptchaConfig
  ChallengeConfig?: ChallengeConfig
}

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

type BlockAction = {
  CustomResponse?: CustomResponse
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

type RuleGroup = {
  Name?: EntityName
  Id?: EntityId
  Arn?: ResourceArn
  Description?: EntityDescription
  Rules?: Rule[]
  VisibilityConfig?: VisibilityConfig
  Capacity?: number
}

type RulePriority = number

type Scope = (string | "CLOUDFRONT" | "REGIONAL")

type SearchString = StringProperty

type SearchStringBase64 = StringProperty

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
  IPSetReferenceStatement?: IPSetReferenceStatement
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
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

type VisibilityConfig = {
  SampledRequestsEnabled: boolean
  CloudWatchMetricsEnabled: boolean
  MetricName: StringProperty
}

type XssMatchStatement = {
  FieldToMatch: FieldToMatch
  TextTransformations: TextTransformation[]
}

type LabelName = StringProperty

type LabelSummary = {
  Name?: LabelName
}

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

type Body = {
  OversizeHandling?: OversizeHandling
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


type Properties = {
  Arn?: ResourceArn
  Capacity: number
  Description?: EntityDescription
  Name?: EntityName
  Id?: EntityId
  Scope: Scope
  Rules?: Rule[]
  VisibilityConfig: VisibilityConfig
  Tags?: Tag[]
  LabelNamespace?: LabelName
  CustomResponseBodies?: CustomResponseBodies
  AvailableLabels?: LabelSummary[]
  ConsumedLabels?: LabelSummary[]
}

export const AWSWAFv2RuleGroup = ({
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
      Type: 'AWS::WAFv2::RuleGroup',
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