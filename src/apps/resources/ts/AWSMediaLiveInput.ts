import {StringProperty} from "../StringProperty"


type Properties = {
  SrtSettings?: {
    SrtCallerSources?: {
      SrtListenerPort?: StringProperty
      StreamId?: StringProperty
      MinimumLatency?: number
      Decryption?: {
        Algorithm?: StringProperty
        PassphraseSecretArn?: StringProperty
      }
      SrtListenerAddress?: StringProperty
    }[]
  }
  InputNetworkLocation?: StringProperty
  Destinations?: {
    StreamName?: StringProperty
    NetworkRoutes?: {
      Cidr?: StringProperty
      Gateway?: StringProperty
    }[]
    StaticIpAddress?: StringProperty
    Network?: StringProperty
  }[]
  Vpc?: {
    SecurityGroupIds?: StringProperty[]
    SubnetIds?: StringProperty[]
  }
  MediaConnectFlows?: {
    FlowArn?: StringProperty
  }[]
  Sources?: {
    PasswordParam?: StringProperty
    Username?: StringProperty
    Url?: StringProperty
  }[]
  RoleArn?: StringProperty
  Name?: StringProperty
  Type?: StringProperty
  Smpte2110ReceiverGroupSettings?: {
    Smpte2110ReceiverGroups?: {
      SdpSettings?: {
        AudioSdps?: {
          MediaIndex?: number
          SdpUrl?: StringProperty
        }[]
        AncillarySdps?: {
          MediaIndex?: number
          SdpUrl?: StringProperty
        }[]
        VideoSdp?: {
          MediaIndex?: number
          SdpUrl?: StringProperty
        }
      }
    }[]
  }
  SdiSources?: StringProperty[]
  Id?: StringProperty
  Arn?: StringProperty
  InputSecurityGroups?: StringProperty[]
  MulticastSettings?: {
    Sources?: {
      Url?: StringProperty
      SourceIp?: StringProperty
    }[]
  }
  InputDevices?: {
    Id?: StringProperty
  }[]
  Tags?: Record<string, any>
}

export const AWSMediaLiveInput = ({
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
      Type: 'AWS::MediaLive::Input',
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