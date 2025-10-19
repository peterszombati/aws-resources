import {StringProperty} from "../StringProperty"


type Properties = {
  Uid?: StringProperty
  MeshName: StringProperty
  VirtualGatewayName: StringProperty
  MeshOwner?: StringProperty
  ResourceOwner?: StringProperty
  GatewayRouteName?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Spec: {
    HttpRoute?: {
      Action: {
        Target: {
          VirtualService: {
            VirtualServiceName: StringProperty
          }
          Port?: number
        }
        Rewrite?: {
          Path?: {
            Exact?: StringProperty
          }
          Hostname?: {
            DefaultTargetHostname?: StringProperty
          }
          Prefix?: {
            Value?: StringProperty
            DefaultPrefix?: StringProperty
          }
        }
      }
      Match: {
        Path?: {
          Regex?: StringProperty
          Exact?: StringProperty
        }
        Headers?: {
          Invert?: boolean
          Name: StringProperty
          Match?: {
            Suffix?: StringProperty
            Exact?: StringProperty
            Prefix?: StringProperty
            Regex?: StringProperty
            Range?: {
              Start: number
              End: number
            }
          }
        }[]
        Port?: number
        Hostname?: {
          Suffix?: StringProperty
          Exact?: StringProperty
        }
        Prefix?: StringProperty
        Method?: StringProperty
        QueryParameters?: {
          Name: StringProperty
          Match?: {
            Exact?: StringProperty
          }
        }[]
      }
    }
    Http2Route?: {
      Action: {
        Target: {
          VirtualService: {
            VirtualServiceName: StringProperty
          }
          Port?: number
        }
        Rewrite?: {
          Path?: {
            Exact?: StringProperty
          }
          Hostname?: {
            DefaultTargetHostname?: StringProperty
          }
          Prefix?: {
            Value?: StringProperty
            DefaultPrefix?: StringProperty
          }
        }
      }
      Match: {
        Path?: {
          Regex?: StringProperty
          Exact?: StringProperty
        }
        Headers?: {
          Invert?: boolean
          Name: StringProperty
          Match?: {
            Suffix?: StringProperty
            Exact?: StringProperty
            Prefix?: StringProperty
            Regex?: StringProperty
            Range?: {
              Start: number
              End: number
            }
          }
        }[]
        Port?: number
        Hostname?: {
          Suffix?: StringProperty
          Exact?: StringProperty
        }
        Prefix?: StringProperty
        Method?: StringProperty
        QueryParameters?: {
          Name: StringProperty
          Match?: {
            Exact?: StringProperty
          }
        }[]
      }
    }
    GrpcRoute?: {
      Action: {
        Target: {
          VirtualService: {
            VirtualServiceName: StringProperty
          }
          Port?: number
        }
        Rewrite?: {
          Hostname?: {
            DefaultTargetHostname?: StringProperty
          }
        }
      }
      Match: {
        Hostname?: {
          Suffix?: StringProperty
          Exact?: StringProperty
        }
        Metadata?: {
          Invert?: boolean
          Name: StringProperty
          Match?: {
            Suffix?: StringProperty
            Exact?: StringProperty
            Prefix?: StringProperty
            Regex?: StringProperty
            Range?: {
              Start: number
              End: number
            }
          }
        }[]
        ServiceName?: StringProperty
        Port?: number
      }
    }
    Priority?: number
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSAppMeshGatewayRoute = ({
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
      Type: 'AWS::AppMesh::GatewayRoute',
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