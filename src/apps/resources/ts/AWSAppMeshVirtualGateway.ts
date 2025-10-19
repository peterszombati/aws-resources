import {StringProperty} from "../StringProperty"


type Properties = {
  Uid?: StringProperty
  VirtualGatewayName?: StringProperty
  MeshName: StringProperty
  MeshOwner?: StringProperty
  ResourceOwner?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Spec: {
    Logging?: {
      AccessLog?: {
        File?: {
          Path: StringProperty
          Format?: {
            Text?: StringProperty
            Json?: {
              Value: StringProperty
              Key: StringProperty
            }[]
          }
        }
      }
    }
    Listeners: {
      ConnectionPool?: {
        HTTP?: {
          MaxConnections: number
          MaxPendingRequests?: number
        }
        HTTP2?: {
          MaxRequests: number
        }
        GRPC?: {
          MaxRequests: number
        }
      }
      HealthCheck?: {
        Path?: StringProperty
        UnhealthyThreshold: number
        Port?: number
        HealthyThreshold: number
        TimeoutMillis: number
        Protocol: StringProperty
        IntervalMillis: number
      }
      TLS?: {
        Validation?: {
          SubjectAlternativeNames?: {
            Match: {
              Exact?: StringProperty[]
            }
          }
          Trust: {
            File?: {
              CertificateChain: StringProperty
            }
            SDS?: {
              SecretName: StringProperty
            }
          }
        }
        Mode: StringProperty
        Certificate: {
          SDS?: {
            SecretName: StringProperty
          }
          ACM?: {
            CertificateArn: StringProperty
          }
          File?: {
            CertificateChain: StringProperty
            PrivateKey: StringProperty
          }
        }
      }
      PortMapping: {
        Protocol: StringProperty
        Port: number
      }
    }[]
    BackendDefaults?: {
      ClientPolicy?: {
        TLS?: {
          Validation: {
            SubjectAlternativeNames?: {
              Match: {
                Exact?: StringProperty[]
              }
            }
            Trust: {
              SDS?: {
                SecretName: StringProperty
              }
              ACM?: {
                CertificateAuthorityArns: StringProperty[]
              }
              File?: {
                CertificateChain: StringProperty
              }
            }
          }
          Ports?: number[]
          Enforce?: boolean
          Certificate?: {
            File?: {
              CertificateChain: StringProperty
              PrivateKey: StringProperty
            }
            SDS?: {
              SecretName: StringProperty
            }
          }
        }
      }
    }
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSAppMeshVirtualGateway = ({
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
      Type: 'AWS::AppMesh::VirtualGateway',
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