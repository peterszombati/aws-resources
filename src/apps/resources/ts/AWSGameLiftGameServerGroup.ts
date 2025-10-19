import {StringProperty} from "../StringProperty"


type Properties = {
  AutoScalingGroupArn?: StringProperty
  AutoScalingPolicy?: {
    EstimatedInstanceWarmup?: number
    TargetTrackingConfiguration: {
      TargetValue: number
    }
  }
  BalancingStrategy?: (string | "SPOT_ONLY" | "SPOT_PREFERRED" | "ON_DEMAND_ONLY")
  DeleteOption?: (string | "SAFE_DELETE" | "FORCE_DELETE" | "RETAIN")
  GameServerGroupArn?: StringProperty
  GameServerGroupName: StringProperty
  GameServerProtectionPolicy?: (string | "NO_PROTECTION" | "FULL_PROTECTION")
  InstanceDefinitions: {
    InstanceType: StringProperty
    WeightedCapacity?: StringProperty
  }[]
  LaunchTemplate?: {
    LaunchTemplateId?: StringProperty
    LaunchTemplateName?: StringProperty
    Version?: StringProperty
  }
  MaxSize?: number
  MinSize?: number
  RoleArn: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  VpcSubnets?: StringProperty[]
}

export const AWSGameLiftGameServerGroup = ({
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
      Type: 'AWS::GameLift::GameServerGroup',
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