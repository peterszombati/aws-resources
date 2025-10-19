import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ProtectConfigurationId?: StringProperty
  CountryRuleSet?: {
    SMS?: {
      CountryCode: StringProperty
      ProtectStatus: (string | "ALLOW" | "BLOCK" | "MONITOR" | "FILTER")
    }[]
    VOICE?: {
      CountryCode: StringProperty
      ProtectStatus: (string | "ALLOW" | "BLOCK" | "MONITOR" | "FILTER")
    }[]
    MMS?: {
      CountryCode: StringProperty
      ProtectStatus: (string | "ALLOW" | "BLOCK" | "MONITOR" | "FILTER")
    }[]
  }
  DeletionProtectionEnabled?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSMSVOICEProtectConfiguration = ({
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
      Type: 'AWS::SMSVOICE::ProtectConfiguration',
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