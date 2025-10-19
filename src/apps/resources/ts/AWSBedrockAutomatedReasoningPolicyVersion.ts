import {StringProperty} from "../StringProperty"


type Properties = {
  PolicyArn: StringProperty
  Name?: StringProperty
  Description?: StringProperty
  Version?: StringProperty
  DefinitionHash?: StringProperty
  LastUpdatedDefinitionHash?: StringProperty
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  PolicyId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSBedrockAutomatedReasoningPolicyVersion = ({
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
      Type: 'AWS::Bedrock::AutomatedReasoningPolicyVersion',
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