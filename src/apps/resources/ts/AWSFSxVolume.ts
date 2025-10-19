import {StringProperty} from "../StringProperty"


type Properties = {
  OpenZFSConfiguration?: {
    ReadOnly?: boolean
    Options?: StringProperty[]
    DataCompressionType?: StringProperty
    NfsExports?: {
      ClientConfigurations: {
        Clients: StringProperty
        Options: StringProperty[]
      }[]
    }[]
    StorageCapacityQuotaGiB?: number
    CopyTagsToSnapshots?: boolean
    ParentVolumeId: StringProperty
    StorageCapacityReservationGiB?: number
    RecordSizeKiB?: number
    OriginSnapshot?: {
      SnapshotARN: StringProperty
      CopyStrategy: StringProperty
    }
    UserAndGroupQuotas?: {
      Type: StringProperty
      Id: number
      StorageCapacityQuotaGiB: number
    }[]
  }
  ResourceARN?: StringProperty
  VolumeId?: StringProperty
  VolumeType?: StringProperty
  BackupId?: StringProperty
  OntapConfiguration?: {
    JunctionPath?: StringProperty
    StorageVirtualMachineId: StringProperty
    TieringPolicy?: {
      CoolingPeriod?: number
      Name?: StringProperty
    }
    SizeInMegabytes?: StringProperty
    VolumeStyle?: StringProperty
    SizeInBytes?: StringProperty
    SecurityStyle?: StringProperty
    SnaplockConfiguration?: {
      AuditLogVolume?: StringProperty
      VolumeAppendModeEnabled?: StringProperty
      AutocommitPeriod?: {
        Value?: number
        Type: StringProperty
      }
      RetentionPeriod?: {
        MinimumRetention: {
          Value?: number
          Type: StringProperty
        }
        DefaultRetention: {
          Value?: number
          Type: StringProperty
        }
        MaximumRetention: {
          Value?: number
          Type: StringProperty
        }
      }
      PrivilegedDelete?: StringProperty
      SnaplockType: StringProperty
    }
    AggregateConfiguration?: {
      Aggregates?: StringProperty[]
      ConstituentsPerAggregate?: number
    }
    SnapshotPolicy?: StringProperty
    StorageEfficiencyEnabled?: StringProperty
    CopyTagsToBackups?: StringProperty
    OntapVolumeType?: StringProperty
  }
  UUID?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name: StringProperty
}

export const AWSFSxVolume = ({
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
      Type: 'AWS::FSx::Volume',
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