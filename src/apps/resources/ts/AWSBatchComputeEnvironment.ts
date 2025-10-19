import {StringProperty} from "../StringProperty"


type Properties = {
  ComputeEnvironmentArn?: StringProperty
  ComputeEnvironmentName?: StringProperty
  ComputeResources?: {
    AllocationStrategy?: StringProperty
    BidPercentage?: number
    DesiredvCpus?: number
    Ec2Configuration?: {
      ImageIdOverride?: StringProperty
      ImageType: StringProperty
      ImageKubernetesVersion?: StringProperty
    }[]
    Ec2KeyPair?: StringProperty
    ImageId?: StringProperty
    InstanceRole?: StringProperty
    InstanceTypes?: StringProperty[]
    LaunchTemplate?: {
      LaunchTemplateId?: StringProperty
      LaunchTemplateName?: StringProperty
      Version?: StringProperty
      UserdataType?: (string | "EKS_BOOTSTRAP_SH" | "EKS_NODEADM")
      Overrides?: {
        LaunchTemplateId?: StringProperty
        LaunchTemplateName?: StringProperty
        Version?: StringProperty
        UserdataType?: (string | "EKS_BOOTSTRAP_SH" | "EKS_NODEADM")
        TargetInstanceTypes?: StringProperty[]
      }[]
    }
    MaxvCpus: number
    MinvCpus?: number
    PlacementGroup?: StringProperty
    SecurityGroupIds?: StringProperty[]
    SpotIamFleetRole?: StringProperty
    Subnets: StringProperty[]
    Tags?: Record<string, any>
    Type: StringProperty
    UpdateToLatestImageVersion?: boolean
  }
  ReplaceComputeEnvironment?: boolean
  ServiceRole?: StringProperty
  State?: StringProperty
  Tags?: Record<string, any>
  Type: StringProperty
  UpdatePolicy?: {
    TerminateJobsOnUpdate?: boolean
    JobExecutionTimeoutMinutes?: number
  }
  UnmanagedvCpus?: number
  EksConfiguration?: {
    EksClusterArn: StringProperty
    KubernetesNamespace: StringProperty
  }
  Context?: StringProperty
}

export const AWSBatchComputeEnvironment = ({
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
      Type: 'AWS::Batch::ComputeEnvironment',
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