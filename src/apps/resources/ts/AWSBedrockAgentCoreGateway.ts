import {StringProperty} from "../StringProperty"


type Properties = {
  AuthorizerConfiguration?: any
  AuthorizerType: (string | "CUSTOM_JWT" | "AWS_IAM")
  CreatedAt?: StringProperty
  Description?: StringProperty
  ExceptionLevel?: (string | "DEBUG")
  GatewayArn?: StringProperty
  GatewayIdentifier?: StringProperty
  GatewayUrl?: StringProperty
  KmsKeyArn?: StringProperty
  Name: StringProperty
  ProtocolConfiguration?: any
  ProtocolType: (string | "MCP")
  RoleArn: StringProperty
  Status?: (string | "CREATING" | "UPDATING" | "UPDATE_UNSUCCESSFUL" | "DELETING" | "READY" | "FAILED")
  StatusReasons?: StringProperty[]
  Tags?: Record<string, any>
  UpdatedAt?: StringProperty
  WorkloadIdentityDetails?: {
    WorkloadIdentityArn: StringProperty
  }
}

export const AWSBedrockAgentCoreGateway = ({
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
      Type: 'AWS::BedrockAgentCore::Gateway',
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