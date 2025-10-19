import {StringProperty} from "../StringProperty"


type Properties = {
  Type: (string | "AGENT")
  Description?: StringProperty
  AssistantArn?: StringProperty
  AssistantId?: StringProperty
  ServerSideEncryptionConfiguration?: {
    KmsKeyId?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Name: StringProperty
}

export const AWSWisdomAssistant = ({
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
      Type: 'AWS::Wisdom::Assistant',
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