import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Description?: StringProperty
  LoRaWAN: {
    StartTime?: StringProperty
    RfRegion: StringProperty
  }
  FirmwareUpdateImage: StringProperty
  FirmwareUpdateRole: StringProperty
  Arn?: StringProperty
  Id?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  FuotaTaskStatus?: StringProperty
  AssociateWirelessDevice?: StringProperty
  DisassociateWirelessDevice?: StringProperty
  AssociateMulticastGroup?: StringProperty
  DisassociateMulticastGroup?: StringProperty
}

export const AWSIoTWirelessFuotaTask = ({
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
      Type: 'AWS::IoTWireless::FuotaTask',
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