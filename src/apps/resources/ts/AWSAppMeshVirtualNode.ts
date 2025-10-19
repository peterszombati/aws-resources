import {StringProperty} from "../StringProperty"


type Properties = {
  Uid?: StringProperty
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
    Backends?: {
      VirtualService?: {
        VirtualServiceName: StringProperty
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
    }[]
    Listeners?: {
      ConnectionPool?: {
        TCP?: {
          MaxConnections: number
        }
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
      Timeout?: {
        TCP?: {
          Idle?: {
            Value: number
            Unit: StringProperty
          }
        }
        HTTP?: {
          PerRequest?: {
            Value: number
            Unit: StringProperty
          }
          Idle?: {
            Value: number
            Unit: StringProperty
          }
        }
        HTTP2?: {
          PerRequest?: {
            Value: number
            Unit: StringProperty
          }
          Idle?: {
            Value: number
            Unit: StringProperty
          }
        }
        GRPC?: {
          PerRequest?: {
            Value: number
            Unit: StringProperty
          }
          Idle?: {
            Value: number
            Unit: StringProperty
          }
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
      OutlierDetection?: {
        MaxEjectionPercent: number
        BaseEjectionDuration: {
          Value: number
          Unit: StringProperty
        }
        MaxServerErrors: number
        Interval: {
          Value: number
          Unit: StringProperty
        }
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
    ServiceDiscovery?: {
      DNS?: {
        Hostname: StringProperty
        IpPreference?: StringProperty
        ResponseType?: StringProperty
      }
      AWSCloudMap?: {
        Attributes?: {
          Value: StringProperty
          Key: StringProperty
        }[]
        NamespaceName: StringProperty
        ServiceName: StringProperty
        IpPreference?: StringProperty
      }
    }
  }
  VirtualNodeName?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSAppMeshVirtualNode = ({
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
      Type: 'AWS::AppMesh::VirtualNode',
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