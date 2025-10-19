import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  GuardrailArn?: StringProperty
  GuardrailId?: StringProperty
  GuardrailIdentifier: StringProperty
  Version?: StringProperty
}

export const AWSBedrockGuardrailVersion = ({
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
      Type: 'AWS::Bedrock::GuardrailVersion',
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