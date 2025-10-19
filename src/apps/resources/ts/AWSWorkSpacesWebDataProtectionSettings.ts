import {StringProperty} from "../StringProperty"


type Properties = {
  AdditionalEncryptionContext?: Record<string, any>
  AssociatedPortalArns?: StringProperty[]
  CreationDate?: StringProperty
  CustomerManagedKey?: StringProperty
  DataProtectionSettingsArn?: StringProperty
  Description?: StringProperty
  DisplayName?: StringProperty
  InlineRedactionConfiguration?: {
    InlineRedactionPatterns: {
      BuiltInPatternId?: StringProperty
      CustomPattern?: {
        PatternName: StringProperty
        PatternRegex: StringProperty
        PatternDescription?: StringProperty
        KeywordRegex?: StringProperty
      }
      RedactionPlaceHolder: {
        RedactionPlaceHolderType: (string | "CustomText")
        RedactionPlaceHolderText?: StringProperty
      }
      EnforcedUrls?: StringProperty[]
      ExemptUrls?: StringProperty[]
      ConfidenceLevel?: number
    }[]
    GlobalEnforcedUrls?: StringProperty[]
    GlobalExemptUrls?: StringProperty[]
    GlobalConfidenceLevel?: number
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWorkSpacesWebDataProtectionSettings = ({
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
      Type: 'AWS::WorkSpacesWeb::DataProtectionSettings',
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