import {StringProperty} from "../StringProperty"


type Properties = {
  GlobalReplicationGroupIdSuffix?: StringProperty
  AutomaticFailoverEnabled?: boolean
  CacheNodeType?: StringProperty
  EngineVersion?: StringProperty
  Engine?: StringProperty
  CacheParameterGroupName?: StringProperty
  GlobalNodeGroupCount?: number
  GlobalReplicationGroupDescription?: StringProperty
  GlobalReplicationGroupId?: StringProperty
  Members: {
    ReplicationGroupId?: StringProperty
    ReplicationGroupRegion?: StringProperty
    Role?: (string | "PRIMARY" | "SECONDARY")
  }[]
  Status?: StringProperty
  RegionalConfigurations?: {
    ReplicationGroupId?: StringProperty
    ReplicationGroupRegion?: StringProperty
    ReshardingConfigurations?: {
      NodeGroupId?: StringProperty
      PreferredAvailabilityZones?: StringProperty[]
    }[]
  }[]
}

export const AWSElastiCacheGlobalReplicationGroup = ({
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
      Type: 'AWS::ElastiCache::GlobalReplicationGroup',
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