import {StringProperty} from "../StringProperty"


type Properties = {
  AgentRuntimeId: StringProperty
  Id?: StringProperty
  Name: StringProperty
  AgentRuntimeVersion?: StringProperty
  LiveVersion?: StringProperty
  TargetVersion?: StringProperty
  Description?: StringProperty
  AgentRuntimeEndpointArn?: StringProperty
  AgentRuntimeArn?: StringProperty
  Status?: (string | "CREATING" | "CREATE_FAILED" | "UPDATING" | "UPDATE_FAILED" | "READY" | "DELETING")
  CreatedAt?: StringProperty
  LastUpdatedAt?: StringProperty
  Tags?: Record<string, any>
  FailureReason?: StringProperty
}

export const AWSBedrockAgentCoreRuntimeEndpoint = ({
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
      Type: 'AWS::BedrockAgentCore::RuntimeEndpoint',
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