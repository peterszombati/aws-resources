import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  As2ServiceManagedEgressIpAddresses?: StringProperty[]
  Certificate?: StringProperty
  Domain?: (string | "S3" | "EFS")
  EndpointDetails?: {
    AddressAllocationIds?: StringProperty[]
    SubnetIds?: StringProperty[]
    VpcEndpointId?: StringProperty
    VpcId?: StringProperty
    SecurityGroupIds?: StringProperty[]
  }
  EndpointType?: (string | "PUBLIC" | "VPC" | "VPC_ENDPOINT")
  IdentityProviderDetails?: {
    Url?: StringProperty
    InvocationRole?: StringProperty
    DirectoryId?: StringProperty
    Function?: StringProperty
    SftpAuthenticationMethods?: (string | "PASSWORD" | "PUBLIC_KEY" | "PUBLIC_KEY_OR_PASSWORD" | "PUBLIC_KEY_AND_PASSWORD")
  }
  IdentityProviderType?: (string | "SERVICE_MANAGED" | "API_GATEWAY" | "AWS_DIRECTORY_SERVICE" | "AWS_LAMBDA")
  IpAddressType?: (string | "IPV4" | "DUALSTACK")
  LoggingRole?: StringProperty
  PostAuthenticationLoginBanner?: StringProperty
  PreAuthenticationLoginBanner?: StringProperty
  ProtocolDetails?: {
    PassiveIp?: StringProperty
    TlsSessionResumptionMode?: (string | "DISABLED" | "ENABLED" | "ENFORCED")
    SetStatOption?: (string | "DEFAULT" | "ENABLE_NO_OP")
    As2Transports?: (string | "HTTP")[]
  }
  Protocols?: (string | "SFTP" | "FTP" | "FTPS" | "AS2")[]
  S3StorageOptions?: {
    DirectoryListingOptimization?: (string | "ENABLED" | "DISABLED")
  }
  SecurityPolicyName?: StringProperty
  ServerId?: StringProperty
  State?: (string | "OFFLINE" | "ONLINE" | "STARTING" | "STOPPING" | "START_FAILED" | "STOP_FAILED")
  StructuredLogDestinations?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  WorkflowDetails?: {
    OnUpload?: {
      WorkflowId: StringProperty
      ExecutionRole: StringProperty
    }[]
    OnPartialUpload?: {
      WorkflowId: StringProperty
      ExecutionRole: StringProperty
    }[]
  }
}

export const AWSTransferServer = ({
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
      Type: 'AWS::Transfer::Server',
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