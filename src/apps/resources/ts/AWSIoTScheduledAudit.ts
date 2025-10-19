import {StringProperty} from "../StringProperty"


type Properties = {
  ScheduledAuditName?: StringProperty
  Frequency: (string | "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY")
  DayOfMonth?: StringProperty
  DayOfWeek?: (string | "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "UNSET_VALUE")
  TargetCheckNames: StringProperty[]
  ScheduledAuditArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTScheduledAudit = ({
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
      Type: 'AWS::IoT::ScheduledAudit',
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