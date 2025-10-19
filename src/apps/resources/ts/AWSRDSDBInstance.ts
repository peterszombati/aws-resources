import {StringProperty} from "../StringProperty"


type Properties = {
  AllocatedStorage?: StringProperty
  AllowMajorVersionUpgrade?: boolean
  AssociatedRoles?: {
    FeatureName: StringProperty
    RoleArn: StringProperty
  }[]
  AutoMinorVersionUpgrade?: boolean
  AutomaticBackupReplicationRegion?: StringProperty
  AutomaticBackupReplicationKmsKeyId?: StringProperty
  AutomaticBackupReplicationRetentionPeriod?: number
  AutomaticRestartTime?: StringProperty
  AvailabilityZone?: StringProperty
  BackupRetentionPeriod?: number
  BackupTarget?: StringProperty
  CACertificateIdentifier?: StringProperty
  CertificateDetails?: {
    CAIdentifier?: StringProperty
    ValidTill?: StringProperty
  }
  CertificateRotationRestart?: boolean
  CharacterSetName?: StringProperty
  CopyTagsToSnapshot?: boolean
  CustomIAMInstanceProfile?: StringProperty
  DatabaseInsightsMode?: StringProperty
  DBClusterIdentifier?: StringProperty
  DBClusterSnapshotIdentifier?: StringProperty
  DBInstanceArn?: StringProperty
  DBInstanceClass?: StringProperty
  DBInstanceIdentifier?: StringProperty
  DBInstanceStatus?: StringProperty
  DbiResourceId?: StringProperty
  DBName?: StringProperty
  DBParameterGroupName?: StringProperty
  DBSecurityGroups?: StringProperty[]
  DBSnapshotIdentifier?: StringProperty
  DBSubnetGroupName?: StringProperty
  DBSystemId?: StringProperty
  DedicatedLogVolume?: boolean
  DeleteAutomatedBackups?: boolean
  DeletionProtection?: boolean
  Domain?: StringProperty
  DomainAuthSecretArn?: StringProperty
  DomainDnsIps?: StringProperty[]
  DomainFqdn?: StringProperty
  DomainIAMRoleName?: StringProperty
  DomainOu?: StringProperty
  EnableCloudwatchLogsExports?: StringProperty[]
  EnableIAMDatabaseAuthentication?: boolean
  EnablePerformanceInsights?: boolean
  Endpoint?: {
    Address?: StringProperty
    Port?: StringProperty
    HostedZoneId?: StringProperty
  }
  Engine?: StringProperty
  EngineLifecycleSupport?: StringProperty
  EngineVersion?: StringProperty
  ManageMasterUserPassword?: boolean
  InstanceCreateTime?: StringProperty
  Iops?: number
  IsStorageConfigUpgradeAvailable?: boolean
  KmsKeyId?: StringProperty
  LatestRestorableTime?: StringProperty
  LicenseModel?: StringProperty
  ListenerEndpoint?: {
    Address?: StringProperty
    Port?: StringProperty
    HostedZoneId?: StringProperty
  }
  MasterUserAuthenticationType?: StringProperty
  MasterUsername?: StringProperty
  MasterUserPassword?: StringProperty
  MasterUserSecret?: {
    SecretArn?: StringProperty
    KmsKeyId?: StringProperty
  }
  MaxAllocatedStorage?: number
  MonitoringInterval?: number
  MonitoringRoleArn?: StringProperty
  MultiAZ?: boolean
  NcharCharacterSetName?: StringProperty
  NetworkType?: StringProperty
  OptionGroupName?: StringProperty
  PercentProgress?: StringProperty
  PerformanceInsightsKMSKeyId?: StringProperty
  PerformanceInsightsRetentionPeriod?: number
  Port?: StringProperty
  PreferredBackupWindow?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  ProcessorFeatures?: {
    Name?: (string | "coreCount" | "threadsPerCore")
    Value?: StringProperty
  }[]
  PromotionTier?: number
  PubliclyAccessible?: boolean
  ReadReplicaDBClusterIdentifiers?: StringProperty[]
  ReadReplicaDBInstanceIdentifiers?: StringProperty[]
  ReplicaMode?: StringProperty
  RestoreTime?: StringProperty
  ResumeFullAutomationModeTime?: StringProperty
  SecondaryAvailabilityZone?: StringProperty
  SourceDBClusterIdentifier?: StringProperty
  SourceDbiResourceId?: StringProperty
  SourceDBInstanceAutomatedBackupsArn?: StringProperty
  SourceDBInstanceIdentifier?: StringProperty
  SourceRegion?: StringProperty
  StatusInfos?: {
    Message?: StringProperty
    Normal?: boolean
    Status?: StringProperty
    StatusType?: StringProperty
  }[]
  StorageEncrypted?: boolean
  StorageType?: StringProperty
  StorageThroughput?: number
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  TdeCredentialArn?: StringProperty
  TdeCredentialPassword?: StringProperty
  Timezone?: StringProperty
  UseDefaultProcessorFeatures?: boolean
  UseLatestRestorableTime?: boolean
  VPCSecurityGroups?: StringProperty[]
  ApplyImmediately?: boolean
}

export const AWSRDSDBInstance = ({
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
      Type: 'AWS::RDS::DBInstance',
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