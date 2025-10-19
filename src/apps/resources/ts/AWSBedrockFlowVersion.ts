import {StringProperty} from "../StringProperty"


type Properties = {
  FlowArn: StringProperty
  CreatedAt?: StringProperty
  Definition?: {
    Nodes?: {
      Name: StringProperty
      Type: (string | "Input" | "Output" | "KnowledgeBase" | "Condition" | "Lex" | "Prompt" | "LambdaFunction" | "Agent" | "Iterator" | "Collector" | "Storage" | "Retrieval" | "InlineCode" | "Loop" | "LoopInput" | "LoopController")
      Configuration?: any
      Inputs?: {
        Name: StringProperty
        Type: (string | "String" | "Number" | "Boolean" | "Object" | "Array")
        Expression: StringProperty
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
  Description?: StringProperty
  ExecutionRoleArn?: StringProperty
  FlowId?: StringProperty
  Name?: StringProperty
  Status?: (string | "Failed" | "Prepared" | "Preparing" | "NotPrepared")
  Version?: StringProperty
  CustomerEncryptionKeyArn?: StringProperty
}

export const AWSBedrockFlowVersion = ({
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
      Type: 'AWS::Bedrock::FlowVersion',
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