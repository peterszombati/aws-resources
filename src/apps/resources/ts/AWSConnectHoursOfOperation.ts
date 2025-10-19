import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  Name: StringProperty
  Description?: StringProperty
  TimeZone: StringProperty
  Config: {
    Day: (string | "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY")
    StartTime: {
      Hours: number
      Minutes: number
    }
    EndTime: {
      Hours: number
      Minutes: number
    }
  }[]
  HoursOfOperationArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  HoursOfOperationOverrides?: {
    OverrideName: StringProperty
    OverrideDescription?: StringProperty
    EffectiveFrom: StringProperty
    EffectiveTill: StringProperty
    OverrideConfig: {
      Day: (string | "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY")
      StartTime: {
        Hours: number
        Minutes: number
      }
      EndTime: {
        Hours: number
        Minutes: number
      }
    }[]
    HoursOfOperationOverrideId?: StringProperty
  }[]
}

export const AWSConnectHoursOfOperation = ({
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
      Type: 'AWS::Connect::HoursOfOperation',
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