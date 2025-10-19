import {StringProperty} from "../StringProperty"


type Properties = {
  AutoScalingGroupName: StringProperty
  MaxGroupPreparedCapacity?: number
  MinSize?: number
  PoolState?: StringProperty
  InstanceReusePolicy?: {
    ReuseOnScaleIn?: boolean
  }
}

export const AWSAutoScalingWarmPool = ({
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
      Type: 'AWS::AutoScaling::WarmPool',
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