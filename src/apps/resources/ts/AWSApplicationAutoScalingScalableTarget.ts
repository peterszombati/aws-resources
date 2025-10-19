import {StringProperty} from "../StringProperty"


type Properties = {
  ScheduledActions?: {
    Timezone?: StringProperty
    ScheduledActionName: StringProperty
    EndTime?: StringProperty
    Schedule: StringProperty
    StartTime?: StringProperty
    ScalableTargetAction?: {
      MinCapacity?: number
      MaxCapacity?: number
    }
  }[]
  ResourceId: StringProperty
  ServiceNamespace: StringProperty
  ScalableDimension: StringProperty
  SuspendedState?: {
    DynamicScalingOutSuspended?: boolean
    ScheduledScalingSuspended?: boolean
    DynamicScalingInSuspended?: boolean
  }
  Id?: StringProperty
  MinCapacity: number
  RoleARN?: StringProperty
  MaxCapacity: number
}

export const AWSApplicationAutoScalingScalableTarget = ({
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
      Type: 'AWS::ApplicationAutoScaling::ScalableTarget',
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