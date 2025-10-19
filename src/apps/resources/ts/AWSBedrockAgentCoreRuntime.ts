import {StringProperty} from "../StringProperty"


type Properties = {
  AgentRuntimeArn?: StringProperty
  AgentRuntimeId?: StringProperty
  AgentRuntimeName: StringProperty
  Description?: StringProperty
  AgentRuntimeArtifact: {
    ContainerConfiguration?: {
      ContainerUri: StringProperty
    }
  }
  RoleArn: StringProperty
  NetworkConfiguration: {
    NetworkMode: (string | "PUBLIC" | "VPC")
    NetworkModeConfig?: {
      SecurityGroups: StringProperty[]
      Subnets: StringProperty[]
    }
  }
  ProtocolConfiguration?: (string | "MCP" | "HTTP")
  EnvironmentVariables?: Record<string, any>
  AuthorizerConfiguration?: {
    CustomJWTAuthorizer?: {
      DiscoveryUrl: StringProperty
      AllowedAudience?: StringProperty[]
      AllowedClients?: StringProperty[]
    }
  }
  AgentRuntimeVersion?: StringProperty
  WorkloadIdentityDetails?: {
    WorkloadIdentityArn: StringProperty
  }
  CreatedAt?: StringProperty
  LastUpdatedAt?: StringProperty
  Status?: (string | "CREATING" | "CREATE_FAILED" | "UPDATING" | "UPDATE_FAILED" | "READY" | "DELETING")
  Tags?: Record<string, any>
}

export const AWSBedrockAgentCoreRuntime = ({
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
      Type: 'AWS::BedrockAgentCore::Runtime',
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