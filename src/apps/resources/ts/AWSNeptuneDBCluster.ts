import {StringProperty} from "../StringProperty"


type Properties = {
  Endpoint?: StringProperty
  ReadEndpoint?: StringProperty
  ClusterResourceId?: StringProperty
  AssociatedRoles?: {
    FeatureName?: StringProperty
    RoleArn: StringProperty
  }[]
  AvailabilityZones?: StringProperty[]
  BackupRetentionPeriod?: number
  CopyTagsToSnapshot?: boolean
  DBClusterIdentifier?: StringProperty
  DBClusterParameterGroupName?: StringProperty
  DBInstanceParameterGroupName?: StringProperty
  DBPort?: number
  DBSubnetGroupName?: StringProperty
  DeletionProtection?: boolean
  EnableCloudwatchLogsExports?: StringProperty[]
  EngineVersion?: StringProperty
  IamAuthEnabled?: boolean
  KmsKeyId?: StringProperty
  Port?: StringProperty
  PreferredBackupWindow?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  RestoreToTime?: StringProperty
  RestoreType?: StringProperty
  ServerlessScalingConfiguration?: {
    MinCapacity: number
    MaxCapacity: number
  }
  SnapshotIdentifier?: StringProperty
  SourceDBClusterIdentifier?: StringProperty
  StorageEncrypted?: boolean
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  UseLatestRestorableTime?: boolean
  VpcSecurityGroupIds?: StringProperty[]
}

export const AWSNeptuneDBCluster = ({
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
      Type: 'AWS::Neptune::DBCluster',
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