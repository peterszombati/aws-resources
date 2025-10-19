import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreatedAt?: StringProperty
  DefaultVariant?: StringProperty
  Description?: StringProperty
  Id?: StringProperty
  Name: StringProperty
  UpdatedAt?: StringProperty
  Variants?: {
    Name: StringProperty
    TemplateType: (string | "TEXT" | "CHAT")
    TemplateConfiguration: any
    ModelId?: StringProperty
    InferenceConfiguration?: any
    GenAiResource?: any
    AdditionalModelRequestFields?: Record<string, any>
    Metadata?: {
      Key: StringProperty
      Value: StringProperty
    }[]
  }[]
  Tags?: Record<string, any>
  CustomerEncryptionKeyArn?: StringProperty
  Version?: StringProperty
}

export const AWSBedrockPrompt = ({
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
      Type: 'AWS::Bedrock::Prompt',
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