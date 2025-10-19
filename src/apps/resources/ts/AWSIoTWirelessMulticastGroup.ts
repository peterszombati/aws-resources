import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Description?: StringProperty
  LoRaWAN: {
    RfRegion: StringProperty
    DlClass: StringProperty
    NumberOfDevicesRequested?: number
    NumberOfDevicesInGroup?: number
  }
  Arn?: StringProperty
  Id?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  Status?: StringProperty
  AssociateWirelessDevice?: StringProperty
  DisassociateWirelessDevice?: StringProperty
}

export const AWSIoTWirelessMulticastGroup = ({
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
      Type: 'AWS::IoTWireless::MulticastGroup',
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