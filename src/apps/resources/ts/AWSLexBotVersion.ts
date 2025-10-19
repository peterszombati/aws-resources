import {StringProperty} from "../StringProperty"


type Properties = {
  BotId: StringProperty
  BotVersion?: StringProperty
  Description?: StringProperty
  BotVersionLocaleSpecification: {
    LocaleId: StringProperty
    BotVersionLocaleDetails: {
      SourceBotVersion: StringProperty
    }
  }[]
}

export const AWSLexBotVersion = ({
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
      Type: 'AWS::Lex::BotVersion',
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