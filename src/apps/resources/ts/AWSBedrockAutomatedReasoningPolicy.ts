import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  PolicyDefinition?: {
    Version?: StringProperty
    Types?: {
      Name: StringProperty
      Description?: StringProperty
      Values: {
        Value: StringProperty
        Description?: StringProperty
      }[]
    }[]
    Rules?: {
      Id: StringProperty
      Expression: StringProperty
      AlternateExpression?: StringProperty
    }[]
    Variables?: {
      Name: StringProperty
      Type: StringProperty
      Description: StringProperty
    }[]
  }
  PolicyArn?: StringProperty
  Version?: StringProperty
  DefinitionHash?: StringProperty
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  PolicyId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSBedrockAutomatedReasoningPolicy = ({
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
      Type: 'AWS::Bedrock::AutomatedReasoningPolicy',
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