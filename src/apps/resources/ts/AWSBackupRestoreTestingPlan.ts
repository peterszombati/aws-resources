import {StringProperty} from "../StringProperty"


type Properties = {
  RecoveryPointSelection: {
    Algorithm: (string | "LATEST_WITHIN_WINDOW" | "RANDOM_WITHIN_WINDOW")
    SelectionWindowDays?: number
    RecoveryPointTypes: (string | "SNAPSHOT" | "CONTINUOUS")[]
    IncludeVaults: StringProperty[]
    ExcludeVaults?: StringProperty[]
  }
  RestoreTestingPlanArn?: StringProperty
  RestoreTestingPlanName: StringProperty
  ScheduleExpression: StringProperty
  ScheduleExpressionTimezone?: StringProperty
  StartWindowHours?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSBackupRestoreTestingPlan = ({
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
      Type: 'AWS::Backup::RestoreTestingPlan',
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