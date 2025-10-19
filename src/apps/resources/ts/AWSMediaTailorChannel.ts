import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Audiences?: StringProperty[]
  ChannelName: StringProperty
  FillerSlate?: {
    SourceLocationName?: StringProperty
    VodSourceName?: StringProperty
  }
  LogConfiguration?: {
    LogTypes?: (string | "AS_RUN")[]
  }
  Outputs: {
    DashPlaylistSettings?: {
      ManifestWindowSeconds?: number
      MinBufferTimeSeconds?: number
      MinUpdatePeriodSeconds?: number
      SuggestedPresentationDelaySeconds?: number
    }
    HlsPlaylistSettings?: {
      ManifestWindowSeconds?: number
      AdMarkupType?: (string | "DATERANGE" | "SCTE35_ENHANCED")[]
    }
    ManifestName: StringProperty
    SourceGroup: StringProperty
  }[]
  PlaybackMode: (string | "LOOP" | "LINEAR")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Tier?: (string | "BASIC" | "STANDARD")
  TimeShiftConfiguration?: {
    MaxTimeDelaySeconds: number
  }
}

export const AWSMediaTailorChannel = ({
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
      Type: 'AWS::MediaTailor::Channel',
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