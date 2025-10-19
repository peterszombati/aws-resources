import {StringProperty} from "../StringProperty"


type Properties = {
  LogGroupIdentifier: StringProperty
  TransformerConfig: {
    ParseCloudfront?: {
      Source?: StringProperty
    }
    ParseVPC?: {
      Source?: StringProperty
    }
    ParseWAF?: {
      Source?: StringProperty
    }
    ParseJSON?: {
      Source?: StringProperty
      Destination?: StringProperty
    }
    ParseRoute53?: {
      Source?: StringProperty
    }
    ParsePostgres?: {
      Source?: StringProperty
    }
    ParseToOCSF?: {
      Source?: StringProperty
      EventSource: (string | "CloudTrail" | "Route53Resolver" | "VPCFlow" | "EKSAudit" | "AWSWAF")
      OcsfVersion: (string | "V1.1")
    }
    ParseKeyValue?: {
      Source?: StringProperty
      Destination?: StringProperty
      FieldDelimiter?: StringProperty
      KeyValueDelimiter?: StringProperty
      KeyPrefix?: StringProperty
      NonMatchValue?: StringProperty
      OverwriteIfExists?: boolean
    }
    CopyValue?: {
      Entries: {
        Source: StringProperty
        Target: StringProperty
        OverwriteIfExists?: boolean
      }[]
    }
    Csv?: {
      QuoteCharacter?: StringProperty
      Delimiter?: StringProperty
      Source?: StringProperty
      Columns?: StringProperty[]
    }
    DateTimeConverter?: {
      Source: StringProperty
      Target: StringProperty
      TargetFormat?: StringProperty
      MatchPatterns: StringProperty[]
      SourceTimezone?: StringProperty
      TargetTimezone?: StringProperty
      Locale?: StringProperty
    }
    DeleteKeys?: {
      WithKeys: StringProperty[]
    }
    Grok?: {
      Source?: StringProperty
      Match: StringProperty
    }
    ListToMap?: {
      Source: StringProperty
      Key: StringProperty
      ValueKey?: StringProperty
      Target?: StringProperty
      Flatten?: boolean
      FlattenedElement?: (string | "first" | "last")
    }
    AddKeys?: {
      Entries: {
        Key: StringProperty
        Value: StringProperty
        OverwriteIfExists?: boolean
      }[]
    }
    MoveKeys?: {
      Entries: {
        Source: StringProperty
        Target: StringProperty
        OverwriteIfExists?: boolean
      }[]
    }
    RenameKeys?: {
      Entries: {
        Key: StringProperty
        RenameTo: StringProperty
        OverwriteIfExists?: boolean
      }[]
    }
    LowerCaseString?: {
      WithKeys: StringProperty[]
    }
    SplitString?: {
      Entries: {
        Source: StringProperty
        Delimiter: StringProperty
      }[]
    }
    SubstituteString?: {
      Entries: {
        Source: StringProperty
        From: StringProperty
        To: StringProperty
      }[]
    }
    TrimString?: {
      WithKeys: StringProperty[]
    }
    UpperCaseString?: {
      WithKeys: StringProperty[]
    }
    TypeConverter?: {
      Entries: {
        Key: StringProperty
        Type: (string | "boolean" | "integer" | "double" | "string")
      }[]
    }
  }[]
}

export const AWSLogsTransformer = ({
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
      Type: 'AWS::Logs::Transformer',
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