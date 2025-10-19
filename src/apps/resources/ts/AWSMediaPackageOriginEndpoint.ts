import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Url?: StringProperty
  Id: StringProperty
  ChannelId: StringProperty
  Description?: StringProperty
  Whitelist?: StringProperty[]
  StartoverWindowSeconds?: number
  TimeDelaySeconds?: number
  ManifestName?: StringProperty
  Origination?: (string | "ALLOW" | "DENY")
  Authorization?: {
    SecretsRoleArn: StringProperty
    CdnIdentifierSecret: StringProperty
  }
  HlsPackage?: {
    SegmentDurationSeconds?: number
    PlaylistWindowSeconds?: number
    PlaylistType?: (string | "NONE" | "EVENT" | "VOD")
    AdMarkers?: (string | "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH" | "DATERANGE")
    AdTriggers?: (string | "SPLICE_INSERT" | "BREAK" | "PROVIDER_ADVERTISEMENT" | "DISTRIBUTOR_ADVERTISEMENT" | "PROVIDER_PLACEMENT_OPPORTUNITY" | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY")[]
    AdsOnDeliveryRestrictions?: (string | "NONE" | "RESTRICTED" | "UNRESTRICTED" | "BOTH")
    ProgramDateTimeIntervalSeconds?: number
    IncludeIframeOnlyStream?: boolean
    UseAudioRenditionGroup?: boolean
    IncludeDvbSubtitles?: boolean
    Encryption?: {
      EncryptionMethod?: (string | "AES_128" | "SAMPLE_AES")
      ConstantInitializationVector?: StringProperty
      KeyRotationIntervalSeconds?: number
      RepeatExtXKey?: boolean
      SpekeKeyProvider: {
        ResourceId: StringProperty
        SystemIds: StringProperty[]
        Url: StringProperty
        RoleArn: StringProperty
        CertificateArn?: StringProperty
        EncryptionContractConfiguration?: {
          PresetSpeke20Audio: (string | "PRESET-AUDIO-1" | "PRESET-AUDIO-2" | "PRESET-AUDIO-3" | "SHARED" | "UNENCRYPTED")
          PresetSpeke20Video: (string | "PRESET-VIDEO-1" | "PRESET-VIDEO-2" | "PRESET-VIDEO-3" | "PRESET-VIDEO-4" | "PRESET-VIDEO-5" | "PRESET-VIDEO-6" | "PRESET-VIDEO-7" | "PRESET-VIDEO-8" | "SHARED" | "UNENCRYPTED")
        }
      }
    }
    StreamSelection?: {
      MinVideoBitsPerSecond?: number
      MaxVideoBitsPerSecond?: number
      StreamOrder?: (string | "ORIGINAL" | "VIDEO_BITRATE_ASCENDING" | "VIDEO_BITRATE_DESCENDING")
    }
  }
  DashPackage?: {
    SegmentDurationSeconds?: number
    ManifestWindowSeconds?: number
    Profile?: (string | "NONE" | "HBBTV_1_5" | "HYBRIDCAST" | "DVB_DASH_2014")
    MinUpdatePeriodSeconds?: number
    MinBufferTimeSeconds?: number
    SuggestedPresentationDelaySeconds?: number
    PeriodTriggers?: (string | "ADS")[]
    IncludeIframeOnlyStream?: boolean
    ManifestLayout?: (string | "FULL" | "COMPACT" | "DRM_TOP_LEVEL_COMPACT")
    SegmentTemplateFormat?: (string | "NUMBER_WITH_TIMELINE" | "TIME_WITH_TIMELINE" | "NUMBER_WITH_DURATION")
    AdTriggers?: (string | "SPLICE_INSERT" | "BREAK" | "PROVIDER_ADVERTISEMENT" | "DISTRIBUTOR_ADVERTISEMENT" | "PROVIDER_PLACEMENT_OPPORTUNITY" | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY")[]
    AdsOnDeliveryRestrictions?: (string | "NONE" | "RESTRICTED" | "UNRESTRICTED" | "BOTH")
    Encryption?: {
      KeyRotationIntervalSeconds?: number
      SpekeKeyProvider: {
        ResourceId: StringProperty
        SystemIds: StringProperty[]
        Url: StringProperty
        RoleArn: StringProperty
        CertificateArn?: StringProperty
        EncryptionContractConfiguration?: {
          PresetSpeke20Audio: (string | "PRESET-AUDIO-1" | "PRESET-AUDIO-2" | "PRESET-AUDIO-3" | "SHARED" | "UNENCRYPTED")
          PresetSpeke20Video: (string | "PRESET-VIDEO-1" | "PRESET-VIDEO-2" | "PRESET-VIDEO-3" | "PRESET-VIDEO-4" | "PRESET-VIDEO-5" | "PRESET-VIDEO-6" | "PRESET-VIDEO-7" | "PRESET-VIDEO-8" | "SHARED" | "UNENCRYPTED")
        }
      }
    }
    StreamSelection?: {
      MinVideoBitsPerSecond?: number
      MaxVideoBitsPerSecond?: number
      StreamOrder?: (string | "ORIGINAL" | "VIDEO_BITRATE_ASCENDING" | "VIDEO_BITRATE_DESCENDING")
    }
    UtcTiming?: (string | "HTTP-XSDATE" | "HTTP-ISO" | "HTTP-HEAD" | "NONE")
    UtcTimingUri?: StringProperty
  }
  MssPackage?: {
    ManifestWindowSeconds?: number
    SegmentDurationSeconds?: number
    Encryption?: {
      SpekeKeyProvider: {
        ResourceId: StringProperty
        SystemIds: StringProperty[]
        Url: StringProperty
        RoleArn: StringProperty
        CertificateArn?: StringProperty
        EncryptionContractConfiguration?: {
          PresetSpeke20Audio: (string | "PRESET-AUDIO-1" | "PRESET-AUDIO-2" | "PRESET-AUDIO-3" | "SHARED" | "UNENCRYPTED")
          PresetSpeke20Video: (string | "PRESET-VIDEO-1" | "PRESET-VIDEO-2" | "PRESET-VIDEO-3" | "PRESET-VIDEO-4" | "PRESET-VIDEO-5" | "PRESET-VIDEO-6" | "PRESET-VIDEO-7" | "PRESET-VIDEO-8" | "SHARED" | "UNENCRYPTED")
        }
      }
    }
    StreamSelection?: {
      MinVideoBitsPerSecond?: number
      MaxVideoBitsPerSecond?: number
      StreamOrder?: (string | "ORIGINAL" | "VIDEO_BITRATE_ASCENDING" | "VIDEO_BITRATE_DESCENDING")
    }
  }
  CmafPackage?: {
    SegmentDurationSeconds?: number
    SegmentPrefix?: StringProperty
    Encryption?: {
      KeyRotationIntervalSeconds?: number
      SpekeKeyProvider: {
        ResourceId: StringProperty
        SystemIds: StringProperty[]
        Url: StringProperty
        RoleArn: StringProperty
        CertificateArn?: StringProperty
        EncryptionContractConfiguration?: {
          PresetSpeke20Audio: (string | "PRESET-AUDIO-1" | "PRESET-AUDIO-2" | "PRESET-AUDIO-3" | "SHARED" | "UNENCRYPTED")
          PresetSpeke20Video: (string | "PRESET-VIDEO-1" | "PRESET-VIDEO-2" | "PRESET-VIDEO-3" | "PRESET-VIDEO-4" | "PRESET-VIDEO-5" | "PRESET-VIDEO-6" | "PRESET-VIDEO-7" | "PRESET-VIDEO-8" | "SHARED" | "UNENCRYPTED")
        }
      }
      ConstantInitializationVector?: StringProperty
      EncryptionMethod?: (string | "SAMPLE_AES" | "AES_CTR")
    }
    StreamSelection?: {
      MinVideoBitsPerSecond?: number
      MaxVideoBitsPerSecond?: number
      StreamOrder?: (string | "ORIGINAL" | "VIDEO_BITRATE_ASCENDING" | "VIDEO_BITRATE_DESCENDING")
    }
    HlsManifests?: {
      Id: StringProperty
      ManifestName?: StringProperty
      Url?: StringProperty
      PlaylistWindowSeconds?: number
      PlaylistType?: (string | "NONE" | "EVENT" | "VOD")
      AdMarkers?: (string | "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH" | "DATERANGE")
      ProgramDateTimeIntervalSeconds?: number
      IncludeIframeOnlyStream?: boolean
      AdTriggers?: (string | "SPLICE_INSERT" | "BREAK" | "PROVIDER_ADVERTISEMENT" | "DISTRIBUTOR_ADVERTISEMENT" | "PROVIDER_PLACEMENT_OPPORTUNITY" | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY")[]
      AdsOnDeliveryRestrictions?: (string | "NONE" | "RESTRICTED" | "UNRESTRICTED" | "BOTH")
    }[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSMediaPackageOriginEndpoint = ({
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
      Type: 'AWS::MediaPackage::OriginEndpoint',
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