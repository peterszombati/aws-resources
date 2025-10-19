import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  Type?: StringProperty
  ConfigData: {
    AntennaDownlinkConfig?: {
      SpectrumConfig?: {
        CenterFrequency?: {
          Value?: number
          Units?: (string | "GHz" | "MHz" | "kHz")
        }
        Bandwidth?: {
          Value?: number
          Units?: (string | "GHz" | "MHz" | "kHz")
        }
        Polarization?: (string | "LEFT_HAND" | "RIGHT_HAND" | "NONE")
      }
    }
    TrackingConfig?: {
      Autotrack?: (string | "REQUIRED" | "PREFERRED" | "REMOVED")
    }
    DataflowEndpointConfig?: {
      DataflowEndpointName?: StringProperty
      DataflowEndpointRegion?: StringProperty
    }
    AntennaDownlinkDemodDecodeConfig?: {
      SpectrumConfig?: {
        CenterFrequency?: {
          Value?: number
          Units?: (string | "GHz" | "MHz" | "kHz")
        }
        Bandwidth?: {
          Value?: number
          Units?: (string | "GHz" | "MHz" | "kHz")
        }
        Polarization?: (string | "LEFT_HAND" | "RIGHT_HAND" | "NONE")
      }
      DemodulationConfig?: {
        UnvalidatedJSON?: StringProperty
      }
      DecodeConfig?: {
        UnvalidatedJSON?: StringProperty
      }
    }
    AntennaUplinkConfig?: {
      SpectrumConfig?: {
        CenterFrequency?: {
          Value?: number
          Units?: (string | "GHz" | "MHz" | "kHz")
        }
        Polarization?: (string | "LEFT_HAND" | "RIGHT_HAND" | "NONE")
      }
      TargetEirp?: {
        Value?: number
        Units?: (string | "dBW")
      }
      TransmitDisabled?: boolean
    }
    UplinkEchoConfig?: {
      Enabled?: boolean
      AntennaUplinkConfigArn?: StringProperty
    }
    S3RecordingConfig?: {
      BucketArn?: StringProperty
      RoleArn?: StringProperty
      Prefix?: StringProperty
    }
  }
  Arn?: StringProperty
  Id?: StringProperty
}

export const AWSGroundStationConfig = ({
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
      Type: 'AWS::GroundStation::Config',
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