import {StringProperty} from "../StringProperty"


type Properties = {
  Id: StringProperty
  PackagingGroupId: StringProperty
  Arn?: StringProperty
  CmafPackage?: {
    Encryption?: {
      SpekeKeyProvider: {
        EncryptionContractConfiguration?: {
          PresetSpeke20Audio: (string | "PRESET-AUDIO-1" | "PRESET-AUDIO-2" | "PRESET-AUDIO-3" | "SHARED" | "UNENCRYPTED")
          PresetSpeke20Video: (string | "PRESET-VIDEO-1" | "PRESET-VIDEO-2" | "PRESET-VIDEO-3" | "PRESET-VIDEO-4" | "PRESET-VIDEO-5" | "PRESET-VIDEO-6" | "PRESET-VIDEO-7" | "PRESET-VIDEO-8" | "SHARED" | "UNENCRYPTED")
        }
        RoleArn: StringProperty
        SystemIds: StringProperty[]
        Url: StringProperty
      }
    }
    HlsManifests: {
      AdMarkers?: (string | "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH")
      IncludeIframeOnlyStream?: boolean
      ManifestName?: StringProperty
      ProgramDateTimeIntervalSeconds?: number
      RepeatExtXKey?: boolean
      StreamSelection?: {
        MaxVideoBitsPerSecond?: number
        MinVideoBitsPerSecond?: number
        StreamOrder?: (string | "ORIGINAL" | "VIDEO_BITRATE_ASCENDING" | "VIDEO_BITRATE_DESCENDING")
      }
    }[]
    SegmentDurationSeconds?: number
    IncludeEncoderConfigurationInSegments?: boolean
  }
  DashPackage?: {
    DashManifests: {
      ManifestLayout?: (string | "FULL" | "COMPACT")
      ManifestName?: StringProperty
      MinBufferTimeSeconds?: number
      Profile?: (string | "NONE" | "HBBTV_1_5")
      ScteMarkersSource?: (string | "SEGMENTS" | "MANIFEST")
      StreamSelection?: {
        MaxVideoBitsPerSecond?: number
        MinVideoBitsPerSecond?: number
        StreamOrder?: (string | "ORIGINAL" | "VIDEO_BITRATE_ASCENDING" | "VIDEO_BITRATE_DESCENDING")
      }
    }[]
    Encryption?: {
      SpekeKeyProvider: {
        EncryptionContractConfiguration?: {
          PresetSpeke20Audio: (string | "PRESET-AUDIO-1" | "PRESET-AUDIO-2" | "PRESET-AUDIO-3" | "SHARED" | "UNENCRYPTED")
          PresetSpeke20Video: (string | "PRESET-VIDEO-1" | "PRESET-VIDEO-2" | "PRESET-VIDEO-3" | "PRESET-VIDEO-4" | "PRESET-VIDEO-5" | "PRESET-VIDEO-6" | "PRESET-VIDEO-7" | "PRESET-VIDEO-8" | "SHARED" | "UNENCRYPTED")
        }
        RoleArn: StringProperty
        SystemIds: StringProperty[]
        Url: StringProperty
      }
    }
    PeriodTriggers?: (string | "ADS")[]
    SegmentDurationSeconds?: number
    SegmentTemplateFormat?: (string | "NUMBER_WITH_TIMELINE" | "TIME_WITH_TIMELINE" | "NUMBER_WITH_DURATION")
    IncludeEncoderConfigurationInSegments?: boolean
    IncludeIframeOnlyStream?: boolean
  }
  HlsPackage?: {
    Encryption?: {
      ConstantInitializationVector?: StringProperty
      EncryptionMethod?: (string | "AES_128" | "SAMPLE_AES")
      SpekeKeyProvider: {
        EncryptionContractConfiguration?: {
          PresetSpeke20Audio: (string | "PRESET-AUDIO-1" | "PRESET-AUDIO-2" | "PRESET-AUDIO-3" | "SHARED" | "UNENCRYPTED")
          PresetSpeke20Video: (string | "PRESET-VIDEO-1" | "PRESET-VIDEO-2" | "PRESET-VIDEO-3" | "PRESET-VIDEO-4" | "PRESET-VIDEO-5" | "PRESET-VIDEO-6" | "PRESET-VIDEO-7" | "PRESET-VIDEO-8" | "SHARED" | "UNENCRYPTED")
        }
        RoleArn: StringProperty
        SystemIds: StringProperty[]
        Url: StringProperty
      }
    }
    HlsManifests: {
      AdMarkers?: (string | "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH")
      IncludeIframeOnlyStream?: boolean
      ManifestName?: StringProperty
      ProgramDateTimeIntervalSeconds?: number
      RepeatExtXKey?: boolean
      StreamSelection?: {
        MaxVideoBitsPerSecond?: number
        MinVideoBitsPerSecond?: number
        StreamOrder?: (string | "ORIGINAL" | "VIDEO_BITRATE_ASCENDING" | "VIDEO_BITRATE_DESCENDING")
      }
    }[]
    IncludeDvbSubtitles?: boolean
    SegmentDurationSeconds?: number
    UseAudioRenditionGroup?: boolean
  }
  MssPackage?: {
    Encryption?: {
      SpekeKeyProvider: {
        EncryptionContractConfiguration?: {
          PresetSpeke20Audio: (string | "PRESET-AUDIO-1" | "PRESET-AUDIO-2" | "PRESET-AUDIO-3" | "SHARED" | "UNENCRYPTED")
          PresetSpeke20Video: (string | "PRESET-VIDEO-1" | "PRESET-VIDEO-2" | "PRESET-VIDEO-3" | "PRESET-VIDEO-4" | "PRESET-VIDEO-5" | "PRESET-VIDEO-6" | "PRESET-VIDEO-7" | "PRESET-VIDEO-8" | "SHARED" | "UNENCRYPTED")
        }
        RoleArn: StringProperty
        SystemIds: StringProperty[]
        Url: StringProperty
      }
    }
    MssManifests: {
      ManifestName?: StringProperty
      StreamSelection?: {
        MaxVideoBitsPerSecond?: number
        MinVideoBitsPerSecond?: number
        StreamOrder?: (string | "ORIGINAL" | "VIDEO_BITRATE_ASCENDING" | "VIDEO_BITRATE_DESCENDING")
      }
    }[]
    SegmentDurationSeconds?: number
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSMediaPackagePackagingConfiguration = ({
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
      Type: 'AWS::MediaPackage::PackagingConfiguration',
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