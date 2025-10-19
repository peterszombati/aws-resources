import {StringProperty} from "../StringProperty"


type Properties = {
  GatewayName: StringProperty
  GatewayPlatform: {
    GreengrassV2?: {
      CoreDeviceThingName: StringProperty
      CoreDeviceOperatingSystem?: (string | "LINUX_AARCH64" | "LINUX_AMD64" | "WINDOWS_AMD64")
    }
    SiemensIE?: {
      IotCoreThingName: StringProperty
    }
  }
  GatewayVersion?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  GatewayId?: StringProperty
  GatewayCapabilitySummaries?: {
    CapabilityNamespace: StringProperty
    CapabilityConfiguration?: StringProperty
  }[]
}

export const AWSIoTSiteWiseGateway = ({
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
      Type: 'AWS::IoTSiteWise::Gateway',
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