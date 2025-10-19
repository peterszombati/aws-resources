import {StringProperty} from "../StringProperty"


type Properties = {
  EventTypeId?: StringProperty
  CreatedBy?: StringProperty
  TargetAddress?: StringProperty
  EventTypeIds: StringProperty[]
  Status?: (string | "ENABLED" | "DISABLED")
  DetailType: (string | "BASIC" | "FULL")
  Resource: StringProperty
  Targets: {
    TargetType: StringProperty
    TargetAddress: StringProperty
  }[]
  Tags?: Record<string, any>
  Name: StringProperty
  Arn?: StringProperty
}

export const AWSCodeStarNotificationsNotificationRule = ({
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
      Type: 'AWS::CodeStarNotifications::NotificationRule',
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