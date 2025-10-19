import {StringProperty} from "../StringProperty"


type Properties = {
  AdConditioningConfiguration?: {
    StreamingMediaFileConditioning: (string | "TRANSCODE" | "NONE")
  }
  AdDecisionServerUrl: StringProperty
  AvailSuppression?: {
    Mode?: (string | "OFF" | "BEHIND_LIVE_EDGE" | "AFTER_LIVE_EDGE")
    Value?: StringProperty
    FillPolicy?: (string | "PARTIAL_AVAIL" | "FULL_AVAIL_ONLY")
  }
  Bumper?: {
    StartUrl?: StringProperty
    EndUrl?: StringProperty
  }
  CdnConfiguration?: {
    AdSegmentUrlPrefix?: StringProperty
    ContentSegmentUrlPrefix?: StringProperty
  }
  ConfigurationAliases?: any
  DashConfiguration?: {
    MpdLocation?: StringProperty
    OriginManifestType?: (string | "SINGLE_PERIOD" | "MULTI_PERIOD")
    ManifestEndpointPrefix?: StringProperty
  }
  InsertionMode?: (string | "STITCHED_ONLY" | "PLAYER_SELECT")
  LivePreRollConfiguration?: {
    AdDecisionServerUrl?: StringProperty
    MaxDurationSeconds?: number
  }
  ManifestProcessingRules?: {
    AdMarkerPassthrough?: {
      Enabled?: boolean
    }
  }
  Name: StringProperty
  PersonalizationThresholdSeconds?: number
  SessionInitializationEndpointPrefix?: StringProperty
  HlsConfiguration?: {
    ManifestEndpointPrefix?: StringProperty
  }
  LogConfiguration?: {
    AdsInteractionLog?: {
      ExcludeEventTypes?: StringProperty[]
      PublishOptInEventTypes?: StringProperty[]
    }
    EnabledLoggingStrategies?: StringProperty[]
    ManifestServiceInteractionLog?: {
      ExcludeEventTypes?: StringProperty[]
    }
    PercentEnabled: number
  }
  PlaybackConfigurationArn?: StringProperty
  PlaybackEndpointPrefix?: StringProperty
  SlateAdUrl?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TranscodeProfileName?: StringProperty
  VideoContentSourceUrl: StringProperty
}

export const AWSMediaTailorPlaybackConfiguration = ({
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
      Type: 'AWS::MediaTailor::PlaybackConfiguration',
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