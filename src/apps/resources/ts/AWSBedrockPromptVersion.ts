import {StringProperty} from "../StringProperty"


type Properties = {
  PromptArn: StringProperty
  Arn?: StringProperty
  CreatedAt?: StringProperty
  PromptId?: StringProperty
  UpdatedAt?: StringProperty
  Version?: StringProperty
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
  DefaultVariant?: StringProperty
  Description?: StringProperty
  CustomerEncryptionKeyArn?: StringProperty
  Name?: StringProperty
  Tags?: Record<string, any>
}

export const AWSBedrockPromptVersion = ({
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
      Type: 'AWS::Bedrock::PromptVersion',
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