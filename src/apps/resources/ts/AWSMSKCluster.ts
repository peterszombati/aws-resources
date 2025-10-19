import {StringProperty} from "../StringProperty"


type Properties = {
  BrokerNodeGroupInfo: {
    StorageInfo?: {
      EBSStorageInfo?: {
        VolumeSize?: number
        ProvisionedThroughput?: {
          Enabled?: boolean
          VolumeThroughput?: number
        }
      }
    }
    ConnectivityInfo?: {
      PublicAccess?: {
        Type?: StringProperty
      }
      VpcConnectivity?: {
        ClientAuthentication?: {
          Tls?: {
            Enabled: boolean
          }
          Sasl?: {
            Scram?: {
              Enabled: boolean
            }
            Iam?: {
              Enabled: boolean
            }
          }
        }
      }
    }
    SecurityGroups?: StringProperty[]
    BrokerAZDistribution?: StringProperty
    ClientSubnets: StringProperty[]
    InstanceType: StringProperty
  }
  EnhancedMonitoring?: (string | "DEFAULT" | "PER_BROKER" | "PER_TOPIC_PER_BROKER" | "PER_TOPIC_PER_PARTITION")
  KafkaVersion: StringProperty
  NumberOfBrokerNodes: number
  EncryptionInfo?: {
    EncryptionAtRest?: {
      DataVolumeKMSKeyId: StringProperty
    }
    EncryptionInTransit?: {
      InCluster?: boolean
      ClientBroker?: (string | "TLS" | "TLS_PLAINTEXT" | "PLAINTEXT")
    }
  }
  OpenMonitoring?: {
    Prometheus: {
      JmxExporter?: {
        EnabledInBroker: boolean
      }
      NodeExporter?: {
        EnabledInBroker: boolean
      }
    }
  }
  ClusterName: StringProperty
  Arn?: StringProperty
  CurrentVersion?: StringProperty
  ClientAuthentication?: {
    Tls?: {
      CertificateAuthorityArnList?: StringProperty[]
      Enabled?: boolean
    }
    Sasl?: {
      Scram?: {
        Enabled: boolean
      }
      Iam?: {
        Enabled: boolean
      }
    }
    Unauthenticated?: {
      Enabled: boolean
    }
  }
  LoggingInfo?: {
    BrokerLogs: {
      S3?: {
        Enabled: boolean
        Prefix?: StringProperty
        Bucket?: StringProperty
      }
      CloudWatchLogs?: {
        LogGroup?: StringProperty
        Enabled: boolean
      }
      Firehose?: {
        Enabled: boolean
        DeliveryStream?: StringProperty
      }
    }
  }
  Tags?: Record<string, any>
  ConfigurationInfo?: {
    Revision: number
    Arn: StringProperty
  }
  StorageMode?: (string | "LOCAL" | "TIERED")
}

export const AWSMSKCluster = ({
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
      Type: 'AWS::MSK::Cluster',
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