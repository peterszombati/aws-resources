import {StringProperty} from "../StringProperty"


type Properties = {
  ServerlessCacheName: StringProperty
  Description?: StringProperty
  Engine: StringProperty
  MajorEngineVersion?: StringProperty
  FullEngineVersion?: StringProperty
  CacheUsageLimits?: {
    DataStorage?: {
      Minimum?: number
      Maximum?: number
      Unit: (string | "GB")
    }
    ECPUPerSecond?: {
      Minimum?: number
      Maximum?: number
    }
  }
  KmsKeyId?: StringProperty
  SecurityGroupIds?: StringProperty[]
  SnapshotArnsToRestore?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  UserGroupId?: StringProperty
  SubnetIds?: StringProperty[]
  SnapshotRetentionLimit?: number
  DailySnapshotTime?: StringProperty
  CreateTime?: StringProperty
  Status?: StringProperty
  Endpoint?: {
    Address?: StringProperty
    Port?: StringProperty
  }
  ReaderEndpoint?: {
    Address?: StringProperty
    Port?: StringProperty
  }
  ARN?: StringProperty
  FinalSnapshotName?: StringProperty
}

export const AWSElastiCacheServerlessCache = ({
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
      Type: 'AWS::ElastiCache::ServerlessCache',
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