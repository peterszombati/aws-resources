import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ChannelGroupName: StringProperty
  ChannelName: StringProperty
  ContainerType: (string | "TS" | "CMAF")
  CreatedAt?: StringProperty
  DashManifests?: {
    ManifestName: StringProperty
    ManifestWindowSeconds?: number
    FilterConfiguration?: {
      ManifestFilter?: StringProperty
      Start?: StringProperty
      End?: StringProperty
      TimeDelaySeconds?: number
      ClipStartTime?: StringProperty
    }
    MinUpdatePeriodSeconds?: number
    MinBufferTimeSeconds?: number
    SuggestedPresentationDelaySeconds?: number
    SegmentTemplateFormat?: (string | "NUMBER_WITH_TIMELINE")
    PeriodTriggers?: (string | "AVAILS" | "DRM_KEY_ROTATION" | "SOURCE_CHANGES" | "SOURCE_DISRUPTIONS" | "NONE")[]
    ScteDash?: {
      AdMarkerDash?: (string | "BINARY" | "XML")
    }
    DrmSignaling?: (string | "INDIVIDUAL" | "REFERENCED")
    UtcTiming?: {
      TimingMode?: (string | "HTTP_HEAD" | "HTTP_ISO" | "HTTP_XSDATE" | "UTC_DIRECT")
      TimingSource?: StringProperty
    }
    Profiles?: (string | "DVB_DASH")[]
    BaseUrls?: {
      Url: StringProperty
      ServiceLocation?: StringProperty
      DvbPriority?: number
      DvbWeight?: number
    }[]
    ProgramInformation?: {
      Title?: StringProperty
      Source?: StringProperty
      Copyright?: StringProperty
      LanguageCode?: StringProperty
      MoreInformationUrl?: StringProperty
    }
    DvbSettings?: {
      FontDownload?: {
        Url?: StringProperty
        MimeType?: StringProperty
        FontFamily?: StringProperty
      }
      ErrorMetrics?: {
        ReportingUrl: StringProperty
        Probability?: number
      }[]
    }
    Compactness?: (string | "STANDARD" | "NONE")
    SubtitleConfiguration?: {
      TtmlConfiguration?: {
        TtmlProfile: (string | "IMSC_1" | "EBU_TT_D_101")
      }
    }
  }[]
  Description?: StringProperty
  ForceEndpointErrorConfiguration?: {
    EndpointErrorConditions?: (string | "STALE_MANIFEST" | "INCOMPLETE_MANIFEST" | "MISSING_DRM_KEY" | "SLATE_INPUT")[]
  }
  HlsManifests?: {
    ManifestName: StringProperty
    Url?: StringProperty
    ChildManifestName?: StringProperty
    ManifestWindowSeconds?: number
    ProgramDateTimeIntervalSeconds?: number
    ScteHls?: {
      AdMarkerHls?: (string | "DATERANGE")
    }
    FilterConfiguration?: {
      ManifestFilter?: StringProperty
      Start?: StringProperty
      End?: StringProperty
      TimeDelaySeconds?: number
      ClipStartTime?: StringProperty
    }
    StartTag?: {
      TimeOffset: number
      Precise?: boolean
    }
    UrlEncodeChildManifest?: boolean
  }[]
  LowLatencyHlsManifests?: {
    ManifestName: StringProperty
    Url?: StringProperty
    ChildManifestName?: StringProperty
    ManifestWindowSeconds?: number
    ProgramDateTimeIntervalSeconds?: number
    ScteHls?: {
      AdMarkerHls?: (string | "DATERANGE")
    }
    FilterConfiguration?: {
      ManifestFilter?: StringProperty
      Start?: StringProperty
      End?: StringProperty
      TimeDelaySeconds?: number
      ClipStartTime?: StringProperty
    }
    StartTag?: {
      TimeOffset: number
      Precise?: boolean
    }
    UrlEncodeChildManifest?: boolean
  }[]
  ModifiedAt?: StringProperty
  OriginEndpointName: StringProperty
  Segment?: {
    SegmentDurationSeconds?: number
    SegmentName?: StringProperty
    TsUseAudioRenditionGroup?: boolean
    IncludeIframeOnlyStreams?: boolean
    TsIncludeDvbSubtitles?: boolean
    Scte?: {
      ScteFilter?: (string | "SPLICE_INSERT" | "BREAK" | "PROVIDER_ADVERTISEMENT" | "DISTRIBUTOR_ADVERTISEMENT" | "PROVIDER_PLACEMENT_OPPORTUNITY" | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY" | "PROGRAM")[]
    }
    Encryption?: {
      ConstantInitializationVector?: StringProperty
      EncryptionMethod: {
        TsEncryptionMethod?: (string | "AES_128" | "SAMPLE_AES")
        CmafEncryptionMethod?: (string | "CENC" | "CBCS")
      }
      KeyRotationIntervalSeconds?: number
      CmafExcludeSegmentDrmMetadata?: boolean
      SpekeKeyProvider: {
        EncryptionContractConfiguration: {
          PresetSpeke20Audio: (string | "PRESET_AUDIO_1" | "PRESET_AUDIO_2" | "PRESET_AUDIO_3" | "SHARED" | "UNENCRYPTED")
          PresetSpeke20Video: (string | "PRESET_VIDEO_1" | "PRESET_VIDEO_2" | "PRESET_VIDEO_3" | "PRESET_VIDEO_4" | "PRESET_VIDEO_5" | "PRESET_VIDEO_6" | "PRESET_VIDEO_7" | "PRESET_VIDEO_8" | "SHARED" | "UNENCRYPTED")
        }
        ResourceId: StringProperty
        DrmSystems: (string | "CLEAR_KEY_AES_128" | "FAIRPLAY" | "PLAYREADY" | "WIDEVINE" | "IRDETO")[]
        RoleArn: StringProperty
        Url: StringProperty
      }
    }
  }
  StartoverWindowSeconds?: number
  DashManifestUrls?: StringProperty[]
  HlsManifestUrls?: StringProperty[]
  LowLatencyHlsManifestUrls?: StringProperty[]
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSMediaPackageV2OriginEndpoint = ({
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
      Type: 'AWS::MediaPackageV2::OriginEndpoint',
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