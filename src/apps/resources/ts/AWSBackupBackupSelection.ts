import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  BackupPlanId: StringProperty
  BackupSelection: {
    IamRoleArn: StringProperty
    ListOfTags?: {
      ConditionKey: StringProperty
      ConditionValue: StringProperty
      ConditionType: StringProperty
    }[]
    Resources?: StringProperty[]
    SelectionName: StringProperty
    NotResources?: StringProperty[]
    Conditions?: {
      StringEquals?: {
        ConditionKey?: StringProperty
        ConditionValue?: StringProperty
      }[]
      StringNotEquals?: {
        ConditionKey?: StringProperty
        ConditionValue?: StringProperty
      }[]
      StringLike?: {
        ConditionKey?: StringProperty
        ConditionValue?: StringProperty
      }[]
      StringNotLike?: {
        ConditionKey?: StringProperty
        ConditionValue?: StringProperty
      }[]
    }
  }
  SelectionId?: StringProperty
}

export const AWSBackupBackupSelection = ({
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
      Type: 'AWS::Backup::BackupSelection',
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