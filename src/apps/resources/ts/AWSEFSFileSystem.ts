import {StringProperty} from "../StringProperty"


type Properties = {
  FileSystemId?: StringProperty
  Arn?: StringProperty
  Encrypted?: boolean
  FileSystemTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  KmsKeyId?: StringProperty
  LifecyclePolicies?: {
    TransitionToIA?: StringProperty
    TransitionToPrimaryStorageClass?: StringProperty
    TransitionToArchive?: StringProperty
  }[]
  FileSystemProtection?: {
    ReplicationOverwriteProtection?: (string | "DISABLED" | "ENABLED")
  }
  PerformanceMode?: StringProperty
  ProvisionedThroughputInMibps?: number
  ThroughputMode?: StringProperty
  FileSystemPolicy?: Record<string, any>
  BypassPolicyLockoutSafetyCheck?: boolean
  BackupPolicy?: {
    Status: (string | "DISABLED" | "ENABLED")
  }
  AvailabilityZoneName?: StringProperty
  ReplicationConfiguration?: {
    Destinations?: {
      Status?: StringProperty
      StatusMessage?: StringProperty
      FileSystemId?: StringProperty
      Region?: StringProperty
      RoleArn?: StringProperty
      AvailabilityZoneName?: StringProperty
      KmsKeyId?: StringProperty
    }[]
  }
}

export const AWSEFSFileSystem = ({
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
      Type: 'AWS::EFS::FileSystem',
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