import {StringProperty} from "../StringProperty"


type Properties = {
  LifecycleHookSpecificationList?: {
    LifecycleHookName: StringProperty
    LifecycleTransition: StringProperty
    HeartbeatTimeout?: number
    NotificationMetadata?: StringProperty
    DefaultResult?: StringProperty
    NotificationTargetARN?: StringProperty
    RoleARN?: StringProperty
  }[]
  LoadBalancerNames?: StringProperty[]
  LaunchConfigurationName?: StringProperty
  ServiceLinkedRoleARN?: StringProperty
  AvailabilityZoneImpairmentPolicy?: {
    ZonalShiftEnabled: boolean
    ImpairedZoneHealthCheckBehavior: (string | "IgnoreUnhealthy" | "ReplaceUnhealthy")
  }
  TargetGroupARNs?: StringProperty[]
  Cooldown?: StringProperty
  NotificationConfigurations?: {
    TopicARN: StringProperty | any[]
    NotificationTypes?: StringProperty[]
  }[]
  DesiredCapacity?: StringProperty
  HealthCheckGracePeriod?: number
  DefaultInstanceWarmup?: number
  SkipZonalShiftValidation?: boolean
  NewInstancesProtectedFromScaleIn?: boolean
  LaunchTemplate?: {
    LaunchTemplateName?: StringProperty
    Version: StringProperty
    LaunchTemplateId?: StringProperty
  }
  MixedInstancesPolicy?: {
    InstancesDistribution?: {
      OnDemandAllocationStrategy?: StringProperty
      OnDemandBaseCapacity?: number
      OnDemandPercentageAboveBaseCapacity?: number
      SpotInstancePools?: number
      SpotAllocationStrategy?: StringProperty
      SpotMaxPrice?: StringProperty
    }
    LaunchTemplate: {
      LaunchTemplateSpecification: {
        LaunchTemplateName?: StringProperty
        Version: StringProperty
        LaunchTemplateId?: StringProperty
      }
      Overrides?: {
        LaunchTemplateSpecification?: {
          LaunchTemplateName?: StringProperty
          Version: StringProperty
          LaunchTemplateId?: StringProperty
        }
        WeightedCapacity?: StringProperty
        InstanceRequirements?: {
          InstanceGenerations?: StringProperty[]
          AcceleratorTypes?: StringProperty[]
          MemoryGiBPerVCpu?: {
            Min?: number
            Max?: number
          }
          AcceleratorManufacturers?: StringProperty[]
          VCpuCount: {
            Min?: number
            Max?: number
          }
          LocalStorage?: StringProperty
          CpuManufacturers?: StringProperty[]
          BareMetal?: StringProperty
          RequireHibernateSupport?: boolean
          MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number
          OnDemandMaxPricePercentageOverLowestPrice?: number
          MemoryMiB: {
            Min?: number
            Max?: number
          }
          LocalStorageTypes?: StringProperty[]
          NetworkInterfaceCount?: {
            Min?: number
            Max?: number
          }
          ExcludedInstanceTypes?: StringProperty[]
          AllowedInstanceTypes?: StringProperty[]
          AcceleratorCount?: {
            Min?: number
            Max?: number
          }
          NetworkBandwidthGbps?: {
            Min?: number
            Max?: number
          }
          BaselinePerformanceFactors?: {
            Cpu?: {
              References?: {
                InstanceFamily?: StringProperty
              }[]
            }
          }
          BaselineEbsBandwidthMbps?: {
            Min?: number
            Max?: number
          }
          SpotMaxPricePercentageOverLowestPrice?: number
          AcceleratorNames?: StringProperty[]
          AcceleratorTotalMemoryMiB?: {
            Min?: number
            Max?: number
          }
          BurstablePerformance?: StringProperty
          TotalLocalStorageGB?: {
            Min?: number
            Max?: number
          }
        }
        InstanceType?: StringProperty
      }[]
    }
  }
  VPCZoneIdentifier?: StringProperty[]
  Tags?: {
    Value: StringProperty
    Key: StringProperty
    PropagateAtLaunch: boolean
  }[]
  Context?: StringProperty
  CapacityRebalance?: boolean
  InstanceId?: StringProperty
  AutoScalingGroupARN?: StringProperty
  AvailabilityZones?: StringProperty[]
  NotificationConfiguration?: {
    TopicARN: StringProperty | any[]
    NotificationTypes?: StringProperty[]
  }
  AvailabilityZoneDistribution?: {
    CapacityDistributionStrategy?: (string | "balanced-best-effort" | "balanced-only")
  }
  MetricsCollection?: {
    Metrics?: StringProperty[]
    Granularity: StringProperty
  }[]
  InstanceMaintenancePolicy?: {
    MaxHealthyPercentage?: number
    MinHealthyPercentage?: number
  }
  MaxSize: StringProperty
  MinSize: StringProperty
  TerminationPolicies?: StringProperty[]
  AutoScalingGroupName?: StringProperty
  TrafficSources?: {
    Type: StringProperty
    Identifier: StringProperty
  }[]
  DesiredCapacityType?: StringProperty
  PlacementGroup?: StringProperty
  CapacityReservationSpecification?: {
    CapacityReservationPreference: StringProperty
    CapacityReservationTarget?: {
      CapacityReservationIds?: StringProperty[]
      CapacityReservationResourceGroupArns?: StringProperty[]
    }
  }
  HealthCheckType?: StringProperty
  MaxInstanceLifetime?: number
}

export const AWSAutoScalingAutoScalingGroup = ({
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
      Type: 'AWS::AutoScaling::AutoScalingGroup',
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