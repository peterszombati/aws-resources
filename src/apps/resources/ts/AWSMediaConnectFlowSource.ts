import {StringProperty} from "../StringProperty"


type Properties = {
  FlowArn?: StringProperty
  SourceArn?: StringProperty
  Decryption?: {
    Algorithm?: (string | "aes128" | "aes192" | "aes256")
    ConstantInitializationVector?: StringProperty
    DeviceId?: StringProperty
    KeyType?: (string | "speke" | "static-key" | "srt-password")
    Region?: StringProperty
    ResourceId?: StringProperty
    RoleArn: StringProperty
    SecretArn?: StringProperty
    Url?: StringProperty
  }
  Description: StringProperty
  EntitlementArn?: StringProperty
  GatewayBridgeSource?: {
    BridgeArn: StringProperty
    VpcInterfaceAttachment?: {
      VpcInterfaceName?: StringProperty
    }
  }
  IngestIp?: StringProperty
  IngestPort?: number
  MaxBitrate?: number
  MaxLatency?: number
  MinLatency?: number
  Name: StringProperty
  Protocol?: (string | "zixi-push" | "rtp-fec" | "rtp" | "rist" | "srt-listener" | "srt-caller")
  SenderIpAddress?: StringProperty
  SenderControlPort?: number
  StreamId?: StringProperty
  SourceIngestPort?: StringProperty
  SourceListenerAddress?: StringProperty
  SourceListenerPort?: number
  VpcInterfaceName?: StringProperty
  WhitelistCidr?: StringProperty
}

export const AWSMediaConnectFlowSource = ({
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
      Type: 'AWS::MediaConnect::FlowSource',
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