import {StringProperty} from "../StringProperty"


type Properties = {
  FlowArn?: StringProperty
  EgressIp?: StringProperty
  Name: StringProperty
  AvailabilityZone?: StringProperty
  FlowAvailabilityZone?: StringProperty
  Source: {
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
    Description?: StringProperty
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
    Name?: StringProperty
    Protocol?: (string | "zixi-push" | "rtp-fec" | "rtp" | "rist" | "fujitsu-qos" | "srt-listener" | "srt-caller" | "st2110-jpegxs" | "cdi")
    SenderIpAddress?: StringProperty
    SenderControlPort?: number
    StreamId?: StringProperty
    SourceIngestPort?: StringProperty
    SourceListenerAddress?: StringProperty
    SourceListenerPort?: number
    VpcInterfaceName?: StringProperty
    WhitelistCidr?: StringProperty
    MaxSyncBuffer?: number
    MediaStreamSourceConfigurations?: {
      EncodingName: (string | "jxsv" | "raw" | "smpte291" | "pcm")
      InputConfigurations?: {
        InputPort: number
        Interface: {
          Name: StringProperty
        }
      }[]
      MediaStreamName: StringProperty
    }[]
  }
  SourceFailoverConfig?: {
    State?: (string | "ENABLED" | "DISABLED")
    RecoveryWindow?: number
    FailoverMode?: (string | "MERGE" | "FAILOVER")
    SourcePriority?: {
      PrimarySource: StringProperty
    }
  }
  VpcInterfaces?: {
    Name: StringProperty
    NetworkInterfaceType?: (string | "ena" | "efa")
    RoleArn: StringProperty
    SecurityGroupIds: StringProperty[]
    SubnetId: StringProperty
    NetworkInterfaceIds?: StringProperty[]
  }[]
  MediaStreams?: {
    MediaStreamId: number
    MediaStreamType: (string | "video" | "audio" | "ancillary-data")
    VideoFormat?: (string | "2160p" | "1080p" | "1080i" | "720p" | "480p")
    MediaStreamName: StringProperty
    Description?: StringProperty
    Attributes?: {
      Fmtp?: {
        ExactFramerate?: StringProperty
        Colorimetry?: (string | "BT601" | "BT709" | "BT2020" | "BT2100" | "ST2065-1" | "ST2065-3" | "XYZ")
        ScanMode?: (string | "progressive" | "interlace" | "progressive-segmented-frame")
        Tcs?: (string | "SDR" | "PQ" | "HLG" | "LINEAR" | "BT2100LINPQ" | "BT2100LINHLG" | "ST2065-1" | "ST428-1" | "DENSITY")
        Range?: (string | "NARROW" | "FULL" | "FULLPROTECT")
        Par?: StringProperty
        ChannelOrder?: StringProperty
      }
      Lang?: StringProperty
    }
    ClockRate?: number
    Fmt?: number
  }[]
  Maintenance?: {
    MaintenanceDay: (string | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")
    MaintenanceStartHour: StringProperty
  }
  SourceMonitoringConfig?: {
    ThumbnailState?: (string | "ENABLED" | "DISABLED")
    ContentQualityAnalysisState?: (string | "ENABLED" | "DISABLED")
    AudioMonitoringSettings?: {
      SilentAudio?: {
        State?: (string | "ENABLED" | "DISABLED")
        ThresholdSeconds?: number
      }
    }[]
    VideoMonitoringSettings?: {
      BlackFrames?: {
        State?: (string | "ENABLED" | "DISABLED")
        ThresholdSeconds?: number
      }
      FrozenFrames?: {
        State?: (string | "ENABLED" | "DISABLED")
        ThresholdSeconds?: number
      }
    }[]
  }
  FlowSize?: (string | "MEDIUM" | "LARGE")
  NdiConfig?: {
    NdiDiscoveryServers?: {
      VpcInterfaceAdapter: StringProperty
      DiscoveryServerAddress: StringProperty
      DiscoveryServerPort?: number /* schema format: int32*/
    }[]
    NdiState?: (string | "ENABLED" | "DISABLED")
    MachineName?: StringProperty
  }
  FlowNdiMachineName?: StringProperty
}

export const AWSMediaConnectFlow = ({
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
      Type: 'AWS::MediaConnect::Flow',
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