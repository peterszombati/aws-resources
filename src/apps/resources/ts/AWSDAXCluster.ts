import {StringProperty} from "../StringProperty"


type Properties = {
  SSESpecification?: {
    SSEEnabled?: boolean
  }
  ClusterDiscoveryEndpointURL?: StringProperty
  Description?: StringProperty
  ReplicationFactor: number
  ParameterGroupName?: StringProperty
  AvailabilityZones?: StringProperty[]
  IAMRoleARN: StringProperty
  SubnetGroupName?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  ClusterEndpointEncryptionType?: StringProperty
  NotificationTopicARN?: StringProperty
  SecurityGroupIds?: StringProperty[]
  NetworkType?: StringProperty
  NodeType: StringProperty
  ClusterName?: StringProperty
  ClusterDiscoveryEndpoint?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Tags?: Record<string, any>
}

export const AWSDAXCluster = ({
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
      Type: 'AWS::DAX::Cluster',
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