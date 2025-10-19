import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  LoRaWAN?: {
    UlRate?: number
    UlBucketSize?: number
    UlRatePolicy?: StringProperty
    DlRate?: number
    DlBucketSize?: number
    DlRatePolicy?: StringProperty
    AddGwMetadata?: boolean
    DevStatusReqFreq?: number
    ReportDevStatusBattery?: boolean
    ReportDevStatusMargin?: boolean
    DrMin?: number
    DrMax?: number
    ChannelMask?: StringProperty
    PrAllowed?: boolean
    HrAllowed?: boolean
    RaAllowed?: boolean
    NwkGeoLoc?: boolean
    TargetPer?: number
    MinGwDiversity?: number
  }
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  Arn?: StringProperty
  Id?: StringProperty
}

export const AWSIoTWirelessServiceProfile = ({
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
      Type: 'AWS::IoTWireless::ServiceProfile',
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