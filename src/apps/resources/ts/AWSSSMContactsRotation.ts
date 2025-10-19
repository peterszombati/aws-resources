import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  ContactIds: StringProperty[]
  StartTime: StringProperty
  TimeZoneId: StringProperty
  Recurrence: {
    MonthlySettings?: {
      DayOfMonth: number
      HandOffTime: StringProperty
    }[]
    WeeklySettings?: {
      DayOfWeek: (string | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN")
      HandOffTime: StringProperty
    }[]
    DailySettings?: StringProperty[]
    NumberOfOnCalls?: number
    RecurrenceMultiplier?: number
    ShiftCoverages?: {
      DayOfWeek: (string | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN")
      CoverageTimes: {
        StartTime: StringProperty
        EndTime: StringProperty
      }[]
    }[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
}

export const AWSSSMContactsRotation = ({
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
      Type: 'AWS::SSMContacts::Rotation',
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