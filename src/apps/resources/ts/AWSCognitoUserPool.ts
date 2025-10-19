import {StringProperty} from "../StringProperty"


type Properties = {
  UserPoolName?: StringProperty
  Policies?: {
    PasswordPolicy?: {
      MinimumLength?: number
      RequireLowercase?: boolean
      RequireNumbers?: boolean
      RequireSymbols?: boolean
      RequireUppercase?: boolean
      TemporaryPasswordValidityDays?: number
      PasswordHistorySize?: number
    }
    SignInPolicy?: {
      AllowedFirstAuthFactors?: StringProperty[]
    }
  }
  AccountRecoverySetting?: {
    RecoveryMechanisms?: {
      Name?: StringProperty
      Priority?: number
    }[]
  }
  AdminCreateUserConfig?: {
    AllowAdminCreateUserOnly?: boolean
    InviteMessageTemplate?: {
      EmailMessage?: StringProperty
      EmailSubject?: StringProperty
      SMSMessage?: StringProperty
    }
    UnusedAccountValidityDays?: number
  }
  AliasAttributes?: StringProperty[]
  UsernameAttributes?: StringProperty[]
  AutoVerifiedAttributes?: StringProperty[]
  DeviceConfiguration?: {
    ChallengeRequiredOnNewDevice?: boolean
    DeviceOnlyRememberedOnUserPrompt?: boolean
  }
  EmailConfiguration?: {
    ReplyToEmailAddress?: StringProperty
    SourceArn?: StringProperty
    From?: StringProperty
    ConfigurationSet?: StringProperty
    EmailSendingAccount?: StringProperty
  }
  EmailVerificationMessage?: StringProperty
  EmailVerificationSubject?: StringProperty
  DeletionProtection?: StringProperty
  LambdaConfig?: {
    CreateAuthChallenge?: StringProperty
    CustomMessage?: StringProperty
    DefineAuthChallenge?: StringProperty
    PostAuthentication?: StringProperty
    PostConfirmation?: StringProperty
    PreAuthentication?: StringProperty
    PreSignUp?: StringProperty
    VerifyAuthChallengeResponse?: StringProperty
    UserMigration?: StringProperty
    PreTokenGeneration?: StringProperty
    CustomEmailSender?: {
      LambdaVersion?: StringProperty
      LambdaArn?: StringProperty
    }
    CustomSMSSender?: {
      LambdaVersion?: StringProperty
      LambdaArn?: StringProperty
    }
    KMSKeyID?: StringProperty
    PreTokenGenerationConfig?: {
      LambdaVersion?: StringProperty
      LambdaArn?: StringProperty
    }
  }
  MfaConfiguration?: StringProperty
  EnabledMfas?: StringProperty[]
  SmsAuthenticationMessage?: StringProperty
  EmailAuthenticationMessage?: StringProperty
  EmailAuthenticationSubject?: StringProperty
  SmsConfiguration?: {
    ExternalId?: StringProperty
    SnsCallerArn?: StringProperty
    SnsRegion?: StringProperty
  }
  SmsVerificationMessage?: StringProperty
  WebAuthnRelyingPartyID?: StringProperty
  WebAuthnUserVerification?: StringProperty
  Schema?: {
    AttributeDataType?: StringProperty
    DeveloperOnlyAttribute?: boolean
    Mutable?: boolean
    Name?: StringProperty
    NumberAttributeConstraints?: {
      MaxValue?: StringProperty
      MinValue?: StringProperty
    }
    StringAttributeConstraints?: {
      MaxLength?: StringProperty
      MinLength?: StringProperty
    }
    Required?: boolean
  }[]
  UsernameConfiguration?: {
    CaseSensitive?: boolean
  }
  UserAttributeUpdateSettings?: {
    AttributesRequireVerificationBeforeUpdate: StringProperty[]
  }
  UserPoolTags?: Record<string, any>
  VerificationMessageTemplate?: {
    DefaultEmailOption?: StringProperty
    EmailMessage?: StringProperty
    EmailMessageByLink?: StringProperty
    EmailSubject?: StringProperty
    EmailSubjectByLink?: StringProperty
    SmsMessage?: StringProperty
  }
  UserPoolAddOns?: {
    AdvancedSecurityMode?: StringProperty
    AdvancedSecurityAdditionalFlows?: {
      CustomAuthMode?: StringProperty
    }
  }
  ProviderName?: StringProperty
  ProviderURL?: StringProperty
  Arn?: StringProperty
  UserPoolId?: StringProperty
  UserPoolTier?: (string | "LITE" | "ESSENTIALS" | "PLUS")
}

export const AWSCognitoUserPool = ({
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
      Type: 'AWS::Cognito::UserPool',
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