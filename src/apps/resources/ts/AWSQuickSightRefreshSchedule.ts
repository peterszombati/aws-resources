import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AwsAccountId?: StringProperty
  DataSetId?: StringProperty
  Schedule?: {
    ScheduleId?: StringProperty
    ScheduleFrequency?: {
      Interval?: (string | "MINUTE15" | "MINUTE30" | "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY")
      RefreshOnDay?: {
        DayOfWeek?: (string | "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY")
        DayOfMonth?: StringProperty
      }
      TimeZone?: StringProperty
      TimeOfTheDay?: StringProperty
    }
    StartAfterDateTime?: StringProperty
    RefreshType?: (string | "FULL_REFRESH" | "INCREMENTAL_REFRESH")
  }
}

export const AWSQuickSightRefreshSchedule = ({
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
      Type: 'AWS::QuickSight::RefreshSchedule',
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