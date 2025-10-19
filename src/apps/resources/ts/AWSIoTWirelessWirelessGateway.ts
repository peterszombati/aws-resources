import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Description?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  LoRaWAN: {
    GatewayEui: StringProperty
    RfRegion: StringProperty
  }
  Arn?: StringProperty
  Id?: StringProperty
  ThingArn?: StringProperty
  ThingName?: StringProperty
  LastUplinkReceivedAt?: StringProperty
}

export const AWSIoTWirelessWirelessGateway = ({
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
      Type: 'AWS::IoTWireless::WirelessGateway',
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