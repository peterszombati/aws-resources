import {StringProperty} from "../StringProperty"


type Properties = {
  IamRoleArn: StringProperty
  ProtectedResourceArns?: StringProperty[]
  ProtectedResourceConditions?: {
    StringEquals?: {
      Key: StringProperty
      Value: StringProperty
    }[]
    StringNotEquals?: {
      Key: StringProperty
      Value: StringProperty
    }[]
  }
  ProtectedResourceType: StringProperty
  RestoreMetadataOverrides?: Record<string, any>
  RestoreTestingPlanName: StringProperty
  RestoreTestingSelectionName: StringProperty
  ValidationWindowHours?: number
}

export const AWSBackupRestoreTestingSelection = ({
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
      Type: 'AWS::Backup::RestoreTestingSelection',
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