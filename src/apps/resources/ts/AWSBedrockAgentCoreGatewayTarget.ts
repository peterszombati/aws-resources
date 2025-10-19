import {StringProperty} from "../StringProperty"


type Properties = {
  CreatedAt?: StringProperty
  CredentialProviderConfigurations: {
    CredentialProviderType: (string | "GATEWAY_IAM_ROLE" | "OAUTH" | "API_KEY")
    CredentialProvider?: any
  }[]
  Description?: StringProperty
  GatewayArn?: StringProperty
  GatewayIdentifier?: StringProperty
  Name: StringProperty
  Status?: (string | "CREATING" | "UPDATING" | "UPDATE_UNSUCCESSFUL" | "DELETING" | "READY" | "FAILED")
  StatusReasons?: StringProperty[]
  TargetConfiguration: any
  TargetId?: StringProperty
  UpdatedAt?: StringProperty
}

export const AWSBedrockAgentCoreGatewayTarget = ({
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
      Type: 'AWS::BedrockAgentCore::GatewayTarget',
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