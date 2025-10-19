import {StringProperty} from "../StringProperty"


type Properties = {
  ClusterName: StringProperty
  Description?: StringProperty
  MultiRegionClusterName?: StringProperty
  Status?: StringProperty
  NodeType: StringProperty
  NumShards?: number
  NumReplicasPerShard?: number
  SubnetGroupName?: StringProperty
  SecurityGroupIds?: StringProperty[]
  MaintenanceWindow?: StringProperty
  ParameterGroupName?: StringProperty
  ParameterGroupStatus?: StringProperty
  Port?: number
  SnapshotRetentionLimit?: number
  SnapshotWindow?: StringProperty
  ACLName: StringProperty
  SnsTopicArn?: StringProperty
  SnsTopicStatus?: StringProperty
  TLSEnabled?: boolean
  DataTiering?: (string | "true" | "false")
  NetworkType?: (string | "ipv4" | "ipv6" | "dual_stack")
  IpDiscovery?: (string | "ipv4" | "ipv6")
  KmsKeyId?: StringProperty
  SnapshotArns?: StringProperty[]
  SnapshotName?: StringProperty
  FinalSnapshotName?: StringProperty
  ARN?: StringProperty
  Engine?: StringProperty
  EngineVersion?: StringProperty
  ClusterEndpoint?: {
    Address?: StringProperty
    Port?: number
  }
  AutoMinorVersionUpgrade?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSMemoryDBCluster = ({
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
      Type: 'AWS::MemoryDB::Cluster',
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