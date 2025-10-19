import {StringProperty} from "../StringProperty"


type Properties = {
  InputAttachments?: {
    InputAttachmentName?: StringProperty
    InputId?: StringProperty
    LogicalInterfaceNames?: StringProperty[]
    AutomaticInputFailoverSettings?: {
      ErrorClearTimeMsec?: number
      FailoverConditions?: {
        FailoverConditionSettings?: {
          AudioSilenceSettings?: {
            AudioSelectorName?: StringProperty
            AudioSilenceThresholdMsec?: number
          }
          VideoBlackSettings?: {
            BlackDetectThreshold?: number
            VideoBlackThresholdMsec?: number
          }
          InputLossSettings?: {
            InputLossThresholdMsec?: number
          }
        }
      }[]
      InputPreference?: StringProperty
      SecondaryInputId?: StringProperty
    }
    InputSettings?: {
      Scte35Pid?: number
      DeblockFilter?: StringProperty
      FilterStrength?: number
      InputFilter?: StringProperty
      SourceEndBehavior?: StringProperty
      VideoSelector?: {
        ColorSpaceSettings?: {
          Hdr10Settings?: {
            MaxCll?: number
            MaxFall?: number
          }
        }
        ColorSpaceUsage?: StringProperty
        SelectorSettings?: {
          VideoSelectorProgramId?: {
            ProgramId?: number
          }
          VideoSelectorPid?: {
            Pid?: number
          }
        }
        ColorSpace?: StringProperty
      }
      Smpte2038DataPreference?: StringProperty
      AudioSelectors?: {
        SelectorSettings?: {
          AudioLanguageSelection?: {
            LanguageCode?: StringProperty
            LanguageSelectionPolicy?: StringProperty
          }
          AudioTrackSelection?: {
            DolbyEDecode?: {
              ProgramSelection?: StringProperty
            }
            Tracks?: {
              Track?: number
            }[]
          }
          AudioPidSelection?: {
            Pid?: number
          }
          AudioHlsRenditionSelection?: {
            GroupId?: StringProperty
            Name?: StringProperty
          }
        }
        Name?: StringProperty
      }[]
      CaptionSelectors?: {
        LanguageCode?: StringProperty
        SelectorSettings?: {
          DvbSubSourceSettings?: {
            OcrLanguage?: StringProperty
            Pid?: number
          }
          Scte27SourceSettings?: {
            OcrLanguage?: StringProperty
            Pid?: number
          }
          AribSourceSettings?: Record<string, any>
          EmbeddedSourceSettings?: {
            Source608ChannelNumber?: number
            Scte20Detection?: StringProperty
            Source608TrackNumber?: number
            Convert608To708?: StringProperty
          }
          Scte20SourceSettings?: {
            Source608ChannelNumber?: number
            Convert608To708?: StringProperty
          }
          TeletextSourceSettings?: {
            OutputRectangle?: {
              Height?: number
              TopOffset?: number
              Width?: number
              LeftOffset?: number
            }
            PageNumber?: StringProperty
          }
          AncillarySourceSettings?: {
            SourceAncillaryChannelNumber?: number
          }
        }
        Name?: StringProperty
      }[]
      DenoiseFilter?: StringProperty
      NetworkInputSettings?: {
        MulticastInputSettings?: {
          SourceIpAddress?: StringProperty
        }
        ServerValidation?: StringProperty
        HlsInputSettings?: {
          Scte35Source?: StringProperty
          BufferSegments?: number
          RetryInterval?: number
          Retries?: number
          Bandwidth?: number
        }
      }
    }
  }[]
  InputSpecification?: {
    Codec?: StringProperty
    MaximumBitrate?: StringProperty
    Resolution?: StringProperty
  }
  Destinations?: {
    SrtSettings?: {
      StreamId?: StringProperty
      EncryptionPassphraseSecretArn?: StringProperty
      Url?: StringProperty
    }[]
    LogicalInterfaceNames?: StringProperty[]
    MultiplexSettings?: {
      ProgramName?: StringProperty
      MultiplexId?: StringProperty
    }
    Id?: StringProperty
    Settings?: {
      StreamName?: StringProperty
      PasswordParam?: StringProperty
      Username?: StringProperty
      Url?: StringProperty
    }[]
    MediaPackageSettings?: {
      ChannelName?: StringProperty
      ChannelId?: StringProperty
      ChannelGroup?: StringProperty
    }[]
  }[]
  DryRun?: boolean
  Vpc?: {
    SecurityGroupIds?: StringProperty[]
    SubnetIds?: StringProperty[]
    PublicAddressAllocationIds?: StringProperty[]
  }
  ChannelEngineVersion?: {
    Version?: StringProperty
  }
  Maintenance?: {
    MaintenanceDay?: StringProperty
    MaintenanceStartTime?: StringProperty
  }
  LogLevel?: StringProperty
  RoleArn?: StringProperty
  Name?: StringProperty
  ChannelClass?: StringProperty
  EncoderSettings?: {
    AudioDescriptions?: {
      AudioDashRoles?: StringProperty[]
      LanguageCodeControl?: StringProperty
      CodecSettings?: {
        Eac3Settings?: {
          CodingMode?: StringProperty
          SurroundMode?: StringProperty
          PassthroughControl?: StringProperty
          Dialnorm?: number
          LoRoSurroundMixLevel?: number
          PhaseControl?: StringProperty
          LtRtCenterMixLevel?: number
          LfeFilter?: StringProperty
          LfeControl?: StringProperty
          Bitrate?: number
          DrcLine?: StringProperty
          DcFilter?: StringProperty
          MetadataControl?: StringProperty
          LtRtSurroundMixLevel?: number
          LoRoCenterMixLevel?: number
          DrcRf?: StringProperty
          AttenuationControl?: StringProperty
          BitstreamMode?: StringProperty
          SurroundExMode?: StringProperty
          StereoDownmix?: StringProperty
        }
        Ac3Settings?: {
          CodingMode?: StringProperty
          DrcProfile?: StringProperty
          MetadataControl?: StringProperty
          Dialnorm?: number
          LfeFilter?: StringProperty
          BitstreamMode?: StringProperty
          AttenuationControl?: StringProperty
          Bitrate?: number
        }
        Mp2Settings?: {
          CodingMode?: StringProperty
          SampleRate?: number
          Bitrate?: number
        }
        Eac3AtmosSettings?: {
          CodingMode?: StringProperty
          Dialnorm?: number
          SurroundTrim?: number
          DrcRf?: StringProperty
          Bitrate?: number
          DrcLine?: StringProperty
          HeightTrim?: number
        }
        PassThroughSettings?: Record<string, any>
        WavSettings?: {
          CodingMode?: StringProperty
          SampleRate?: number
          BitDepth?: number
        }
        AacSettings?: {
          CodingMode?: StringProperty
          RateControlMode?: StringProperty
          SampleRate?: number
          InputType?: StringProperty
          VbrQuality?: StringProperty
          RawFormat?: StringProperty
          Spec?: StringProperty
          Bitrate?: number
          Profile?: StringProperty
        }
      }
      Name?: StringProperty
      AudioWatermarkingSettings?: {
        NielsenWatermarksSettings?: {
          NielsenNaesIiNwSettings?: {
            Timezone?: StringProperty
            CheckDigitString?: StringProperty
            Sid?: number
          }
          NielsenDistributionType?: StringProperty
          NielsenCbetSettings?: {
            CbetStepaside?: StringProperty
            CbetCheckDigitString?: StringProperty
            Csid?: StringProperty
          }
        }
      }
      AudioNormalizationSettings?: {
        TargetLkfs?: number
        Algorithm?: StringProperty
        AlgorithmControl?: StringProperty
      }
      LanguageCode?: StringProperty
      RemixSettings?: {
        ChannelsOut?: number
        ChannelsIn?: number
        ChannelMappings?: {
          InputChannelLevels?: {
            InputChannel?: number
            Gain?: number
          }[]
          OutputChannel?: number
        }[]
      }
      AudioSelectorName?: StringProperty
      StreamName?: StringProperty
      DvbDashAccessibility?: StringProperty
      AudioType?: StringProperty
      AudioTypeControl?: StringProperty
    }[]
    VideoDescriptions?: {
      ScalingBehavior?: StringProperty
      RespondToAfd?: StringProperty
      Height?: number
      Sharpness?: number
      Width?: number
      CodecSettings?: {
        FrameCaptureSettings?: {
          TimecodeBurninSettings?: {
            Prefix?: StringProperty
            FontSize?: StringProperty
            Position?: StringProperty
          }
          CaptureIntervalUnits?: StringProperty
          CaptureInterval?: number
        }
        H264Settings?: {
          TimecodeBurninSettings?: {
            Prefix?: StringProperty
            FontSize?: StringProperty
            Position?: StringProperty
          }
          NumRefFrames?: number
          TemporalAq?: StringProperty
          Slices?: number
          FramerateControl?: StringProperty
          QvbrQualityLevel?: number
          FramerateNumerator?: number
          ParControl?: StringProperty
          GopClosedCadence?: number
          FlickerAq?: StringProperty
          Profile?: StringProperty
          QualityLevel?: StringProperty
          MinBitrate?: number
          MinIInterval?: number
          SceneChangeDetect?: StringProperty
          ForceFieldPictures?: StringProperty
          FramerateDenominator?: number
          Softness?: number
          GopSize?: number
          AdaptiveQuantization?: StringProperty
          FilterSettings?: {
            TemporalFilterSettings?: {
              PostFilterSharpening?: StringProperty
              Strength?: StringProperty
            }
            BandwidthReductionFilterSettings?: {
              PostFilterSharpening?: StringProperty
              Strength?: StringProperty
            }
          }
          MinQp?: number
          ColorSpaceSettings?: {
            Rec601Settings?: Record<string, any>
            Rec709Settings?: Record<string, any>
            ColorSpacePassthroughSettings?: Record<string, any>
          }
          EntropyEncoding?: StringProperty
          SpatialAq?: StringProperty
          ParDenominator?: number
          FixedAfd?: StringProperty
          GopSizeUnits?: StringProperty
          AfdSignaling?: StringProperty
          Bitrate?: number
          ParNumerator?: number
          RateControlMode?: StringProperty
          ScanType?: StringProperty
          BufSize?: number
          TimecodeInsertion?: StringProperty
          ColorMetadata?: StringProperty
          BufFillPct?: number
          GopBReference?: StringProperty
          LookAheadRateControl?: StringProperty
          Level?: StringProperty
          MaxBitrate?: number
          Syntax?: StringProperty
          SubgopLength?: StringProperty
          GopNumBFrames?: number
        }
        Mpeg2Settings?: {
          TimecodeBurninSettings?: {
            Prefix?: StringProperty
            FontSize?: StringProperty
            Position?: StringProperty
          }
          ColorSpace?: StringProperty
          FixedAfd?: StringProperty
          GopSizeUnits?: StringProperty
          FramerateNumerator?: number
          GopClosedCadence?: number
          AfdSignaling?: StringProperty
          DisplayAspectRatio?: StringProperty
          ScanType?: StringProperty
          TimecodeInsertion?: StringProperty
          ColorMetadata?: StringProperty
          FramerateDenominator?: number
          GopSize?: number
          AdaptiveQuantization?: StringProperty
          SubgopLength?: StringProperty
          FilterSettings?: {
            TemporalFilterSettings?: {
              PostFilterSharpening?: StringProperty
              Strength?: StringProperty
            }
          }
          GopNumBFrames?: number
        }
        H265Settings?: {
          MvOverPictureBoundaries?: StringProperty
          TimecodeBurninSettings?: {
            Prefix?: StringProperty
            FontSize?: StringProperty
            Position?: StringProperty
          }
          Slices?: number
          QvbrQualityLevel?: number
          TileHeight?: number
          FramerateNumerator?: number
          GopClosedCadence?: number
          FlickerAq?: StringProperty
          Profile?: StringProperty
          MvTemporalPredictor?: StringProperty
          MinBitrate?: number
          MinIInterval?: number
          SceneChangeDetect?: StringProperty
          FramerateDenominator?: number
          GopSize?: number
          AdaptiveQuantization?: StringProperty
          TileWidth?: number
          FilterSettings?: {
            TemporalFilterSettings?: {
              PostFilterSharpening?: StringProperty
              Strength?: StringProperty
            }
            BandwidthReductionFilterSettings?: {
              PostFilterSharpening?: StringProperty
              Strength?: StringProperty
            }
          }
          MinQp?: number
          AlternativeTransferFunction?: StringProperty
          ColorSpaceSettings?: {
            Rec601Settings?: Record<string, any>
            Rec709Settings?: Record<string, any>
            ColorSpacePassthroughSettings?: Record<string, any>
            DolbyVision81Settings?: Record<string, any>
            Hdr10Settings?: {
              MaxCll?: number
              MaxFall?: number
            }
          }
          Tier?: StringProperty
          ParDenominator?: number
          FixedAfd?: StringProperty
          GopSizeUnits?: StringProperty
          TilePadding?: StringProperty
          AfdSignaling?: StringProperty
          Bitrate?: number
          ParNumerator?: number
          RateControlMode?: StringProperty
          ScanType?: StringProperty
          BufSize?: number
          TimecodeInsertion?: StringProperty
          Deblocking?: StringProperty
          ColorMetadata?: StringProperty
          LookAheadRateControl?: StringProperty
          GopBReference?: StringProperty
          Level?: StringProperty
          MaxBitrate?: number
          TreeblockSize?: StringProperty
          SubgopLength?: StringProperty
          GopNumBFrames?: number
        }
        Av1Settings?: {
          TimecodeBurninSettings?: {
            Prefix?: StringProperty
            FontSize?: StringProperty
            Position?: StringProperty
          }
          ColorSpaceSettings?: {
            Rec601Settings?: Record<string, any>
            Rec709Settings?: Record<string, any>
            ColorSpacePassthroughSettings?: Record<string, any>
            Hdr10Settings?: {
              MaxCll?: number
              MaxFall?: number
            }
          }
          QvbrQualityLevel?: number
          ParDenominator?: number
          FixedAfd?: StringProperty
          GopSizeUnits?: StringProperty
          FramerateNumerator?: number
          AfdSignaling?: StringProperty
          Bitrate?: number
          ParNumerator?: number
          RateControlMode?: StringProperty
          BufSize?: number
          MinBitrate?: number
          MinIInterval?: number
          SceneChangeDetect?: StringProperty
          FramerateDenominator?: number
          LookAheadRateControl?: StringProperty
          Level?: StringProperty
          MaxBitrate?: number
          GopSize?: number
        }
      }
      Name?: StringProperty
    }[]
    GlobalConfiguration?: {
      InputEndAction?: StringProperty
      OutputLockingSettings?: {
        EpochLockingSettings?: {
          JamSyncTime?: StringProperty
          CustomEpoch?: StringProperty
        }
        PipelineLockingSettings?: Record<string, any>
      }
      OutputTimingSource?: StringProperty
      OutputLockingMode?: StringProperty
      SupportLowFramerateInputs?: StringProperty
      InitialAudioGain?: number
      InputLossBehavior?: {
        InputLossImageType?: StringProperty
        InputLossImageSlate?: {
          PasswordParam?: StringProperty
          Username?: StringProperty
          Uri?: StringProperty
        }
        InputLossImageColor?: StringProperty
        RepeatFrameMsec?: number
        BlackFrameMsec?: number
      }
    }
    MotionGraphicsConfiguration?: {
      MotionGraphicsSettings?: {
        HtmlMotionGraphicsSettings?: Record<string, any>
      }
      MotionGraphicsInsertion?: StringProperty
    }
    ThumbnailConfiguration?: {
      State?: StringProperty
    }
    FeatureActivations?: {
      OutputStaticImageOverlayScheduleActions?: StringProperty
      InputPrepareScheduleActions?: StringProperty
    }
    CaptionDescriptions?: {
      DestinationSettings?: {
        AribDestinationSettings?: Record<string, any>
        EbuTtDDestinationSettings?: {
          FontFamily?: StringProperty
          DefaultFontSize?: number
          DefaultLineHeight?: number
          FillLineGap?: StringProperty
          StyleControl?: StringProperty
          CopyrightHolder?: StringProperty
        }
        SmpteTtDestinationSettings?: Record<string, any>
        EmbeddedPlusScte20DestinationSettings?: Record<string, any>
        TtmlDestinationSettings?: {
          StyleControl?: StringProperty
        }
        Scte20PlusEmbeddedDestinationSettings?: Record<string, any>
        DvbSubDestinationSettings?: {
          BackgroundOpacity?: number
          FontResolution?: number
          OutlineColor?: StringProperty
          FontColor?: StringProperty
          ShadowColor?: StringProperty
          ShadowOpacity?: number
          Font?: {
            PasswordParam?: StringProperty
            Username?: StringProperty
            Uri?: StringProperty
          }
          ShadowYOffset?: number
          Alignment?: StringProperty
          XPosition?: number
          FontSize?: StringProperty
          YPosition?: number
          OutlineSize?: number
          TeletextGridControl?: StringProperty
          SubtitleRows?: StringProperty
          FontOpacity?: number
          ShadowXOffset?: number
          BackgroundColor?: StringProperty
        }
        TeletextDestinationSettings?: Record<string, any>
        BurnInDestinationSettings?: {
          BackgroundOpacity?: number
          FontResolution?: number
          OutlineColor?: StringProperty
          FontColor?: StringProperty
          ShadowColor?: StringProperty
          ShadowOpacity?: number
          Font?: {
            PasswordParam?: StringProperty
            Username?: StringProperty
            Uri?: StringProperty
          }
          ShadowYOffset?: number
          Alignment?: StringProperty
          XPosition?: number
          FontSize?: StringProperty
          YPosition?: number
          OutlineSize?: number
          TeletextGridControl?: StringProperty
          SubtitleRows?: StringProperty
          FontOpacity?: number
          ShadowXOffset?: number
          BackgroundColor?: StringProperty
        }
        WebvttDestinationSettings?: {
          StyleControl?: StringProperty
        }
        EmbeddedDestinationSettings?: Record<string, any>
        RtmpCaptionInfoDestinationSettings?: Record<string, any>
        Scte27DestinationSettings?: Record<string, any>
      }
      LanguageCode?: StringProperty
      LanguageDescription?: StringProperty
      Accessibility?: StringProperty
      DvbDashAccessibility?: StringProperty
      CaptionSelectorName?: StringProperty
      CaptionDashRoles?: StringProperty[]
      Name?: StringProperty
    }[]
    AvailConfiguration?: {
      Scte35SegmentationScope?: StringProperty
      AvailSettings?: {
        Scte35SpliceInsert?: {
          AdAvailOffset?: number
          WebDeliveryAllowedFlag?: StringProperty
          NoRegionalBlackoutFlag?: StringProperty
        }
        Scte35TimeSignalApos?: {
          AdAvailOffset?: number
          WebDeliveryAllowedFlag?: StringProperty
          NoRegionalBlackoutFlag?: StringProperty
        }
        Esam?: {
          AdAvailOffset?: number
          ZoneIdentity?: StringProperty
          AcquisitionPointId?: StringProperty
          PoisEndpoint?: StringProperty
          Username?: StringProperty
          PasswordParam?: StringProperty
        }
      }
    }
    ColorCorrectionSettings?: {
      GlobalColorCorrections?: {
        OutputColorSpace?: StringProperty
        InputColorSpace?: StringProperty
        Uri?: StringProperty
      }[]
    }
    OutputGroups?: {
      Outputs?: {
        OutputSettings?: {
          MediaPackageOutputSettings?: {
            MediaPackageV2DestinationSettings?: {
              HlsDefault?: StringProperty
              AudioRenditionSets?: StringProperty
              AudioGroupId?: StringProperty
              HlsAutoSelect?: StringProperty
            }
          }
          MsSmoothOutputSettings?: {
            NameModifier?: StringProperty
            H265PackagingType?: StringProperty
          }
          FrameCaptureOutputSettings?: {
            NameModifier?: StringProperty
          }
          HlsOutputSettings?: {
            HlsSettings?: {
              Fmp4HlsSettings?: {
                AudioRenditionSets?: StringProperty
                NielsenId3Behavior?: StringProperty
                TimedMetadataBehavior?: StringProperty
              }
              FrameCaptureHlsSettings?: Record<string, any>
              StandardHlsSettings?: {
                AudioRenditionSets?: StringProperty
                M3u8Settings?: {
                  PatInterval?: number
                  ProgramNum?: number
                  PcrPeriod?: number
                  PmtInterval?: number
                  KlvDataPids?: StringProperty
                  NielsenId3Behavior?: StringProperty
                  PcrPid?: StringProperty
                  VideoPid?: StringProperty
                  AudioFramesPerPes?: number
                  TransportStreamId?: number
                  PmtPid?: StringProperty
                  Scte35Pid?: StringProperty
                  Scte35Behavior?: StringProperty
                  KlvBehavior?: StringProperty
                  EcmPid?: StringProperty
                  TimedMetadataPid?: StringProperty
                  AudioPids?: StringProperty
                  PcrControl?: StringProperty
                  TimedMetadataBehavior?: StringProperty
                }
              }
              AudioOnlyHlsSettings?: {
                SegmentType?: StringProperty
                AudioTrackType?: StringProperty
                AudioGroupId?: StringProperty
                AudioOnlyImage?: {
                  PasswordParam?: StringProperty
                  Username?: StringProperty
                  Uri?: StringProperty
                }
              }
            }
            NameModifier?: StringProperty
            H265PackagingType?: StringProperty
            SegmentModifier?: StringProperty
          }
          RtmpOutputSettings?: {
            Destination?: {
              DestinationRefId?: StringProperty
            }
            CertificateMode?: StringProperty
            NumRetries?: number
            ConnectionRetryInterval?: number
          }
          UdpOutputSettings?: {
            Destination?: {
              DestinationRefId?: StringProperty
            }
            FecOutputSettings?: {
              ColumnDepth?: number
              IncludeFec?: StringProperty
              RowLength?: number
            }
            BufferMsec?: number
            ContainerSettings?: {
              M2tsSettings?: {
                EtvPlatformPid?: StringProperty
                AribCaptionsPid?: StringProperty
                EbpPlacement?: StringProperty
                DvbSubPids?: StringProperty
                SegmentationStyle?: StringProperty
                Klv?: StringProperty
                Scte35PrerollPullupMilliseconds?: number
                TimedMetadataBehavior?: StringProperty
                DvbTeletextPid?: StringProperty
                Scte35Control?: StringProperty
                PcrPeriod?: number
                SegmentationTime?: number
                CcDescriptor?: StringProperty
                PmtPid?: StringProperty
                DvbNitSettings?: {
                  NetworkName?: StringProperty
                  NetworkId?: number
                  RepInterval?: number
                }
                EtvSignalPid?: StringProperty
                Arib?: StringProperty
                TimedMetadataPid?: StringProperty
                AudioPids?: StringProperty
                AudioBufferModel?: StringProperty
                Ebif?: StringProperty
                PcrControl?: StringProperty
                PatInterval?: number
                ProgramNum?: number
                RateMode?: StringProperty
                KlvDataPids?: StringProperty
                NullPacketBitrate?: number
                PmtInterval?: number
                EsRateInPes?: StringProperty
                VideoPid?: StringProperty
                TransportStreamId?: number
                Scte35Pid?: StringProperty
                AudioStreamType?: StringProperty
                EbpLookaheadMs?: number
                DvbTdtSettings?: {
                  RepInterval?: number
                }
                EbpAudioInterval?: StringProperty
                FragmentTime?: number
                NielsenId3Behavior?: StringProperty
                PcrPid?: StringProperty
                AudioFramesPerPes?: number
                AbsentInputAudioBehavior?: StringProperty
                Bitrate?: number
                Scte27Pids?: StringProperty
                SegmentationMarkers?: StringProperty
                DvbSdtSettings?: {
                  ServiceProviderName?: StringProperty
                  OutputSdt?: StringProperty
                  ServiceName?: StringProperty
                  RepInterval?: number
                }
                BufferModel?: StringProperty
                EcmPid?: StringProperty
                AribCaptionsPidControl?: StringProperty
              }
            }
          }
          MultiplexOutputSettings?: {
            Destination?: {
              DestinationRefId?: StringProperty
            }
            ContainerSettings?: {
              MultiplexM2tsSettings?: {
                Scte35Control?: StringProperty
                PcrPeriod?: number
                NielsenId3Behavior?: StringProperty
                EsRateInPes?: StringProperty
                CcDescriptor?: StringProperty
                AudioFramesPerPes?: number
                AbsentInputAudioBehavior?: StringProperty
                AudioStreamType?: StringProperty
                Klv?: StringProperty
                Arib?: StringProperty
                AudioBufferModel?: StringProperty
                Ebif?: StringProperty
                Scte35PrerollPullupMilliseconds?: number
                PcrControl?: StringProperty
              }
            }
          }
          CmafIngestOutputSettings?: {
            NameModifier?: StringProperty
          }
          SrtOutputSettings?: {
            EncryptionType?: StringProperty
            Destination?: {
              DestinationRefId?: StringProperty
            }
            BufferMsec?: number
            ContainerSettings?: {
              M2tsSettings?: {
                EtvPlatformPid?: StringProperty
                AribCaptionsPid?: StringProperty
                EbpPlacement?: StringProperty
                DvbSubPids?: StringProperty
                SegmentationStyle?: StringProperty
                Klv?: StringProperty
                Scte35PrerollPullupMilliseconds?: number
                TimedMetadataBehavior?: StringProperty
                DvbTeletextPid?: StringProperty
                Scte35Control?: StringProperty
                PcrPeriod?: number
                SegmentationTime?: number
                CcDescriptor?: StringProperty
                PmtPid?: StringProperty
                DvbNitSettings?: {
                  NetworkName?: StringProperty
                  NetworkId?: number
                  RepInterval?: number
                }
                EtvSignalPid?: StringProperty
                Arib?: StringProperty
                TimedMetadataPid?: StringProperty
                AudioPids?: StringProperty
                AudioBufferModel?: StringProperty
                Ebif?: StringProperty
                PcrControl?: StringProperty
                PatInterval?: number
                ProgramNum?: number
                RateMode?: StringProperty
                KlvDataPids?: StringProperty
                NullPacketBitrate?: number
                PmtInterval?: number
                EsRateInPes?: StringProperty
                VideoPid?: StringProperty
                TransportStreamId?: number
                Scte35Pid?: StringProperty
                AudioStreamType?: StringProperty
                EbpLookaheadMs?: number
                DvbTdtSettings?: {
                  RepInterval?: number
                }
                EbpAudioInterval?: StringProperty
                FragmentTime?: number
                NielsenId3Behavior?: StringProperty
                PcrPid?: StringProperty
                AudioFramesPerPes?: number
                AbsentInputAudioBehavior?: StringProperty
                Bitrate?: number
                Scte27Pids?: StringProperty
                SegmentationMarkers?: StringProperty
                DvbSdtSettings?: {
                  ServiceProviderName?: StringProperty
                  OutputSdt?: StringProperty
                  ServiceName?: StringProperty
                  RepInterval?: number
                }
                BufferModel?: StringProperty
                EcmPid?: StringProperty
                AribCaptionsPidControl?: StringProperty
              }
            }
            Latency?: number
          }
          ArchiveOutputSettings?: {
            Extension?: StringProperty
            NameModifier?: StringProperty
            ContainerSettings?: {
              M2tsSettings?: {
                EtvPlatformPid?: StringProperty
                AribCaptionsPid?: StringProperty
                EbpPlacement?: StringProperty
                DvbSubPids?: StringProperty
                SegmentationStyle?: StringProperty
                Klv?: StringProperty
                Scte35PrerollPullupMilliseconds?: number
                TimedMetadataBehavior?: StringProperty
                DvbTeletextPid?: StringProperty
                Scte35Control?: StringProperty
                PcrPeriod?: number
                SegmentationTime?: number
                CcDescriptor?: StringProperty
                PmtPid?: StringProperty
                DvbNitSettings?: {
                  NetworkName?: StringProperty
                  NetworkId?: number
                  RepInterval?: number
                }
                EtvSignalPid?: StringProperty
                Arib?: StringProperty
                TimedMetadataPid?: StringProperty
                AudioPids?: StringProperty
                AudioBufferModel?: StringProperty
                Ebif?: StringProperty
                PcrControl?: StringProperty
                PatInterval?: number
                ProgramNum?: number
                RateMode?: StringProperty
                KlvDataPids?: StringProperty
                NullPacketBitrate?: number
                PmtInterval?: number
                EsRateInPes?: StringProperty
                VideoPid?: StringProperty
                TransportStreamId?: number
                Scte35Pid?: StringProperty
                AudioStreamType?: StringProperty
                EbpLookaheadMs?: number
                DvbTdtSettings?: {
                  RepInterval?: number
                }
                EbpAudioInterval?: StringProperty
                FragmentTime?: number
                NielsenId3Behavior?: StringProperty
                PcrPid?: StringProperty
                AudioFramesPerPes?: number
                AbsentInputAudioBehavior?: StringProperty
                Bitrate?: number
                Scte27Pids?: StringProperty
                SegmentationMarkers?: StringProperty
                DvbSdtSettings?: {
                  ServiceProviderName?: StringProperty
                  OutputSdt?: StringProperty
                  ServiceName?: StringProperty
                  RepInterval?: number
                }
                BufferModel?: StringProperty
                EcmPid?: StringProperty
                AribCaptionsPidControl?: StringProperty
              }
              RawSettings?: Record<string, any>
            }
          }
        }
        CaptionDescriptionNames?: StringProperty[]
        AudioDescriptionNames?: StringProperty[]
        OutputName?: StringProperty
        VideoDescriptionName?: StringProperty
      }[]
      OutputGroupSettings?: {
        HlsGroupSettings?: {
          SegmentationMode?: StringProperty
          Destination?: {
            DestinationRefId?: StringProperty
          }
          CodecSpecification?: StringProperty
          IvSource?: StringProperty
          TimedMetadataId3Frame?: StringProperty
          KeyFormatVersions?: StringProperty
          RedundantManifest?: StringProperty
          OutputSelection?: StringProperty
          KeyProviderSettings?: {
            StaticKeySettings?: {
              KeyProviderServer?: {
                PasswordParam?: StringProperty
                Username?: StringProperty
                Uri?: StringProperty
              }
              StaticKeyValue?: StringProperty
            }
          }
          StreamInfResolution?: StringProperty
          CaptionLanguageMappings?: {
            LanguageCode?: StringProperty
            LanguageDescription?: StringProperty
            CaptionChannel?: number
          }[]
          HlsId3SegmentTagging?: StringProperty
          IFrameOnlyPlaylists?: StringProperty
          CaptionLanguageSetting?: StringProperty
          KeepSegments?: number
          ConstantIv?: StringProperty
          DirectoryStructure?: StringProperty
          EncryptionType?: StringProperty
          AdMarkers?: StringProperty[]
          HlsCdnSettings?: {
            HlsWebdavSettings?: {
              FilecacheDuration?: number
              RestartDelay?: number
              NumRetries?: number
              ConnectionRetryInterval?: number
              HttpTransferMode?: StringProperty
            }
            HlsS3Settings?: {
              CannedAcl?: StringProperty
            }
            HlsBasicPutSettings?: {
              FilecacheDuration?: number
              RestartDelay?: number
              NumRetries?: number
              ConnectionRetryInterval?: number
            }
            HlsMediaStoreSettings?: {
              FilecacheDuration?: number
              MediaStoreStorageClass?: StringProperty
              RestartDelay?: number
              NumRetries?: number
              ConnectionRetryInterval?: number
            }
            HlsAkamaiSettings?: {
              Salt?: StringProperty
              FilecacheDuration?: number
              NumRetries?: number
              Token?: StringProperty
              RestartDelay?: number
              ConnectionRetryInterval?: number
              HttpTransferMode?: StringProperty
            }
          }
          IndexNSegments?: number
          DiscontinuityTags?: StringProperty
          InputLossAction?: StringProperty
          Mode?: StringProperty
          TsFileMode?: StringProperty
          BaseUrlManifest1?: StringProperty
          ClientCache?: StringProperty
          MinSegmentLength?: number
          KeyFormat?: StringProperty
          IvInManifest?: StringProperty
          BaseUrlContent1?: StringProperty
          ProgramDateTimeClock?: StringProperty
          ManifestCompression?: StringProperty
          ManifestDurationFormat?: StringProperty
          TimedMetadataId3Period?: number
          IncompleteSegmentBehavior?: StringProperty
          ProgramDateTimePeriod?: number
          SegmentLength?: number
          TimestampDeltaMilliseconds?: number
          ProgramDateTime?: StringProperty
          SegmentsPerSubdirectory?: number
          BaseUrlContent?: StringProperty
          BaseUrlManifest?: StringProperty
        }
        FrameCaptureGroupSettings?: {
          FrameCaptureCdnSettings?: {
            FrameCaptureS3Settings?: {
              CannedAcl?: StringProperty
            }
          }
          Destination?: {
            DestinationRefId?: StringProperty
          }
        }
        MultiplexGroupSettings?: Record<string, any>
        SrtGroupSettings?: {
          InputLossAction?: StringProperty
        }
        ArchiveGroupSettings?: {
          Destination?: {
            DestinationRefId?: StringProperty
          }
          ArchiveCdnSettings?: {
            ArchiveS3Settings?: {
              CannedAcl?: StringProperty
            }
          }
          RolloverInterval?: number
        }
        MediaPackageGroupSettings?: {
          MediapackageV2GroupSettings?: {
            CaptionLanguageMappings?: {
              LanguageCode?: StringProperty
              LanguageDescription?: StringProperty
              CaptionChannel?: number
            }[]
            Scte35Type?: StringProperty
            SegmentLengthUnits?: StringProperty
            TimedMetadataId3Frame?: StringProperty
            TimedMetadataId3Period?: number
            TimedMetadataPassthrough?: StringProperty
            NielsenId3Behavior?: StringProperty
            KlvBehavior?: StringProperty
            Id3Behavior?: StringProperty
            SegmentLength?: number
          }
          Destination?: {
            DestinationRefId?: StringProperty
          }
        }
        UdpGroupSettings?: {
          TimedMetadataId3Frame?: StringProperty
          TimedMetadataId3Period?: number
          InputLossAction?: StringProperty
        }
        MsSmoothGroupSettings?: {
          SegmentationMode?: StringProperty
          Destination?: {
            DestinationRefId?: StringProperty
          }
          EventStopBehavior?: StringProperty
          FilecacheDuration?: number
          CertificateMode?: StringProperty
          AcquisitionPointId?: StringProperty
          StreamManifestBehavior?: StringProperty
          InputLossAction?: StringProperty
          FragmentLength?: number
          RestartDelay?: number
          SparseTrackType?: StringProperty
          EventIdMode?: StringProperty
          TimestampOffsetMode?: StringProperty
          AudioOnlyTimecodeControl?: StringProperty
          NumRetries?: number
          TimestampOffset?: StringProperty
          EventId?: StringProperty
          SendDelayMs?: number
          ConnectionRetryInterval?: number
        }
        RtmpGroupSettings?: {
          AuthenticationScheme?: StringProperty
          CacheLength?: number
          AdMarkers?: StringProperty[]
          IncludeFillerNalUnits?: StringProperty
          InputLossAction?: StringProperty
          RestartDelay?: number
          CaptionData?: StringProperty
          CacheFullBehavior?: StringProperty
        }
        CmafIngestGroupSettings?: {
          Destination?: {
            DestinationRefId?: StringProperty
          }
          KlvNameModifier?: StringProperty
          Scte35Type?: StringProperty
          TimedMetadataId3Frame?: StringProperty
          TimedMetadataPassthrough?: StringProperty
          NielsenId3Behavior?: StringProperty
          Scte35NameModifier?: StringProperty
          CaptionLanguageMappings?: {
            LanguageCode?: StringProperty
            CaptionChannel?: number
          }[]
          SegmentLengthUnits?: StringProperty
          TimedMetadataId3Period?: number
          AdditionalDestinations?: {
            Destination?: {
              DestinationRefId?: StringProperty
            }
          }[]
          NielsenId3NameModifier?: StringProperty
          KlvBehavior?: StringProperty
          SegmentLength?: number
          Id3Behavior?: StringProperty
          SendDelayMs?: number
          Id3NameModifier?: StringProperty
        }
      }
      Name?: StringProperty
    }[]
    AvailBlanking?: {
      State?: StringProperty
      AvailBlankingImage?: {
        PasswordParam?: StringProperty
        Username?: StringProperty
        Uri?: StringProperty
      }
    }
    NielsenConfiguration?: {
      DistributorId?: StringProperty
      NielsenPcmToId3Tagging?: StringProperty
    }
    BlackoutSlate?: {
      NetworkId?: StringProperty
      NetworkEndBlackoutImage?: {
        PasswordParam?: StringProperty
        Username?: StringProperty
        Uri?: StringProperty
      }
      NetworkEndBlackout?: StringProperty
      State?: StringProperty
      BlackoutSlateImage?: {
        PasswordParam?: StringProperty
        Username?: StringProperty
        Uri?: StringProperty
      }
    }
    TimecodeConfig?: {
      SyncThreshold?: number
      Source?: StringProperty
    }
  }
  AnywhereSettings?: {
    ChannelPlacementGroupId?: StringProperty
    ClusterId?: StringProperty
  }
  CdiInputSpecification?: {
    Resolution?: StringProperty
  }
  Id?: StringProperty
  Arn?: StringProperty
  Inputs?: StringProperty[]
  Tags?: Record<string, any>
}

export const AWSMediaLiveChannel = ({
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
      Type: 'AWS::MediaLive::Channel',
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