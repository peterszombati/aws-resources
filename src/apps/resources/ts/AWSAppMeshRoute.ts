import {StringProperty} from "../StringProperty"


type Properties = {
  Uid?: StringProperty
  MeshName: StringProperty
  VirtualRouterName: StringProperty
  MeshOwner?: StringProperty
  ResourceOwner?: StringProperty
  RouteName?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Spec: {
    HttpRoute?: {
      Action: {
        WeightedTargets: {
          VirtualNode: StringProperty
          Weight: number
          Port?: number
        }[]
      }
      RetryPolicy?: {
        MaxRetries: number
        TcpRetryEvents?: StringProperty[]
        PerRetryTimeout: {
          Value: number
          Unit: StringProperty
        }
        HttpRetryEvents?: StringProperty[]
      }
      Timeout?: {
        PerRequest?: {
          Value: number
          Unit: StringProperty
        }
        Idle?: {
          Value: number
          Unit: StringProperty
        }
      }
      Match: {
        Path?: {
          Regex?: StringProperty
          Exact?: StringProperty
        }
        Scheme?: StringProperty
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
        WeightedTargets: {
          VirtualNode: StringProperty
          Weight: number
          Port?: number
        }[]
      }
      RetryPolicy?: {
        MaxRetries: number
        TcpRetryEvents?: StringProperty[]
        PerRetryTimeout: {
          Value: number
          Unit: StringProperty
        }
        HttpRetryEvents?: StringProperty[]
      }
      Timeout?: {
        PerRequest?: {
          Value: number
          Unit: StringProperty
        }
        Idle?: {
          Value: number
          Unit: StringProperty
        }
      }
      Match: {
        Path?: {
          Regex?: StringProperty
          Exact?: StringProperty
        }
        Scheme?: StringProperty
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
        WeightedTargets: {
          VirtualNode: StringProperty
          Weight: number
          Port?: number
        }[]
      }
      RetryPolicy?: {
        MaxRetries: number
        TcpRetryEvents?: StringProperty[]
        PerRetryTimeout: {
          Value: number
          Unit: StringProperty
        }
        GrpcRetryEvents?: StringProperty[]
        HttpRetryEvents?: StringProperty[]
      }
      Timeout?: {
        PerRequest?: {
          Value: number
          Unit: StringProperty
        }
        Idle?: {
          Value: number
          Unit: StringProperty
        }
      }
      Match: {
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
        MethodName?: StringProperty
        ServiceName?: StringProperty
        Port?: number
      }
    }
    TcpRoute?: {
      Action: {
        WeightedTargets: {
          VirtualNode: StringProperty
          Weight: number
          Port?: number
        }[]
      }
      Timeout?: {
        Idle?: {
          Value: number
          Unit: StringProperty
        }
      }
      Match?: {
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

export const AWSAppMeshRoute = ({
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
      Type: 'AWS::AppMesh::Route',
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