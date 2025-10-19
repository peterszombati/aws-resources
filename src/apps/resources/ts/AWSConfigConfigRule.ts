import {StringProperty} from "../StringProperty"


type Properties = {
  ConfigRuleId?: StringProperty
  Description?: StringProperty
  Scope?: {
    TagKey?: StringProperty
    ComplianceResourceTypes?: StringProperty[]
    TagValue?: StringProperty
    ComplianceResourceId?: StringProperty
  }
  ConfigRuleName?: StringProperty
  Arn?: StringProperty
  Compliance?: {
    Type?: StringProperty
  }
  MaximumExecutionFrequency?: StringProperty
  Source: {
    CustomPolicyDetails?: {
      EnableDebugLogDelivery?: boolean
      PolicyText?: StringProperty
      PolicyRuntime?: StringProperty
    }
    SourceIdentifier?: StringProperty
    Owner: StringProperty
    SourceDetails?: {
      EventSource: StringProperty
      MaximumExecutionFrequency?: StringProperty
      MessageType: StringProperty
    }[]
  }
  InputParameters?: StringProperty | Record<string, any>
  EvaluationModes?: {
    Mode?: StringProperty
  }[]
}

export const AWSConfigConfigRule = ({
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
      Type: 'AWS::Config::ConfigRule',
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