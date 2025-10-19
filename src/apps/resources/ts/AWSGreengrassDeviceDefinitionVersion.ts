import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  DeviceDefinitionId: StringProperty
  Devices: {
    SyncShadow?: boolean
    ThingArn: StringProperty
    Id: StringProperty
    CertificateArn: StringProperty
  }[]
}

export const AWSGreengrassDeviceDefinitionVersion = ({
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
      Type: 'AWS::Greengrass::DeviceDefinitionVersion',
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