import {StringProperty} from "../StringProperty"


type Properties = {
  TaskRoleArn?: StringProperty
  IpcMode?: StringProperty
  InferenceAccelerators?: {
    DeviceType?: StringProperty
    DeviceName?: StringProperty
  }[]
  Memory?: StringProperty
  PlacementConstraints?: {
    Type: StringProperty
    Expression?: StringProperty
  }[]
  Cpu?: StringProperty
  RequiresCompatibilities?: StringProperty[]
  NetworkMode?: StringProperty
  PidMode?: StringProperty
  EnableFaultInjection?: boolean
  ExecutionRoleArn?: StringProperty
  RuntimePlatform?: {
    OperatingSystemFamily?: StringProperty
    CpuArchitecture?: StringProperty
  }
  ProxyConfiguration?: {
    ProxyConfigurationProperties?: {
      Value?: StringProperty
      Name?: StringProperty
    }[]
    Type?: StringProperty
    ContainerName: StringProperty
  }
  Volumes?: {
    EFSVolumeConfiguration?: {
      FilesystemId: StringProperty
      TransitEncryption?: (string | "ENABLED" | "DISABLED")
      AuthorizationConfig?: {
        IAM?: (string | "ENABLED" | "DISABLED")
        AccessPointId?: StringProperty
      }
      RootDirectory?: StringProperty
      TransitEncryptionPort?: number
    }
    Host?: {
      SourcePath?: StringProperty
    }
    ConfiguredAtLaunch?: boolean
    DockerVolumeConfiguration?: {
      DriverOpts?: Record<string, any>
      Scope?: StringProperty
      Autoprovision?: boolean
      Driver?: StringProperty
      Labels?: Record<string, any>
    }
    FSxWindowsFileServerVolumeConfiguration?: {
      AuthorizationConfig?: {
        CredentialsParameter: StringProperty
        Domain: StringProperty
      }
      FileSystemId: StringProperty
      RootDirectory: StringProperty
    }
    Name?: StringProperty
  }[]
  ContainerDefinitions?: {
    User?: StringProperty
    Secrets?: {
      ValueFrom: StringProperty
      Name: StringProperty
    }[]
    Memory?: number
    Privileged?: boolean
    HealthCheck?: {
      Command?: StringProperty[]
      Timeout?: number
      Retries?: number
      Interval?: number
      StartPeriod?: number
    }
    StartTimeout?: number
    VolumesFrom?: {
      ReadOnly?: boolean
      SourceContainer?: StringProperty
    }[]
    Cpu?: number
    EntryPoint?: StringProperty[]
    DnsServers?: StringProperty[]
    ReadonlyRootFilesystem?: boolean
    Image: StringProperty
    Essential?: boolean
    LogConfiguration?: {
      SecretOptions?: {
        ValueFrom: StringProperty
        Name: StringProperty
      }[]
      Options?: Record<string, any>
      LogDriver: StringProperty
    }
    ResourceRequirements?: {
      Type: StringProperty
      Value: StringProperty
    }[]
    EnvironmentFiles?: {
      Type?: StringProperty
      Value?: StringProperty
    }[]
    Name: StringProperty
    FirelensConfiguration?: {
      Options?: Record<string, any>
      Type?: StringProperty
    }
    DockerSecurityOptions?: StringProperty[]
    SystemControls?: {
      Value?: StringProperty
      Namespace?: StringProperty
    }[]
    Interactive?: boolean
    DnsSearchDomains?: StringProperty[]
    CredentialSpecs?: StringProperty[]
    Ulimits?: {
      SoftLimit: number
      HardLimit: number
      Name: StringProperty
    }[]
    StopTimeout?: number
    WorkingDirectory?: StringProperty
    MemoryReservation?: number
    RepositoryCredentials?: {
      CredentialsParameter?: StringProperty
    }
    ExtraHosts?: {
      Hostname?: StringProperty
      IpAddress?: StringProperty
    }[]
    Hostname?: StringProperty
    LinuxParameters?: {
      Capabilities?: {
        Add?: StringProperty[]
        Drop?: StringProperty[]
      }
      Swappiness?: number
      Tmpfs?: {
        Size: number
        ContainerPath?: StringProperty
        MountOptions?: StringProperty[]
      }[]
      SharedMemorySize?: number
      Devices?: {
        HostPath?: StringProperty
        Permissions?: StringProperty[]
        ContainerPath?: StringProperty
      }[]
      InitProcessEnabled?: boolean
      MaxSwap?: number
    }
    VersionConsistency?: (string | "enabled" | "disabled")
    RestartPolicy?: {
      IgnoredExitCodes?: number[]
      RestartAttemptPeriod?: number
      Enabled?: boolean
    }
    DisableNetworking?: boolean
    PseudoTerminal?: boolean
    MountPoints?: {
      ReadOnly?: boolean
      SourceVolume?: StringProperty
      ContainerPath?: StringProperty
    }[]
    DependsOn?: {
      Condition?: StringProperty
      ContainerName?: StringProperty
    }[]
    DockerLabels?: Record<string, any>
    PortMappings?: {
      AppProtocol?: (string | "http" | "http2" | "grpc")
      ContainerPortRange?: StringProperty
      HostPort?: number
      ContainerPort?: number
      Protocol?: StringProperty
      Name?: StringProperty
    }[]
    Command?: StringProperty[]
    Environment?: {
      Value?: StringProperty
      Name?: StringProperty
    }[]
    Links?: StringProperty[]
  }[]
  Family?: StringProperty
  EphemeralStorage?: {
    SizeInGiB?: number
  }
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  TaskDefinitionArn?: StringProperty
}

export const AWSECSTaskDefinition = ({
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
      Type: 'AWS::ECS::TaskDefinition',
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