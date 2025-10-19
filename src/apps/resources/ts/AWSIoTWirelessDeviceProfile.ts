import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  LoRaWAN?: {
    SupportsClassB?: boolean
    ClassBTimeout?: number
    PingSlotPeriod?: number
    PingSlotDr?: number
    PingSlotFreq?: number
    SupportsClassC?: boolean
    ClassCTimeout?: number
    MacVersion?: StringProperty
    RegParamsRevision?: StringProperty
    RxDelay1?: number
    RxDrOffset1?: number
    RxFreq2?: number
    RxDataRate2?: number
    FactoryPresetFreqsList?: number[]
    MaxEirp?: number
    MaxDutyCycle?: number
    SupportsJoin?: boolean
    RfRegion?: StringProperty
    Supports32BitFCnt?: boolean
  }
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  Arn?: StringProperty
  Id?: StringProperty
}

export const AWSIoTWirelessDeviceProfile = ({
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
      Type: 'AWS::IoTWireless::DeviceProfile',
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