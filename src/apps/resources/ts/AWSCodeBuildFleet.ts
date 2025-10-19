import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  BaseCapacity?: number
  EnvironmentType?: (string | "WINDOWS_SERVER_2019_CONTAINER" | "WINDOWS_SERVER_2022_CONTAINER" | "LINUX_CONTAINER" | "LINUX_GPU_CONTAINER" | "ARM_CONTAINER" | "MAC_ARM" | "LINUX_EC2" | "ARM_EC2" | "WINDOWS_EC2")
  ComputeType?: (string | "BUILD_GENERAL1_SMALL" | "BUILD_GENERAL1_MEDIUM" | "BUILD_GENERAL1_LARGE" | "BUILD_GENERAL1_XLARGE" | "BUILD_GENERAL1_2XLARGE" | "ATTRIBUTE_BASED_COMPUTE" | "CUSTOM_INSTANCE_TYPE")
  OverflowBehavior?: (string | "QUEUE" | "ON_DEMAND")
  FleetServiceRole?: StringProperty
  FleetVpcConfig?: {
    VpcId?: StringProperty
    Subnets?: StringProperty[]
    SecurityGroupIds?: StringProperty[]
  }
  FleetProxyConfiguration?: {
    DefaultBehavior?: (string | "ALLOW_ALL" | "DENY_ALL")
    OrderedProxyRules?: {
      Type?: (string | "DOMAIN" | "IP")
      Effect?: (string | "ALLOW" | "DENY")
      Entities?: StringProperty[]
    }[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
  ImageId?: StringProperty
  ScalingConfiguration?: {
    MaxCapacity?: number
    ScalingType?: (string | "TARGET_TRACKING_SCALING")
    TargetTrackingScalingConfigs?: {
      MetricType?: (string | "FLEET_UTILIZATION_RATE")
      TargetValue?: number
    }[]
  }
  ComputeConfiguration?: {
    vCpu?: number
    memory?: number
    disk?: number
    machineType?: (string | "GENERAL" | "NVME")
    instanceType?: StringProperty
  }
}

export const AWSCodeBuildFleet = ({
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
      Type: 'AWS::CodeBuild::Fleet',
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