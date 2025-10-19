import {StringProperty} from "../StringProperty"


type Properties = {
  CacheSecurityGroupNames?: StringProperty[]
  SnapshotArns?: StringProperty[]
  Port?: number
  ConfigurationEndpointAddress?: StringProperty
  NotificationTopicArn?: StringProperty
  NumCacheNodes: number
  SnapshotName?: StringProperty
  TransitEncryptionEnabled?: boolean
  NetworkType?: StringProperty
  PreferredAvailabilityZones?: StringProperty[]
  VpcSecurityGroupIds?: StringProperty[]
  ClusterName?: StringProperty
  RedisEndpointAddress?: StringProperty
  Engine: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  EngineVersion?: StringProperty
  RedisEndpointPort?: StringProperty
  CacheSubnetGroupName?: StringProperty
  CacheParameterGroupName?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  AutoMinorVersionUpgrade?: boolean
  PreferredAvailabilityZone?: StringProperty
  SnapshotWindow?: StringProperty
  CacheNodeType: StringProperty
  SnapshotRetentionLimit?: number
  ConfigurationEndpointPort?: StringProperty
  IpDiscovery?: StringProperty
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
  Id?: StringProperty
  AZMode?: StringProperty
}

export const AWSElastiCacheCacheCluster = ({
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
      Type: 'AWS::ElastiCache::CacheCluster',
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