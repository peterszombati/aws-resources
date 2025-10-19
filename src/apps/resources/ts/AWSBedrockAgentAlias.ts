import {StringProperty} from "../StringProperty"


type Properties = {
  AgentAliasArn?: StringProperty
  AgentAliasHistoryEvents?: {
    RoutingConfiguration?: {
      AgentVersion: StringProperty
    }[]
    EndDate?: StringProperty
    StartDate?: StringProperty
  }[]
  AgentAliasId?: StringProperty
  AgentAliasName: StringProperty
  AgentAliasStatus?: (string | "CREATING" | "PREPARED" | "FAILED" | "UPDATING" | "DELETING")
  AgentId: StringProperty
  CreatedAt?: StringProperty
  Description?: StringProperty
  RoutingConfiguration?: {
    AgentVersion: StringProperty
  }[]
  Tags?: Record<string, any>
  UpdatedAt?: StringProperty
}

export const AWSBedrockAgentAlias = ({
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
      Type: 'AWS::Bedrock::AgentAlias',
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