import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  ContactFlowArn?: StringProperty
  Name: StringProperty
  Content: StringProperty
  Description?: StringProperty
  State?: (string | "ACTIVE" | "ARCHIVED")
  Type: (string | "CONTACT_FLOW" | "CUSTOMER_QUEUE" | "CUSTOMER_HOLD" | "CUSTOMER_WHISPER" | "AGENT_HOLD" | "AGENT_WHISPER" | "OUTBOUND_WHISPER" | "AGENT_TRANSFER" | "QUEUE_TRANSFER" | "CAMPAIGN")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSConnectContactFlow = ({
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
      Type: 'AWS::Connect::ContactFlow',
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