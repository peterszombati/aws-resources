import {StringProperty} from "../StringProperty"


type Properties = {
  ClusterName: StringProperty
  ClusterArn?: StringProperty
  ClusterEndpoint?: StringProperty
  AdminUserName: StringProperty
  AdminUserPassword?: StringProperty
  ShardCapacity: number
  ShardCount: number
  VpcSecurityGroupIds?: StringProperty[]
  SubnetIds?: StringProperty[]
  PreferredMaintenanceWindow?: StringProperty
  PreferredBackupWindow?: StringProperty
  BackupRetentionPeriod?: number
  ShardInstanceCount?: number
  KmsKeyId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AuthType: StringProperty
}

export const AWSDocDBElasticCluster = ({
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
      Type: 'AWS::DocDBElastic::Cluster',
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