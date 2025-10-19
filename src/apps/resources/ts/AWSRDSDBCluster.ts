import {StringProperty} from "../StringProperty"


type Properties = {
  Endpoint?: {
    Address?: StringProperty
    Port?: StringProperty
  }
  ReadEndpoint?: {
    Address?: StringProperty
  }
  AllocatedStorage?: number
  AssociatedRoles?: {
    FeatureName?: StringProperty
    RoleArn: StringProperty
  }[]
  AvailabilityZones?: StringProperty[]
  AutoMinorVersionUpgrade?: boolean
  BacktrackWindow?: number
  BackupRetentionPeriod?: number
  ClusterScalabilityType?: StringProperty
  CopyTagsToSnapshot?: boolean
  DatabaseInsightsMode?: StringProperty
  DatabaseName?: StringProperty
  DBClusterArn?: StringProperty
  DBClusterInstanceClass?: StringProperty
  DBClusterResourceId?: StringProperty
  DBInstanceParameterGroupName?: StringProperty
  DBSystemId?: StringProperty
  GlobalClusterIdentifier?: StringProperty
  DBClusterIdentifier?: StringProperty
  DBClusterParameterGroupName?: StringProperty
  DBSubnetGroupName?: StringProperty
  DeleteAutomatedBackups?: boolean
  DeletionProtection?: boolean
  Domain?: StringProperty
  DomainIAMRoleName?: StringProperty
  EnableCloudwatchLogsExports?: StringProperty[]
  EnableGlobalWriteForwarding?: boolean
  EnableHttpEndpoint?: boolean
  EnableIAMDatabaseAuthentication?: boolean
  EnableLocalWriteForwarding?: boolean
  Engine?: StringProperty
  EngineLifecycleSupport?: StringProperty
  EngineMode?: StringProperty
  EngineVersion?: StringProperty
  ManageMasterUserPassword?: boolean
  Iops?: number
  KmsKeyId?: StringProperty
  MasterUserAuthenticationType?: StringProperty
  MasterUsername?: StringProperty
  MasterUserPassword?: StringProperty
  MasterUserSecret?: {
    SecretArn?: StringProperty
    KmsKeyId?: StringProperty
  }
  MonitoringInterval?: number
  MonitoringRoleArn?: StringProperty
  NetworkType?: StringProperty
  PerformanceInsightsEnabled?: boolean
  PerformanceInsightsKmsKeyId?: StringProperty
  PerformanceInsightsRetentionPeriod?: number
  Port?: number
  PreferredBackupWindow?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  PubliclyAccessible?: boolean
  ReplicationSourceIdentifier?: StringProperty
  RestoreToTime?: StringProperty
  RestoreType?: StringProperty
  ServerlessV2ScalingConfiguration?: {
    MinCapacity?: number
    MaxCapacity?: number
    SecondsUntilAutoPause?: number
  }
  ScalingConfiguration?: {
    AutoPause?: boolean
    MaxCapacity?: number
    MinCapacity?: number
    SecondsBeforeTimeout?: number
    SecondsUntilAutoPause?: number
    TimeoutAction?: StringProperty
  }
  SnapshotIdentifier?: StringProperty
  SourceDBClusterIdentifier?: StringProperty
  SourceDbClusterResourceId?: StringProperty
  SourceRegion?: StringProperty
  StorageEncrypted?: boolean
  StorageThroughput?: number
  StorageType?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  UseLatestRestorableTime?: boolean
  VpcSecurityGroupIds?: StringProperty[]
}

export const AWSRDSDBCluster = ({
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
      Type: 'AWS::RDS::DBCluster',
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