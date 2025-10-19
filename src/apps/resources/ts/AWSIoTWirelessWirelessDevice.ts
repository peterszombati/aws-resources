import {StringProperty} from "../StringProperty"


type Properties = {
  Type: (string | "Sidewalk" | "LoRaWAN")
  Name?: StringProperty
  Description?: StringProperty
  DestinationName: StringProperty
  LoRaWAN?: {
    DevEui?: StringProperty
    DeviceProfileId?: StringProperty
    ServiceProfileId?: StringProperty
    OtaaV11?: {
      AppKey: StringProperty
      NwkKey: StringProperty
      JoinEui: StringProperty
    }
    OtaaV10x?: {
      AppKey: StringProperty
      AppEui: StringProperty
    }
    AbpV11?: {
      DevAddr: StringProperty
      SessionKeys: {
        FNwkSIntKey: StringProperty
        SNwkSIntKey: StringProperty
        NwkSEncKey: StringProperty
        AppSKey: StringProperty
      }
    }
    AbpV10x?: {
      DevAddr: StringProperty
      SessionKeys: {
        NwkSKey: StringProperty
        AppSKey: StringProperty
      }
    }
    FPorts?: {
      Applications?: {
        DestinationName?: StringProperty
        FPort?: number
        Type?: (string | "SemtechGeolocation" | "SemtechGNSS" | "SemtechGNSSNG" | "SemtechWiFi")
      }[]
    }
  }
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  Arn?: StringProperty
  Id?: StringProperty
  ThingArn?: StringProperty
  ThingName?: StringProperty
  LastUplinkReceivedAt?: StringProperty
  Positioning?: (string | "Enabled" | "Disabled")
}

export const AWSIoTWirelessWirelessDevice = ({
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
      Type: 'AWS::IoTWireless::WirelessDevice',
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