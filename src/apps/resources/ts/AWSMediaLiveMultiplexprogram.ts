import {StringProperty} from "../StringProperty"


type Properties = {
  ChannelId?: StringProperty
  MultiplexId?: StringProperty
  MultiplexProgramSettings?: {
    PreferredChannelPipeline?: (string | "CURRENTLY_ACTIVE" | "PIPELINE_0" | "PIPELINE_1")
    ProgramNumber: number
    ServiceDescriptor?: {
      ProviderName: StringProperty
      ServiceName: StringProperty
    }
    VideoSettings?: Record<string, any>
  }
  PreferredChannelPipeline?: (string | "CURRENTLY_ACTIVE" | "PIPELINE_0" | "PIPELINE_1")
  PacketIdentifiersMap?: {
    AudioPids?: number[]
    DvbSubPids?: number[]
    DvbTeletextPid?: number
    EtvPlatformPid?: number
    EtvSignalPid?: number
    KlvDataPids?: number[]
    PcrPid?: number
    PmtPid?: number
    PrivateMetadataPid?: number
    Scte27Pids?: number[]
    Scte35Pid?: number
    TimedMetadataPid?: number
    VideoPid?: number
  }
  PipelineDetails?: {
    ActiveChannelPipeline?: StringProperty
    PipelineId?: StringProperty
  }[]
  ProgramName?: StringProperty
}

export const AWSMediaLiveMultiplexprogram = ({
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
      Type: 'AWS::MediaLive::Multiplexprogram',
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