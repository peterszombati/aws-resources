import {StringProperty} from "../StringProperty"


type Properties = {
  AutoScalingGroupName: StringProperty
  DefaultResult?: StringProperty
  HeartbeatTimeout?: number
  LifecycleHookName?: StringProperty
  LifecycleTransition: StringProperty
  NotificationMetadata?: StringProperty
  NotificationTargetARN?: StringProperty
  RoleARN?: StringProperty
}

export const AWSAutoScalingLifecycleHook = ({
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
      Type: 'AWS::AutoScaling::LifecycleHook',
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