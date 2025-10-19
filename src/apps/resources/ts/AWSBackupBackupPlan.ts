import {StringProperty} from "../StringProperty"


type Properties = {
  VersionId?: StringProperty
  BackupPlan: {
    BackupPlanName: StringProperty
    AdvancedBackupSettings?: {
      BackupOptions: Record<string, any>
      ResourceType: StringProperty
    }[]
    BackupPlanRule: {
      CompletionWindowMinutes?: number
      ScheduleExpression?: StringProperty
      RecoveryPointTags?: Record<string, any>
      CopyActions?: {
        Lifecycle?: {
          OptInToArchiveForSupportedResources?: boolean
          DeleteAfterDays?: number
          MoveToColdStorageAfterDays?: number
        }
        DestinationBackupVaultArn: StringProperty
      }[]
      EnableContinuousBackup?: boolean
      Lifecycle?: {
        OptInToArchiveForSupportedResources?: boolean
        DeleteAfterDays?: number
        MoveToColdStorageAfterDays?: number
      }
      IndexActions?: {
        ResourceTypes?: StringProperty[]
      }[]
      TargetBackupVault: StringProperty
      StartWindowMinutes?: number
      ScheduleExpressionTimezone?: StringProperty
      RuleName: StringProperty
    }[]
  }
  BackupPlanId?: StringProperty
  BackupPlanTags?: Record<string, any>
  BackupPlanArn?: StringProperty
}

export const AWSBackupBackupPlan = ({
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
      Type: 'AWS::Backup::BackupPlan',
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