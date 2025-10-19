import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name?: StringProperty
  AutoParticipantRecordingConfiguration?: {
    StorageConfigurationArn: StringProperty
    MediaTypes?: (string | "AUDIO_VIDEO" | "AUDIO_ONLY")[]
    HlsConfiguration?: {
      ParticipantRecordingHlsConfiguration?: {
        TargetSegmentDurationSeconds?: number
      }
    }
    RecordingReconnectWindowSeconds?: number
    ThumbnailConfiguration?: {
      ParticipantThumbnailConfiguration?: {
        RecordingMode?: (string | "INTERVAL" | "DISABLED")
        Storage?: (string | "SEQUENTIAL" | "LATEST")[]
        TargetIntervalSeconds?: number
      }
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ActiveSessionId?: StringProperty
}

export const AWSIVSStage = ({
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
      Type: 'AWS::IVS::Stage',
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