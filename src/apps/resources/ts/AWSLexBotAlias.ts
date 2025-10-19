import {StringProperty} from "../StringProperty"


type Properties = {
  BotAliasId?: StringProperty
  BotId: StringProperty
  Arn?: StringProperty
  BotAliasStatus?: (string | "Creating" | "Available" | "Deleting" | "Failed")
  BotAliasLocaleSettings?: {
    LocaleId: StringProperty
    BotAliasLocaleSetting: {
      CodeHookSpecification?: {
        LambdaCodeHook: {
          CodeHookInterfaceVersion: StringProperty
          LambdaArn: StringProperty
        }
      }
      Enabled: boolean
    }
  }[]
  BotAliasName: StringProperty
  BotVersion?: StringProperty
  ConversationLogSettings?: {
    AudioLogSettings?: {
      Destination: {
        S3Bucket: {
          S3BucketArn: StringProperty
          LogPrefix: StringProperty
          KmsKeyArn?: StringProperty
        }
      }
      Enabled: boolean
    }[]
    TextLogSettings?: {
      Destination: {
        CloudWatch: {
          CloudWatchLogGroupArn: StringProperty
          LogPrefix: StringProperty
        }
      }
      Enabled: boolean
    }[]
  }
  Description?: StringProperty
  SentimentAnalysisSettings?: {
    DetectSentiment: boolean
  }
  BotAliasTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSLexBotAlias = ({
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
      Type: 'AWS::Lex::BotAlias',
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