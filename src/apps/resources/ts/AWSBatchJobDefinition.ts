import {StringProperty} from "../StringProperty"


type Properties = {
  ContainerProperties?: {
    Command?: StringProperty[]
    Environment?: {
      Name?: StringProperty
      Value?: StringProperty
    }[]
    Image: StringProperty
    JobRoleArn?: StringProperty
    Memory?: number
    MountPoints?: {
      ContainerPath?: StringProperty
      ReadOnly?: boolean
      SourceVolume?: StringProperty
    }[]
    Privileged?: boolean
    ReadonlyRootFilesystem?: boolean
    Ulimits?: {
      HardLimit: number
      Name: StringProperty
      SoftLimit: number
    }[]
    User?: StringProperty
    Vcpus?: number
    Volumes?: {
      Host?: {
        SourcePath?: StringProperty
      }
      EfsVolumeConfiguration?: {
        FileSystemId: StringProperty
        RootDirectory?: StringProperty
        TransitEncryption?: StringProperty
        TransitEncryptionPort?: number
        AuthorizationConfig?: {
          AccessPointId?: StringProperty
          Iam?: StringProperty
        }
      }
      Name?: StringProperty
    }[]
    ResourceRequirements?: {
      Type?: StringProperty
      Value?: StringProperty
    }[]
    LinuxParameters?: {
      Devices?: {
        HostPath?: StringProperty
        ContainerPath?: StringProperty
        Permissions?: StringProperty[]
      }[]
      InitProcessEnabled?: boolean
      MaxSwap?: number
      Swappiness?: number
      SharedMemorySize?: number
      Tmpfs?: {
        ContainerPath: StringProperty
        Size: number
        MountOptions?: StringProperty[]
      }[]
    }
    LogConfiguration?: {
      LogDriver: StringProperty
      Options?: Record<string, any>
      SecretOptions?: {
        Name: StringProperty
        ValueFrom: StringProperty
      }[]
    }
    ExecutionRoleArn?: StringProperty
    Secrets?: {
      Name: StringProperty
      ValueFrom: StringProperty
    }[]
    NetworkConfiguration?: {
      AssignPublicIp?: StringProperty
    }
    FargatePlatformConfiguration?: {
      PlatformVersion?: StringProperty
    }
    EphemeralStorage?: {
      SizeInGiB: number
    }
    RuntimePlatform?: {
      OperatingSystemFamily?: StringProperty
      CpuArchitecture?: StringProperty
    }
    RepositoryCredentials?: {
      CredentialsParameter: StringProperty
    }
    EnableExecuteCommand?: boolean
  }
  EcsProperties?: {
    TaskProperties: {
      Containers?: {
        Command?: StringProperty[]
        Environment?: {
          Name?: StringProperty
          Value?: StringProperty
        }[]
        DependsOn?: {
          ContainerName: StringProperty
          Condition: StringProperty
        }[]
        Name?: StringProperty
        Image: StringProperty
        LinuxParameters?: {
          Devices?: {
            HostPath?: StringProperty
            ContainerPath?: StringProperty
            Permissions?: StringProperty[]
          }[]
          InitProcessEnabled?: boolean
          MaxSwap?: number
          Swappiness?: number
          SharedMemorySize?: number
          Tmpfs?: {
            ContainerPath: StringProperty
            Size: number
            MountOptions?: StringProperty[]
          }[]
        }
        LogConfiguration?: {
          LogDriver: StringProperty
          Options?: Record<string, any>
          SecretOptions?: {
            Name: StringProperty
            ValueFrom: StringProperty
          }[]
        }
        MountPoints?: {
          ContainerPath?: StringProperty
          ReadOnly?: boolean
          SourceVolume?: StringProperty
        }[]
        Essential?: boolean
        Privileged?: boolean
        ReadonlyRootFilesystem?: boolean
        Ulimits?: {
          HardLimit: number
          Name: StringProperty
          SoftLimit: number
        }[]
        User?: StringProperty
        Secrets?: {
          Name: StringProperty
          ValueFrom: StringProperty
        }[]
        RepositoryCredentials?: {
          CredentialsParameter: StringProperty
        }
        ResourceRequirements?: {
          Type?: StringProperty
          Value?: StringProperty
        }[]
        FirelensConfiguration?: {
          Type: StringProperty
          Options?: Record<string, any>
        }
      }[]
      EphemeralStorage?: {
        SizeInGiB: number
      }
      ExecutionRoleArn?: StringProperty
      RuntimePlatform?: {
        OperatingSystemFamily?: StringProperty
        CpuArchitecture?: StringProperty
      }
      NetworkConfiguration?: {
        AssignPublicIp?: StringProperty
      }
      Volumes?: {
        Host?: {
          SourcePath?: StringProperty
        }
        EfsVolumeConfiguration?: {
          FileSystemId: StringProperty
          RootDirectory?: StringProperty
          TransitEncryption?: StringProperty
          TransitEncryptionPort?: number
          AuthorizationConfig?: {
            AccessPointId?: StringProperty
            Iam?: StringProperty
          }
        }
        Name?: StringProperty
      }[]
      PidMode?: StringProperty
      IpcMode?: StringProperty
      PlatformVersion?: StringProperty
      TaskRoleArn?: StringProperty
      EnableExecuteCommand?: boolean
    }[]
  }
  NodeProperties?: {
    NumNodes: number
    MainNode: number
    NodeRangeProperties: {
      TargetNodes: StringProperty
      Container?: {
        Command?: StringProperty[]
        Environment?: {
          Name?: StringProperty
          Value?: StringProperty
        }[]
        Image: StringProperty
        JobRoleArn?: StringProperty
        Memory?: number
        MountPoints?: {
          ContainerPath?: StringProperty
          ReadOnly?: boolean
          SourceVolume?: StringProperty
        }[]
        Privileged?: boolean
        ReadonlyRootFilesystem?: boolean
        Ulimits?: {
          HardLimit: number
          Name: StringProperty
          SoftLimit: number
        }[]
        User?: StringProperty
        Vcpus?: number
        Volumes?: {
          Host?: {
            SourcePath?: StringProperty
          }
          EfsVolumeConfiguration?: {
            FileSystemId: StringProperty
            RootDirectory?: StringProperty
            TransitEncryption?: StringProperty
            TransitEncryptionPort?: number
            AuthorizationConfig?: {
              AccessPointId?: StringProperty
              Iam?: StringProperty
            }
          }
          Name?: StringProperty
        }[]
        InstanceType?: StringProperty
        ResourceRequirements?: {
          Type?: StringProperty
          Value?: StringProperty
        }[]
        LinuxParameters?: {
          Devices?: {
            HostPath?: StringProperty
            ContainerPath?: StringProperty
            Permissions?: StringProperty[]
          }[]
          InitProcessEnabled?: boolean
          MaxSwap?: number
          Swappiness?: number
          SharedMemorySize?: number
          Tmpfs?: {
            ContainerPath: StringProperty
            Size: number
            MountOptions?: StringProperty[]
          }[]
        }
        LogConfiguration?: {
          LogDriver: StringProperty
          Options?: Record<string, any>
          SecretOptions?: {
            Name: StringProperty
            ValueFrom: StringProperty
          }[]
        }
        ExecutionRoleArn?: StringProperty
        Secrets?: {
          Name: StringProperty
          ValueFrom: StringProperty
        }[]
        EphemeralStorage?: {
          SizeInGiB: number
        }
        RuntimePlatform?: {
          OperatingSystemFamily?: StringProperty
          CpuArchitecture?: StringProperty
        }
        RepositoryCredentials?: {
          CredentialsParameter: StringProperty
        }
        EnableExecuteCommand?: boolean
      }
      EcsProperties?: {
        TaskProperties: {
          Containers?: {
            Command?: StringProperty[]
            Environment?: {
              Name?: StringProperty
              Value?: StringProperty
            }[]
            DependsOn?: {
              ContainerName: StringProperty
              Condition: StringProperty
            }[]
            Name?: StringProperty
            Image: StringProperty
            LinuxParameters?: {
              Devices?: {
                HostPath?: StringProperty
                ContainerPath?: StringProperty
                Permissions?: StringProperty[]
              }[]
              InitProcessEnabled?: boolean
              MaxSwap?: number
              Swappiness?: number
              SharedMemorySize?: number
              Tmpfs?: {
                ContainerPath: StringProperty
                Size: number
                MountOptions?: StringProperty[]
              }[]
            }
            LogConfiguration?: {
              LogDriver: StringProperty
              Options?: Record<string, any>
              SecretOptions?: {
                Name: StringProperty
                ValueFrom: StringProperty
              }[]
            }
            MountPoints?: {
              ContainerPath?: StringProperty
              ReadOnly?: boolean
              SourceVolume?: StringProperty
            }[]
            Essential?: boolean
            Privileged?: boolean
            ReadonlyRootFilesystem?: boolean
            Ulimits?: {
              HardLimit: number
              Name: StringProperty
              SoftLimit: number
            }[]
            User?: StringProperty
            Secrets?: {
              Name: StringProperty
              ValueFrom: StringProperty
            }[]
            RepositoryCredentials?: {
              CredentialsParameter: StringProperty
            }
            ResourceRequirements?: {
              Type?: StringProperty
              Value?: StringProperty
            }[]
            FirelensConfiguration?: {
              Type: StringProperty
              Options?: Record<string, any>
            }
          }[]
          ExecutionRoleArn?: StringProperty
          Volumes?: {
            Host?: {
              SourcePath?: StringProperty
            }
            EfsVolumeConfiguration?: {
              FileSystemId: StringProperty
              RootDirectory?: StringProperty
              TransitEncryption?: StringProperty
              TransitEncryptionPort?: number
              AuthorizationConfig?: {
                AccessPointId?: StringProperty
                Iam?: StringProperty
              }
            }
            Name?: StringProperty
          }[]
          PidMode?: StringProperty
          IpcMode?: StringProperty
          TaskRoleArn?: StringProperty
          EnableExecuteCommand?: boolean
        }[]
      }
      EksProperties?: {
        PodProperties?: {
          ServiceAccountName?: StringProperty
          HostNetwork?: boolean
          DnsPolicy?: StringProperty
          InitContainers?: {
            Name?: StringProperty
            Image: StringProperty
            ImagePullPolicy?: StringProperty
            Command?: StringProperty[]
            Args?: StringProperty[]
            Env?: {
              Name: StringProperty
              Value?: StringProperty
            }[]
            Resources?: {
              Limits?: Record<string, any>
              Requests?: Record<string, any>
            }
            VolumeMounts?: {
              Name?: StringProperty
              MountPath?: StringProperty
              SubPath?: StringProperty
              ReadOnly?: boolean
            }[]
            SecurityContext?: {
              RunAsUser?: number
              RunAsGroup?: number
              Privileged?: boolean
              AllowPrivilegeEscalation?: boolean
              ReadOnlyRootFilesystem?: boolean
              RunAsNonRoot?: boolean
            }
          }[]
          Containers?: {
            Name?: StringProperty
            Image: StringProperty
            ImagePullPolicy?: StringProperty
            Command?: StringProperty[]
            Args?: StringProperty[]
            Env?: {
              Name: StringProperty
              Value?: StringProperty
            }[]
            Resources?: {
              Limits?: Record<string, any>
              Requests?: Record<string, any>
            }
            VolumeMounts?: {
              Name?: StringProperty
              MountPath?: StringProperty
              SubPath?: StringProperty
              ReadOnly?: boolean
            }[]
            SecurityContext?: {
              RunAsUser?: number
              RunAsGroup?: number
              Privileged?: boolean
              AllowPrivilegeEscalation?: boolean
              ReadOnlyRootFilesystem?: boolean
              RunAsNonRoot?: boolean
            }
          }[]
          Volumes?: {
            Name: StringProperty
            HostPath?: {
              Path?: StringProperty
            }
            EmptyDir?: {
              Medium?: StringProperty
              SizeLimit?: StringProperty
            }
            Secret?: {
              SecretName: StringProperty
              Optional?: boolean
            }
            PersistentVolumeClaim?: {
              ClaimName: StringProperty
              ReadOnly?: boolean
            }
          }[]
          ImagePullSecrets?: {
            Name?: StringProperty
          }[]
          Metadata?: {
            Labels?: Record<string, any>
            Annotations?: Record<string, any>
            Namespace?: StringProperty
          }
          ShareProcessNamespace?: boolean
        }
      }
      ConsumableResourceProperties?: {
        ConsumableResourceList: {
          ConsumableResource: StringProperty
          Quantity: number /* schema format: int64*/
        }[]
      }
      InstanceTypes?: StringProperty[]
    }[]
  }
  JobDefinitionName?: StringProperty
  JobDefinitionArn?: StringProperty
  SchedulingPriority?: number
  Parameters?: Record<string, any>
  PlatformCapabilities?: StringProperty[]
  PropagateTags?: boolean
  RetryStrategy?: {
    Attempts?: number
    EvaluateOnExit?: {
      OnExitCode?: StringProperty
      OnStatusReason?: StringProperty
      OnReason?: StringProperty
      Action: StringProperty
    }[]
  }
  Timeout?: {
    AttemptDurationSeconds?: number
  }
  Type: StringProperty
  Tags?: Record<string, any>
  EksProperties?: {
    PodProperties?: {
      ServiceAccountName?: StringProperty
      HostNetwork?: boolean
      DnsPolicy?: StringProperty
      InitContainers?: {
        Name?: StringProperty
        Image: StringProperty
        ImagePullPolicy?: StringProperty
        Command?: StringProperty[]
        Args?: StringProperty[]
        Env?: {
          Name: StringProperty
          Value?: StringProperty
        }[]
        Resources?: {
          Limits?: Record<string, any>
          Requests?: Record<string, any>
        }
        VolumeMounts?: {
          Name?: StringProperty
          MountPath?: StringProperty
          SubPath?: StringProperty
          ReadOnly?: boolean
        }[]
        SecurityContext?: {
          RunAsUser?: number
          RunAsGroup?: number
          Privileged?: boolean
          AllowPrivilegeEscalation?: boolean
          ReadOnlyRootFilesystem?: boolean
          RunAsNonRoot?: boolean
        }
      }[]
      Containers?: {
        Name?: StringProperty
        Image: StringProperty
        ImagePullPolicy?: StringProperty
        Command?: StringProperty[]
        Args?: StringProperty[]
        Env?: {
          Name: StringProperty
          Value?: StringProperty
        }[]
        Resources?: {
          Limits?: Record<string, any>
          Requests?: Record<string, any>
        }
        VolumeMounts?: {
          Name?: StringProperty
          MountPath?: StringProperty
          SubPath?: StringProperty
          ReadOnly?: boolean
        }[]
        SecurityContext?: {
          RunAsUser?: number
          RunAsGroup?: number
          Privileged?: boolean
          AllowPrivilegeEscalation?: boolean
          ReadOnlyRootFilesystem?: boolean
          RunAsNonRoot?: boolean
        }
      }[]
      Volumes?: {
        Name: StringProperty
        HostPath?: {
          Path?: StringProperty
        }
        EmptyDir?: {
          Medium?: StringProperty
          SizeLimit?: StringProperty
        }
        Secret?: {
          SecretName: StringProperty
          Optional?: boolean
        }
        PersistentVolumeClaim?: {
          ClaimName: StringProperty
          ReadOnly?: boolean
        }
      }[]
      ImagePullSecrets?: {
        Name?: StringProperty
      }[]
      Metadata?: {
        Labels?: Record<string, any>
        Annotations?: Record<string, any>
        Namespace?: StringProperty
      }
      ShareProcessNamespace?: boolean
    }
  }
  ConsumableResourceProperties?: {
    ConsumableResourceList: {
      ConsumableResource: StringProperty
      Quantity: number /* schema format: int64*/
    }[]
  }
}

export const AWSBatchJobDefinition = ({
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
      Type: 'AWS::Batch::JobDefinition',
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