import {StringProperty} from "../StringProperty"


type Properties = {
  StorageType?: StringProperty
  KmsKeyId?: StringProperty
  StorageCapacity?: number
  RootVolumeId?: StringProperty
  LustreConfiguration?: {
    DriveCacheType?: StringProperty
    AutoImportPolicy?: StringProperty
    EfaEnabled?: boolean
    ImportedFileChunkSize?: number
    DeploymentType?: StringProperty
    ThroughputCapacity?: number
    DataCompressionType?: StringProperty
    DataReadCacheConfiguration?: {
      SizingMode?: StringProperty
      SizeGiB?: number
    }
    ImportPath?: StringProperty
    WeeklyMaintenanceStartTime?: StringProperty
    MetadataConfiguration?: {
      Mode?: StringProperty
      Iops?: number
    }
    DailyAutomaticBackupStartTime?: StringProperty
    CopyTagsToBackups?: boolean
    ExportPath?: StringProperty
    PerUnitStorageThroughput?: number
    AutomaticBackupRetentionDays?: number
  }
  BackupId?: StringProperty
  OntapConfiguration?: {
    HAPairs?: number
    FsxAdminPassword?: StringProperty
    ThroughputCapacityPerHAPair?: number
    DeploymentType: StringProperty
    ThroughputCapacity?: number
    EndpointIpAddressRange?: StringProperty
    RouteTableIds?: StringProperty[]
    WeeklyMaintenanceStartTime?: StringProperty
    DiskIopsConfiguration?: {
      Mode?: StringProperty
      Iops?: number
    }
    DailyAutomaticBackupStartTime?: StringProperty
    AutomaticBackupRetentionDays?: number
    PreferredSubnetId?: StringProperty
  }
  DNSName?: StringProperty
  SubnetIds: StringProperty[]
  SecurityGroupIds?: StringProperty[]
  WindowsConfiguration?: {
    SelfManagedActiveDirectoryConfiguration?: {
      FileSystemAdministratorsGroup?: StringProperty
      UserName?: StringProperty
      DomainName?: StringProperty
      OrganizationalUnitDistinguishedName?: StringProperty
      DnsIps?: StringProperty[]
      Password?: StringProperty
    }
    AuditLogConfiguration?: {
      FileAccessAuditLogLevel: StringProperty
      FileShareAccessAuditLogLevel: StringProperty
      AuditLogDestination?: StringProperty
    }
    ActiveDirectoryId?: StringProperty
    DeploymentType?: StringProperty
    Aliases?: StringProperty[]
    ThroughputCapacity: number
    WeeklyMaintenanceStartTime?: StringProperty
    DiskIopsConfiguration?: {
      Mode?: StringProperty
      Iops?: number
    }
    CopyTagsToBackups?: boolean
    DailyAutomaticBackupStartTime?: StringProperty
    AutomaticBackupRetentionDays?: number
    PreferredSubnetId?: StringProperty
  }
  FileSystemTypeVersion?: StringProperty
  OpenZFSConfiguration?: {
    Options?: StringProperty[]
    CopyTagsToVolumes?: boolean
    DeploymentType: StringProperty
    ThroughputCapacity?: number
    RootVolumeConfiguration?: {
      ReadOnly?: boolean
      DataCompressionType?: StringProperty
      NfsExports?: {
        ClientConfigurations?: {
          Clients?: StringProperty
          Options?: StringProperty[]
        }[]
      }[]
      CopyTagsToSnapshots?: boolean
      RecordSizeKiB?: number
      UserAndGroupQuotas?: {
        Type?: StringProperty
        Id?: number
        StorageCapacityQuotaGiB?: number
      }[]
    }
    EndpointIpAddressRange?: StringProperty
    ReadCacheConfiguration?: {
      SizingMode?: StringProperty
      SizeGiB?: number
    }
    RouteTableIds?: StringProperty[]
    WeeklyMaintenanceStartTime?: StringProperty
    DiskIopsConfiguration?: {
      Mode?: StringProperty
      Iops?: number
    }
    DailyAutomaticBackupStartTime?: StringProperty
    CopyTagsToBackups?: boolean
    AutomaticBackupRetentionDays?: number
    EndpointIpv6AddressRange?: StringProperty
    PreferredSubnetId?: StringProperty
  }
  ResourceARN?: StringProperty
  NetworkType?: StringProperty
  FileSystemType: StringProperty
  Id?: StringProperty
  LustreMountName?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSFSxFileSystem = ({
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
      Type: 'AWS::FSx::FileSystem',
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