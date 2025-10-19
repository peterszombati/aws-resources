import {StringProperty} from "../StringProperty"


type Properties = {
  ZonalAutoshiftStatus?: (string | "ENABLED")
  PracticeRunConfiguration?: {
    BlockingAlarms?: {
      Type: StringProperty
      AlarmIdentifier: StringProperty
    }[]
    OutcomeAlarms: {
      Type: StringProperty
      AlarmIdentifier: StringProperty
    }[]
    BlockedDates?: StringProperty[]
    BlockedWindows?: StringProperty[]
  }
  ResourceIdentifier?: StringProperty
}

export const AWSARCZonalShiftZonalAutoshiftConfiguration = ({
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
      Type: 'AWS::ARCZonalShift::ZonalAutoshiftConfiguration',
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