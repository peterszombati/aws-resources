import {StringProperty} from "../StringProperty"


type Properties = {
  StorageEncrypted?: boolean
  RestoreToTime?: StringProperty
  SnapshotIdentifier?: StringProperty
  Port?: number
  DBClusterIdentifier?: StringProperty
  PreferredBackupWindow?: StringProperty
  ClusterResourceId?: StringProperty
  Endpoint?: StringProperty
  RotateMasterUserPassword?: boolean
  VpcSecurityGroupIds?: StringProperty[]
  NetworkType?: StringProperty
  CopyTagsToSnapshot?: boolean
  GlobalClusterIdentifier?: StringProperty
  RestoreType?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  EngineVersion?: StringProperty
  StorageType?: StringProperty
  KmsKeyId?: StringProperty
  AvailabilityZones?: StringProperty[]
  ServerlessV2ScalingConfiguration?: {
    MinCapacity: number
    MaxCapacity: number
  }
  PreferredMaintenanceWindow?: StringProperty
  MasterUserSecretKmsKeyId?: StringProperty
  DBSubnetGroupName?: StringProperty
  DeletionProtection?: boolean
  UseLatestRestorableTime?: boolean
  ManageMasterUserPassword?: boolean
  MasterUserPassword?: StringProperty
  SourceDBClusterIdentifier?: StringProperty
  MasterUsername?: StringProperty
  ReadEndpoint?: StringProperty
  DBClusterParameterGroupName?: StringProperty
  BackupRetentionPeriod?: number
  Id?: StringProperty
  EnableCloudwatchLogsExports?: StringProperty[]
}

export const AWSDocDBDBCluster = ({
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
      Type: 'AWS::DocDB::DBCluster',
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