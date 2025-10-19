import {StringProperty} from "../StringProperty"


type Properties = {
  OrganizationCustomRuleMetadata?: {
    TagKeyScope?: StringProperty
    TagValueScope?: StringProperty
    Description?: StringProperty
    ResourceIdScope?: StringProperty
    LambdaFunctionArn: StringProperty
    OrganizationConfigRuleTriggerTypes: StringProperty[]
    ResourceTypesScope?: StringProperty[]
    MaximumExecutionFrequency?: StringProperty
    InputParameters?: StringProperty
  }
  OrganizationManagedRuleMetadata?: {
    TagKeyScope?: StringProperty
    TagValueScope?: StringProperty
    Description?: StringProperty
    ResourceIdScope?: StringProperty
    RuleIdentifier: StringProperty
    ResourceTypesScope?: StringProperty[]
    MaximumExecutionFrequency?: StringProperty
    InputParameters?: StringProperty
  }
  ExcludedAccounts?: StringProperty[]
  OrganizationConfigRuleName: StringProperty
  Id?: StringProperty
  OrganizationCustomPolicyRuleMetadata?: {
    TagKeyScope?: StringProperty
    TagValueScope?: StringProperty
    Runtime: StringProperty
    PolicyText: StringProperty
    Description?: StringProperty
    ResourceIdScope?: StringProperty
    OrganizationConfigRuleTriggerTypes?: StringProperty[]
    DebugLogDeliveryAccounts?: StringProperty[]
    ResourceTypesScope?: StringProperty[]
    MaximumExecutionFrequency?: StringProperty
    InputParameters?: StringProperty
  }
}

export const AWSConfigOrganizationConfigRule = ({
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
      Type: 'AWS::Config::OrganizationConfigRule',
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