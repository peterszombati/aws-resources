import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Description?: StringProperty
  EndDate?: StringProperty
  FlexibleTimeWindow: {
    Mode: (string | "OFF" | "FLEXIBLE")
    MaximumWindowInMinutes?: number
  }
  GroupName?: StringProperty
  KmsKeyArn?: StringProperty
  Name?: StringProperty
  ScheduleExpression: StringProperty
  ScheduleExpressionTimezone?: StringProperty
  StartDate?: StringProperty
  State?: (string | "ENABLED" | "DISABLED")
  Target: {
    Arn: StringProperty
    RoleArn: StringProperty
    DeadLetterConfig?: {
      Arn?: StringProperty
    }
    RetryPolicy?: {
      MaximumEventAgeInSeconds?: number
      MaximumRetryAttempts?: number
    }
    Input?: StringProperty
    EcsParameters?: {
      TaskDefinitionArn: StringProperty
      TaskCount?: number
      LaunchType?: (string | "EC2" | "FARGATE" | "EXTERNAL")
      NetworkConfiguration?: {
        AwsvpcConfiguration?: {
          Subnets: StringProperty[]
          SecurityGroups?: StringProperty[]
          AssignPublicIp?: (string | "ENABLED" | "DISABLED")
        }
      }
      PlatformVersion?: StringProperty
      Group?: StringProperty
      CapacityProviderStrategy?: {
        CapacityProvider: StringProperty
        Weight?: number
        Base?: number
      }[]
      EnableECSManagedTags?: boolean
      EnableExecuteCommand?: boolean
      PlacementConstraints?: {
        Type?: (string | "distinctInstance" | "memberOf")
        Expression?: StringProperty
      }[]
      PlacementStrategy?: {
        Type?: (string | "random" | "spread" | "binpack")
        Field?: StringProperty
      }[]
      PropagateTags?: (string | "TASK_DEFINITION")
      ReferenceId?: StringProperty
      Tags?: Record<string, any>[]
    }
    EventBridgeParameters?: {
      DetailType: StringProperty
      Source: StringProperty
    }
    KinesisParameters?: {
      PartitionKey: StringProperty
    }
    SageMakerPipelineParameters?: {
      PipelineParameterList?: {
        Name: StringProperty
        Value: StringProperty
      }[]
    }
    SqsParameters?: {
      MessageGroupId?: StringProperty
    }
  }
}

export const AWSSchedulerSchedule = ({
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
      Type: 'AWS::Scheduler::Schedule',
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