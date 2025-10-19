import {StringProperty} from "../StringProperty"


type Properties = {
  RouteServerId?: StringProperty
  RouteServerEndpointId: StringProperty
  Arn?: StringProperty
  Id?: StringProperty
  SubnetId?: StringProperty
  VpcId?: StringProperty
  EndpointEniId?: StringProperty
  EndpointEniAddress?: StringProperty
  PeerAddress: StringProperty
  BgpOptions: {
    PeerAsn?: number /* schema format: int64*/
    PeerLivenessDetection?: (string | "bfd" | "bgp-keepalive")
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2RouteServerPeer = ({
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
      Type: 'AWS::EC2::RouteServerPeer',
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