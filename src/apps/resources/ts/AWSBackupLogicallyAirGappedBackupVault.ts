import {StringProperty} from "../StringProperty"


type Properties = {
  VaultState?: StringProperty
  BackupVaultTags?: Record<string, any>
  VaultType?: StringProperty
  BackupVaultName: StringProperty
  BackupVaultArn?: StringProperty
  EncryptionKeyArn?: StringProperty
  MaxRetentionDays: number
  MinRetentionDays: number
  Notifications?: {
    SNSTopicArn: StringProperty
    BackupVaultEvents: StringProperty[]
  }
  AccessPolicy?: Record<string, any> | StringProperty
}

export const AWSBackupLogicallyAirGappedBackupVault = ({
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
      Type: 'AWS::Backup::LogicallyAirGappedBackupVault',
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