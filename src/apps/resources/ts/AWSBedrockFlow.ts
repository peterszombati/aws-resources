import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreatedAt?: StringProperty
  Definition?: {
    Nodes?: {
      Name: StringProperty
      Type: (string | "Input" | "Output" | "KnowledgeBase" | "Condition" | "Lex" | "Prompt" | "LambdaFunction" | "Agent" | "Storage" | "Retrieval" | "Iterator" | "Collector" | "InlineCode" | "Loop" | "LoopInput" | "LoopController")
      Configuration?: any
      Inputs?: {
        Name: StringProperty
        Type: (string | "String" | "Number" | "Boolean" | "Object" | "Array")
        Expression: StringProperty
        Category?: (string | "LoopCondition" | "ReturnValueToLoopStart" | "ExitLoop")
      }[]
      Outputs?: {
        Name: StringProperty
        Type: (string | "String" | "Number" | "Boolean" | "Object" | "Array")
      }[]
    }[]
    Connections?: {
      Type: (string | "Data" | "Conditional")
      Name: StringProperty
      Source: StringProperty
      Target: StringProperty
      Configuration?: any
    }[]
  }
  DefinitionString?: StringProperty
  DefinitionS3Location?: {
    Bucket: StringProperty
    Key: StringProperty
    Version?: StringProperty
  }
  DefinitionSubstitutions?: Record<string, any>
  Description?: StringProperty
  ExecutionRoleArn: StringProperty
  Id?: StringProperty
  Name: StringProperty
  Status?: (string | "Failed" | "Prepared" | "Preparing" | "NotPrepared")
  UpdatedAt?: StringProperty
  CustomerEncryptionKeyArn?: StringProperty
  Validations?: {
    Message: StringProperty
  }[]
  Version?: StringProperty
  Tags?: Record<string, any>
  TestAliasTags?: Record<string, any>
}

export const AWSBedrockFlow = ({
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
      Type: 'AWS::Bedrock::Flow',
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