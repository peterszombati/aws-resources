import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  NetworkInterfaceId: StringProperty
  TrafficMirrorTargetId: StringProperty
  TrafficMirrorFilterId: StringProperty
  PacketLength?: number
  SessionNumber: number
  VirtualNetworkId?: number
  Description?: StringProperty
  OwnerId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2TrafficMirrorSession = ({
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
      Type: 'AWS::EC2::TrafficMirrorSession',
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