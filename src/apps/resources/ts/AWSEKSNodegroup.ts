import {StringProperty} from "../StringProperty"


type Properties = {
  AmiType?: StringProperty
  CapacityType?: StringProperty
  ClusterName: StringProperty
  DiskSize?: number
  ForceUpdateEnabled?: boolean
  InstanceTypes?: StringProperty[]
  Labels?: Record<string, any>
  LaunchTemplate?: {
    Id?: StringProperty
    Version?: StringProperty
    Name?: StringProperty
  }
  NodegroupName?: StringProperty
  NodeRole: StringProperty
  ReleaseVersion?: StringProperty
  RemoteAccess?: {
    SourceSecurityGroups?: StringProperty[]
    Ec2SshKey: StringProperty
  }
  ScalingConfig?: {
    MinSize?: number
    DesiredSize?: number
    MaxSize?: number
  }
  Subnets: StringProperty[]
  Tags?: Record<string, any>
  Taints?: {
    Key?: StringProperty
    Value?: StringProperty
    Effect?: StringProperty
  }[]
  UpdateConfig?: {
    MaxUnavailable?: number
    MaxUnavailablePercentage?: number
    UpdateStrategy?: StringProperty
  }
  NodeRepairConfig?: {
    Enabled?: boolean
  }
  Version?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
}

export const AWSEKSNodegroup = ({
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
      Type: 'AWS::EKS::Nodegroup',
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