import {StringProperty} from "../StringProperty"


type Properties = {
  RevisionTarget?: StringProperty
  AutomatedSnapshotRetentionPeriod?: number
  Encrypted?: boolean
  Port?: number
  NumberOfNodes?: number
  DestinationRegion?: StringProperty
  AllowVersionUpgrade?: boolean
  Endpoint?: {
    Address?: StringProperty
    Port?: StringProperty
  }
  NamespaceResourcePolicy?: Record<string, any>
  MaintenanceTrackName?: StringProperty
  OwnerAccount?: StringProperty
  MultiAZ?: boolean
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  SnapshotClusterIdentifier?: StringProperty
  IamRoles?: StringProperty[]
  KmsKeyId?: StringProperty
  SnapshotCopyManual?: boolean
  ManageMasterPassword?: boolean
  AvailabilityZone?: StringProperty
  ClusterSecurityGroups?: StringProperty[]
  ClusterIdentifier?: StringProperty
  MasterUserPassword?: StringProperty
  ClusterSubnetGroupName?: StringProperty
  LoggingProperties?: {
    BucketName?: StringProperty
    S3KeyPrefix?: StringProperty
    LogDestinationType?: StringProperty
    LogExports?: StringProperty[]
  }
  DeferMaintenance?: boolean
  NodeType: StringProperty
  MasterUsername: StringProperty
  PubliclyAccessible?: boolean
  DeferMaintenanceIdentifier?: StringProperty
  ManualSnapshotRetentionPeriod?: number
  ResourceAction?: StringProperty
  HsmClientCertificateIdentifier?: StringProperty
  ElasticIp?: StringProperty
  AvailabilityZoneRelocationStatus?: StringProperty
  AquaConfigurationStatus?: StringProperty
  SnapshotIdentifier?: StringProperty
  AvailabilityZoneRelocation?: boolean
  SnapshotCopyGrantName?: StringProperty
  EnhancedVpcRouting?: boolean
  ClusterParameterGroupName?: StringProperty
  DeferMaintenanceEndTime?: StringProperty
  RotateEncryptionKey?: boolean
  VpcSecurityGroupIds?: StringProperty[]
  ClusterNamespaceArn?: StringProperty
  MasterPasswordSecretArn?: StringProperty
  ClusterVersion?: StringProperty
  HsmConfigurationIdentifier?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  DeferMaintenanceStartTime?: StringProperty
  ClusterType: StringProperty
  Classic?: boolean
  MasterPasswordSecretKmsKeyId?: StringProperty
  DeferMaintenanceDuration?: number
  DBName: StringProperty
  SnapshotCopyRetentionPeriod?: number
}

export const AWSRedshiftCluster = ({
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
      Type: 'AWS::Redshift::Cluster',
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