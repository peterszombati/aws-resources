import {StringProperty} from "../StringProperty"


type Properties = {
  RemoteIpv6NetworkCidr?: StringProperty
  RemoteIpv4NetworkCidr?: StringProperty
  VpnTunnelOptionsSpecifications?: {
    Phase2EncryptionAlgorithms?: {
      Value?: (string | "AES128" | "AES256" | "AES128-GCM-16" | "AES256-GCM-16")
    }[]
    Phase2DHGroupNumbers?: {
      Value?: number
    }[]
    TunnelInsideIpv6Cidr?: StringProperty
    StartupAction?: (string | "add" | "start")
    TunnelInsideCidr?: StringProperty
    IKEVersions?: {
      Value?: (string | "ikev1" | "ikev2")
    }[]
    LogOptions?: {
      CloudwatchLogOptions?: {
        LogEnabled?: boolean
        LogOutputFormat?: (string | "json" | "text")
        LogGroupArn?: StringProperty
      }
    }
    Phase1DHGroupNumbers?: {
      Value?: number
    }[]
    ReplayWindowSize?: number
    EnableTunnelLifecycleControl?: boolean
    RekeyMarginTimeSeconds?: number
    DPDTimeoutAction?: (string | "clear" | "none" | "restart")
    Phase2LifetimeSeconds?: number
    Phase2IntegrityAlgorithms?: {
      Value?: (string | "SHA1" | "SHA2-256" | "SHA2-384" | "SHA2-512")
    }[]
    Phase1IntegrityAlgorithms?: {
      Value?: (string | "SHA1" | "SHA2-256" | "SHA2-384" | "SHA2-512")
    }[]
    PreSharedKey?: StringProperty
    Phase1LifetimeSeconds?: number
    RekeyFuzzPercentage?: number
    Phase1EncryptionAlgorithms?: {
      Value?: (string | "AES128" | "AES256" | "AES128-GCM-16" | "AES256-GCM-16")
    }[]
    DPDTimeoutSeconds?: number
  }[]
  CustomerGatewayId: StringProperty
  OutsideIpAddressType?: StringProperty
  StaticRoutesOnly?: boolean
  EnableAcceleration?: boolean
  TransitGatewayId?: StringProperty
  Type: StringProperty
  LocalIpv4NetworkCidr?: StringProperty
  VpnGatewayId?: StringProperty
  PreSharedKeyStorage?: (string | "Standard" | "SecretsManager")
  TransportTransitGatewayAttachmentId?: StringProperty
  LocalIpv6NetworkCidr?: StringProperty
  VpnConnectionId?: StringProperty
  TunnelInsideIpVersion?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEC2VPNConnection = ({
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
      Type: 'AWS::EC2::VPNConnection',
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