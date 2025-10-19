import {StringProperty} from "../StringProperty"


type Properties = {
  BridgeArn: StringProperty
  NetworkOutput: {
    Protocol: (string | "rtp-fec" | "rtp" | "udp")
    IpAddress: StringProperty
    Port: number
    NetworkName: StringProperty
    Ttl: number
  }
  Name: StringProperty
}

export const AWSMediaConnectBridgeOutput = ({
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
      Type: 'AWS::MediaConnect::BridgeOutput',
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