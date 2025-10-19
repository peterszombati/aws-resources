import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AvailabilityZones: StringProperty[]
  Destinations?: {
    MultiplexMediaConnectOutputDestinationSettings?: any
  }[]
  Id?: StringProperty
  MultiplexSettings: {
    MaximumVideoBufferDelayMilliseconds?: number
    TransportStreamBitrate: number
    TransportStreamId: number
    TransportStreamReservedBitrate?: number
  }
  Name: StringProperty
  PipelinesRunningCount?: number
  ProgramCount?: number
  State?: (string | "CREATING" | "CREATE_FAILED" | "IDLE" | "STARTING" | "RUNNING" | "RECOVERING" | "STOPPING" | "DELETING" | "DELETED")
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSMediaLiveMultiplex = ({
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
      Type: 'AWS::MediaLive::Multiplex',
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