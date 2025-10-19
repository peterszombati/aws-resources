import {StringProperty} from "../StringProperty"


type Properties = {
  AccessPolicy?: Record<string, any> | StringProperty
  BackupVaultName: StringProperty
  BackupVaultTags?: Record<string, any>
  EncryptionKeyArn?: StringProperty
  Notifications?: {
    BackupVaultEvents: StringProperty[]
    SNSTopicArn: StringProperty
  }
  LockConfiguration?: {
    MinRetentionDays: number
    MaxRetentionDays?: number
    ChangeableForDays?: number
  }
  BackupVaultArn?: StringProperty
}

export const AWSBackupBackupVault = ({
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
      Type: 'AWS::Backup::BackupVault',
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