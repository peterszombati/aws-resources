import {StringProperty} from "../StringProperty"


type Properties = {
  CreateInterval?: number
  Description?: StringProperty
  ExtendDeletion?: boolean
  Exclusions?: {
    ExcludeTags?: Record<string, any>
    ExcludeVolumeTypes?: Record<string, any>
    ExcludeBootVolumes?: boolean
  }
  RetainInterval?: number
  ExecutionRoleArn?: StringProperty
  DefaultPolicy?: StringProperty
  State?: StringProperty
  CrossRegionCopyTargets?: Record<string, any>
  PolicyDetails?: {
    PolicyLanguage?: StringProperty
    ResourceTypes?: StringProperty[]
    Schedules?: {
      ShareRules?: {
        TargetAccounts?: StringProperty[]
        UnshareIntervalUnit?: StringProperty
        UnshareInterval?: number
      }[]
      DeprecateRule?: {
        IntervalUnit?: StringProperty
        Count?: number
        Interval?: number
      }
      TagsToAdd?: {
        Value: StringProperty
        Key: StringProperty
      }[]
      CreateRule?: {
        IntervalUnit?: StringProperty
        Scripts?: {
          ExecutionHandlerService?: StringProperty
          ExecutionTimeout?: number
          Stages?: StringProperty[]
          ExecutionHandler?: StringProperty
          MaximumRetryCount?: number
          ExecuteOperationOnScriptFailure?: boolean
        }[]
        Times?: StringProperty[]
        CronExpression?: StringProperty
        Interval?: number
        Location?: StringProperty
      }
      VariableTags?: {
        Value: StringProperty
        Key: StringProperty
      }[]
      FastRestoreRule?: {
        IntervalUnit?: StringProperty
        Count?: number
        AvailabilityZones?: StringProperty[]
        Interval?: number
      }
      ArchiveRule?: {
        RetainRule: {
          RetentionArchiveTier: {
            IntervalUnit?: StringProperty
            Count?: number
            Interval?: number
          }
        }
      }
      RetainRule?: {
        IntervalUnit?: StringProperty
        Count?: number
        Interval?: number
      }
      CrossRegionCopyRules?: {
        TargetRegion?: StringProperty
        Target?: StringProperty
        DeprecateRule?: {
          IntervalUnit: StringProperty
          Interval: number
        }
        Encrypted: boolean
        CmkArn?: StringProperty
        RetainRule?: {
          IntervalUnit: StringProperty
          Interval: number
        }
        CopyTags?: boolean
      }[]
      Name?: StringProperty
      CopyTags?: boolean
    }[]
    PolicyType?: StringProperty
    CreateInterval?: number
    Parameters?: {
      ExcludeBootVolume?: boolean
      NoReboot?: boolean
      ExcludeDataVolumeTags?: {
        Value: StringProperty
        Key: StringProperty
      }[]
    }
    ExtendDeletion?: boolean
    Exclusions?: {
      ExcludeTags?: Record<string, any>
      ExcludeVolumeTypes?: Record<string, any>
      ExcludeBootVolumes?: boolean
    }
    Actions?: {
      CrossRegionCopy: {
        Target: StringProperty
        EncryptionConfiguration: {
          Encrypted: boolean
          CmkArn?: StringProperty
        }
        RetainRule?: {
          IntervalUnit: StringProperty
          Interval: number
        }
      }[]
      Name: StringProperty
    }[]
    ResourceType?: StringProperty
    RetainInterval?: number
    EventSource?: {
      Type: StringProperty
      Parameters?: {
        DescriptionRegex?: StringProperty
        EventType: StringProperty
        SnapshotOwner: StringProperty[]
      }
    }
    CrossRegionCopyTargets?: Record<string, any>
    TargetTags?: {
      Value: StringProperty
      Key: StringProperty
    }[]
    ResourceLocations?: StringProperty[]
    CopyTags?: boolean
  }
  Id?: StringProperty
  Arn?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  CopyTags?: boolean
}

export const AWSDLMLifecyclePolicy = ({
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
      Type: 'AWS::DLM::LifecyclePolicy',
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