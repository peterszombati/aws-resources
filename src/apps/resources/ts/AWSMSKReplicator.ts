import {StringProperty} from "../StringProperty"


type Properties = {
  ReplicatorArn?: StringProperty
  ReplicatorName: StringProperty
  CurrentVersion?: StringProperty
  Description?: StringProperty
  KafkaClusters: {
    AmazonMskCluster: {
      MskClusterArn: StringProperty
    }
    VpcConfig: {
      SecurityGroupIds?: StringProperty[]
      SubnetIds: StringProperty[]
    }
  }[]
  ReplicationInfoList: {
    SourceKafkaClusterArn: StringProperty
    TargetKafkaClusterArn: StringProperty
    TargetCompressionType: (string | "NONE" | "GZIP" | "SNAPPY" | "LZ4" | "ZSTD")
    TopicReplication: {
      TopicsToReplicate: StringProperty[]
      TopicsToExclude?: StringProperty[]
      CopyTopicConfigurations?: boolean
      CopyAccessControlListsForTopics?: boolean
      DetectAndCopyNewTopics?: boolean
      StartingPosition?: {
        Type?: (string | "LATEST" | "EARLIEST")
      }
      TopicNameConfiguration?: {
        Type?: (string | "PREFIXED_WITH_SOURCE_CLUSTER_ALIAS" | "IDENTICAL")
      }
    }
    ConsumerGroupReplication: {
      ConsumerGroupsToReplicate: StringProperty[]
      ConsumerGroupsToExclude?: StringProperty[]
      SynchroniseConsumerGroupOffsets?: boolean
      DetectAndCopyNewConsumerGroups?: boolean
    }
  }[]
  ServiceExecutionRoleArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSMSKReplicator = ({
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
      Type: 'AWS::MSK::Replicator',
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