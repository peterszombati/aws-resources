import {StringProperty} from "../StringProperty"


type Properties = {
  ScheduledActionName?: StringProperty
  MinSize?: number
  Recurrence?: StringProperty
  TimeZone?: StringProperty
  EndTime?: StringProperty
  AutoScalingGroupName: StringProperty
  StartTime?: StringProperty
  DesiredCapacity?: number
  MaxSize?: number
}

export const AWSAutoScalingScheduledAction = ({
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
      Type: 'AWS::AutoScaling::ScheduledAction',
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