import {StringProperty} from "../StringProperty"


type Properties = {
  PlatformVersion?: StringProperty
  PropagateTags?: (string | "SERVICE" | "TASK_DEFINITION")
  ServiceArn?: StringProperty
  PlacementStrategies?: {
    Field?: StringProperty
    Type: (string | "binpack" | "random" | "spread")
  }[]
  ServiceRegistries?: {
    ContainerName?: StringProperty
    Port?: number
    ContainerPort?: number
    RegistryArn?: StringProperty
  }[]
  VolumeConfigurations?: {
    ManagedEBSVolume?: {
      SnapshotId?: StringProperty
      VolumeType?: StringProperty
      KmsKeyId?: StringProperty
      TagSpecifications?: {
        PropagateTags?: (string | "SERVICE" | "TASK_DEFINITION")
        ResourceType: StringProperty
        Tags?: {
          Value?: StringProperty
          Key?: StringProperty
        }[]
      }[]
      FilesystemType?: StringProperty
      Encrypted?: boolean
      Throughput?: number
      VolumeInitializationRate?: number
      Iops?: number
      SizeInGiB?: number
      RoleArn: StringProperty
    }
    Name: StringProperty
  }[]
  CapacityProviderStrategy?: {
    CapacityProvider?: StringProperty
    Base?: number
    Weight?: number
  }[]
  LaunchType?: (string | "EC2" | "FARGATE" | "EXTERNAL")
  Name?: StringProperty
  AvailabilityZoneRebalancing?: (string | "ENABLED" | "DISABLED")
  SchedulingStrategy?: (string | "DAEMON" | "REPLICA")
  NetworkConfiguration?: {
    AwsvpcConfiguration?: {
      SecurityGroups?: StringProperty[]
      Subnets?: StringProperty[]
      AssignPublicIp?: (string | "DISABLED" | "ENABLED")
    }
  }
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  ForceNewDeployment?: {
    EnableForceNewDeployment: boolean
    ForceNewDeploymentNonce?: StringProperty
  }
  HealthCheckGracePeriodSeconds?: number
  EnableECSManagedTags?: boolean
  EnableExecuteCommand?: boolean
  PlacementConstraints?: {
    Type: (string | "distinctInstance" | "memberOf")
    Expression?: StringProperty
  }[]
  Cluster?: StringProperty
  LoadBalancers?: {
    TargetGroupArn?: StringProperty
    LoadBalancerName?: StringProperty
    ContainerName?: StringProperty
    ContainerPort?: number
    AdvancedConfiguration?: {
      TestListenerRule?: StringProperty
      AlternateTargetGroupArn: StringProperty
      ProductionListenerRule?: StringProperty
      RoleArn?: StringProperty
    }
  }[]
  ServiceConnectConfiguration?: {
    Services?: {
      Timeout?: {
        PerRequestTimeoutSeconds?: number
        IdleTimeoutSeconds?: number
      }
      IngressPortOverride?: number
      ClientAliases?: {
        DnsName?: StringProperty
        TestTrafficRules?: {
          Header: {
            Value?: {
              Exact: StringProperty
            }
            Name: StringProperty
          }
        }
        Port: number
      }[]
      Tls?: {
        IssuerCertificateAuthority: {
          AwsPcaAuthorityArn?: StringProperty
        }
        KmsKey?: StringProperty
        RoleArn?: StringProperty
      }
      DiscoveryName?: StringProperty
      PortName: StringProperty
    }[]
    Enabled: boolean
    LogConfiguration?: {
      SecretOptions?: {
        ValueFrom: StringProperty
        Name: StringProperty
      }[]
      Options?: Record<string, any>
      LogDriver?: StringProperty
    }
    Namespace?: StringProperty
  }
  DesiredCount?: number
  VpcLatticeConfigurations?: {
    TargetGroupArn: StringProperty
    PortName: StringProperty
    RoleArn: StringProperty
  }[]
  DeploymentController?: {
    Type?: (string | "CODE_DEPLOY" | "ECS" | "EXTERNAL")
  }
  Role?: StringProperty
  TaskDefinition?: StringProperty
  ServiceName?: StringProperty
  DeploymentConfiguration?: {
    CanaryConfiguration?: any
    BakeTimeInMinutes?: number
    LifecycleHooks?: {
      LifecycleStages: (string | "RECONCILE_SERVICE" | "PRE_SCALE_UP" | "POST_SCALE_UP" | "TEST_TRAFFIC_SHIFT" | "POST_TEST_TRAFFIC_SHIFT" | "PRODUCTION_TRAFFIC_SHIFT" | "POST_PRODUCTION_TRAFFIC_SHIFT")[]
      HookTargetArn: StringProperty
      HookDetails?: StringProperty | Record<string, any>
      RoleArn: StringProperty
    }[]
    Alarms?: {
      AlarmNames: StringProperty[]
      Enable: boolean
      Rollback: boolean
    }
    Strategy?: (string | "ROLLING" | "BLUE_GREEN" | "LINEAR" | "CANARY")
    DeploymentCircuitBreaker?: {
      Enable: boolean
      Rollback: boolean
    }
    MaximumPercent?: number
    MinimumHealthyPercent?: number
    LinearConfiguration?: any
  }
}

export const AWSECSService = ({
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
      Type: 'AWS::ECS::Service',
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