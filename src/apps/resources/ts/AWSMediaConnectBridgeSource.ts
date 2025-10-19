import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  BridgeArn: StringProperty
  FlowSource?: {
    FlowArn: StringProperty
    FlowVpcInterfaceAttachment?: {
      VpcInterfaceName?: StringProperty
    }
  }
  NetworkSource?: {
    Protocol: (string | "rtp-fec" | "rtp" | "udp")
    MulticastIp: StringProperty
    MulticastSourceSettings?: {
      MulticastSourceIp?: StringProperty
    }
    Port: number
    NetworkName: StringProperty
  }
}

export const AWSMediaConnectBridgeSource = ({
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
      Type: 'AWS::MediaConnect::BridgeSource',
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