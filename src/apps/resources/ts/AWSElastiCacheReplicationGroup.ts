import {StringProperty} from "../StringProperty"


type Properties = {
  PreferredCacheClusterAZs?: StringProperty[]
  ReaderEndPointPort?: StringProperty
  NodeGroupConfiguration?: {
    Slots?: StringProperty
    PrimaryAvailabilityZone?: StringProperty
    ReplicaAvailabilityZones?: StringProperty[]
    NodeGroupId?: StringProperty
    ReplicaCount?: number
  }[]
  SnapshotArns?: StringProperty[]
  ConfigurationEndPointPort?: StringProperty
  Port?: number
  NumNodeGroups?: number
  NotificationTopicArn?: StringProperty
  AutomaticFailoverEnabled?: boolean
  ReplicasPerNodeGroup?: number
  TransitEncryptionEnabled?: boolean
  Engine?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  PrimaryEndPointAddress?: StringProperty
  GlobalReplicationGroupId?: StringProperty
  ConfigurationEndPointAddress?: StringProperty
  EngineVersion?: StringProperty
  KmsKeyId?: StringProperty
  PrimaryClusterId?: StringProperty
  ReadEndPointPorts?: StringProperty
  AutoMinorVersionUpgrade?: boolean
  SecurityGroupIds?: StringProperty[]
  SnapshotWindow?: StringProperty
  TransitEncryptionMode?: StringProperty
  SnapshotRetentionLimit?: number
  ReadEndPointAddressesList?: StringProperty[]
  SnapshottingClusterId?: StringProperty
  IpDiscovery?: StringProperty
  ReadEndPointAddresses?: StringProperty
  PrimaryEndPointPort?: StringProperty
  CacheSecurityGroupNames?: StringProperty[]
  ClusterMode?: StringProperty
  ReadEndPointPortsList?: StringProperty[]
  SnapshotName?: StringProperty
  ReplicationGroupDescription: StringProperty
  ReaderEndPointAddress?: StringProperty
  MultiAZEnabled?: boolean
  NetworkType?: StringProperty
  ReplicationGroupId?: StringProperty
  NumCacheClusters?: number
  CacheSubnetGroupName?: StringProperty
  CacheParameterGroupName?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  AtRestEncryptionEnabled?: boolean
  CacheNodeType?: StringProperty
  UserGroupIds?: StringProperty[]
  AuthToken?: StringProperty
  DataTieringEnabled?: boolean
  LogDeliveryConfigurations?: {
    LogType: StringProperty
    LogFormat: StringProperty
    DestinationType: StringProperty
    DestinationDetails: {
      CloudWatchLogsDetails?: {
        LogGroup: StringProperty
      }
      KinesisFirehoseDetails?: {
        DeliveryStream: StringProperty
      }
    }
  }[]
}

export const AWSElastiCacheReplicationGroup = ({
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
      Type: 'AWS::ElastiCache::ReplicationGroup',
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