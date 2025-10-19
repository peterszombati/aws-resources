import {StringProperty} from "../StringProperty"


type Properties = {
  ResourceArn: StringProperty
  LogDestinationConfigs: StringProperty[]
  RedactedFields?: {
    Method?: Record<string, any>
    QueryString?: Record<string, any>
    SingleHeader?: {
      Name: StringProperty
    }
    UriPath?: Record<string, any>
  }[]
  ManagedByFirewallManager?: boolean
  LoggingFilter?: {
    DefaultBehavior: (string | "KEEP" | "DROP")
    Filters: {
      Behavior: (string | "KEEP" | "DROP")
      Conditions: {
        ActionCondition?: {
          Action: (string | "ALLOW" | "BLOCK" | "COUNT" | "CAPTCHA" | "CHALLENGE" | "EXCLUDED_AS_COUNT")
        }
        LabelNameCondition?: {
          LabelName: StringProperty
        }
      }[]
      Requirement: (string | "MEETS_ALL" | "MEETS_ANY")
    }[]
  }
}

export const AWSWAFv2LoggingConfiguration = ({
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
      Type: 'AWS::WAFv2::LoggingConfiguration',
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