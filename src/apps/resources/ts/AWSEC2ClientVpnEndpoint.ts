import {StringProperty} from "../StringProperty"


type Properties = {
  ClientCidrBlock?: StringProperty
  ClientConnectOptions?: {
    Enabled: boolean
    LambdaFunctionArn?: StringProperty
  }
  Description?: StringProperty
  ClientRouteEnforcementOptions?: {
    Enforced?: boolean
  }
  TagSpecifications?: {
    ResourceType: StringProperty
    Tags: {
      Value: StringProperty
      Key: StringProperty
    }[]
  }[]
  AuthenticationOptions: {
    MutualAuthentication?: {
      ClientRootCertificateChainArn: StringProperty
    }
    Type: StringProperty
    ActiveDirectory?: {
      DirectoryId: StringProperty
    }
    FederatedAuthentication?: {
      SAMLProviderArn: StringProperty
      SelfServiceSAMLProviderArn?: StringProperty
    }
  }[]
  ServerCertificateArn: StringProperty
  SessionTimeoutHours?: number
  DnsServers?: StringProperty[]
  SecurityGroupIds?: StringProperty[]
  DisconnectOnSessionTimeout?: boolean
  ConnectionLogOptions: {
    Enabled: boolean
    CloudwatchLogGroup?: StringProperty
    CloudwatchLogStream?: StringProperty
  }
  SplitTunnel?: boolean
  ClientLoginBannerOptions?: {
    Enabled: boolean
    BannerText?: StringProperty
  }
  VpcId?: StringProperty
  SelfServicePortal?: StringProperty
  TransportProtocol?: StringProperty
  Id?: StringProperty
  VpnPort?: number
}

export const AWSEC2ClientVpnEndpoint = ({
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
      Type: 'AWS::EC2::ClientVpnEndpoint',
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