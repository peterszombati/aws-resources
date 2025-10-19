import {StringProperty} from "../StringProperty"


type Properties = {
  FlowArn: StringProperty
  OutputArn?: StringProperty
  CidrAllowList?: StringProperty[]
  Encryption?: {
    Algorithm?: (string | "aes128" | "aes192" | "aes256")
    KeyType?: (string | "static-key" | "srt-password")
    RoleArn: StringProperty
    SecretArn: StringProperty
  }
  Description?: StringProperty
  Destination?: StringProperty
  MaxLatency?: number
  MinLatency?: number
  Name?: StringProperty
  Port?: number
  Protocol: (string | "zixi-push" | "rtp-fec" | "rtp" | "zixi-pull" | "rist" | "fujitsu-qos" | "srt-listener" | "srt-caller" | "st2110-jpegxs" | "cdi" | "ndi-speed-hq")
  RemoteId?: StringProperty
  SmoothingLatency?: number
  StreamId?: StringProperty
  VpcInterfaceAttachment?: {
    VpcInterfaceName?: StringProperty
  }
  MediaStreamOutputConfigurations?: {
    EncodingName: (string | "jxsv" | "raw" | "smpte291" | "pcm")
    DestinationConfigurations?: {
      DestinationIp: StringProperty
      DestinationPort: number
      Interface: {
        Name: StringProperty
      }
    }[]
    MediaStreamName: StringProperty
    EncodingParameters?: {
      CompressionFactor: number
      EncoderProfile?: (string | "main" | "high")
    }
  }[]
  OutputStatus?: (string | "ENABLED" | "DISABLED")
  NdiProgramName?: StringProperty
  NdiSpeedHqQuality?: number
}

export const AWSMediaConnectFlowOutput = ({
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
      Type: 'AWS::MediaConnect::FlowOutput',
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