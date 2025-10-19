import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name?: StringProperty
  Authorized?: boolean
  InsecureIngest?: boolean
  LatencyMode?: (string | "NORMAL" | "LOW")
  Type?: (string | "STANDARD" | "BASIC" | "ADVANCED_SD" | "ADVANCED_HD")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  PlaybackUrl?: StringProperty
  IngestEndpoint?: StringProperty
  RecordingConfigurationArn?: StringProperty
  Preset?: (string | "" | "HIGHER_BANDWIDTH_DELIVERY" | "CONSTRAINED_BANDWIDTH_DELIVERY")
  MultitrackInputConfiguration?: {
    Enabled?: boolean
    MaximumResolution?: (string | "SD" | "HD" | "FULL_HD")
    Policy?: (string | "ALLOW" | "REQUIRE")
  }
  ContainerFormat?: (string | "TS" | "FRAGMENTED_MP4")
}

export const AWSIVSChannel = ({
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
      Type: 'AWS::IVS::Channel',
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