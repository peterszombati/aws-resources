import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  BridgeArn?: StringProperty
  PlacementArn: StringProperty
  BridgeState?: (string | "CREATING" | "STANDBY" | "STARTING" | "DEPLOYING" | "ACTIVE" | "STOPPING" | "DELETING" | "DELETED" | "START_FAILED" | "START_PENDING" | "UPDATING")
  SourceFailoverConfig?: {
    State?: (string | "ENABLED" | "DISABLED")
    FailoverMode: (string | "FAILOVER")
    SourcePriority?: {
      PrimarySource?: StringProperty
    }
  }
  Outputs?: {
    NetworkOutput?: {
      Name: StringProperty
      Protocol: (string | "rtp-fec" | "rtp" | "udp")
      IpAddress: StringProperty
      Port: number
      NetworkName: StringProperty
      Ttl: number
    }
  }[]
  Sources: {
    FlowSource?: {
      Name: StringProperty
      FlowArn: StringProperty
      FlowVpcInterfaceAttachment?: {
        VpcInterfaceName?: StringProperty
      }
    }
    NetworkSource?: {
      Name: StringProperty
      Protocol: (string | "rtp-fec" | "rtp" | "udp")
      MulticastIp: StringProperty
      MulticastSourceSettings?: {
        MulticastSourceIp?: StringProperty
      }
      Port: number
      NetworkName: StringProperty
    }
  }[]
  IngressGatewayBridge?: {
    MaxBitrate: number
    MaxOutputs: number
  }
  EgressGatewayBridge?: {
    MaxBitrate: number
  }
}

export const AWSMediaConnectBridge = ({
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
      Type: 'AWS::MediaConnect::Bridge',
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