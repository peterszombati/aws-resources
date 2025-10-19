import {StringProperty} from "../StringProperty"


type Properties = {
  EventBusName?: StringProperty
  EventPattern?: StringProperty | Record<string, any>
  ScheduleExpression?: StringProperty
  Description?: StringProperty
  State?: (string | "DISABLED" | "ENABLED" | "ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS")
  Targets?: {
    InputPath?: StringProperty
    HttpParameters?: {
      PathParameterValues?: StringProperty[]
      HeaderParameters?: Record<string, any>
      QueryStringParameters?: Record<string, any>
    }
    DeadLetterConfig?: {
      Arn?: StringProperty
    }
    RunCommandParameters?: {
      RunCommandTargets: {
        Values: StringProperty[]
        Key: StringProperty
      }[]
    }
    InputTransformer?: {
      InputPathsMap?: Record<string, any>
      InputTemplate: StringProperty
    }
    KinesisParameters?: {
      PartitionKeyPath: StringProperty
    }
    RoleArn?: StringProperty
    RedshiftDataParameters?: {
      StatementName?: StringProperty
      Sqls?: StringProperty[]
      Database: StringProperty
      SecretManagerArn?: StringProperty
      DbUser?: StringProperty
      Sql?: StringProperty
      WithEvent?: boolean
    }
    AppSyncParameters?: {
      GraphQLOperation: StringProperty
    }
    Input?: StringProperty
    SqsParameters?: {
      MessageGroupId: StringProperty
    }
    EcsParameters?: {
      PlatformVersion?: StringProperty
      Group?: StringProperty
      EnableECSManagedTags?: boolean
      EnableExecuteCommand?: boolean
      PlacementConstraints?: {
        Type?: StringProperty
        Expression?: StringProperty
      }[]
      PropagateTags?: StringProperty
      TaskCount?: number
      PlacementStrategies?: {
        Field?: StringProperty
        Type?: StringProperty
      }[]
      CapacityProviderStrategy?: {
        CapacityProvider: StringProperty
        Base?: number
        Weight?: number
      }[]
      LaunchType?: StringProperty
      ReferenceId?: StringProperty
      TagList?: {
        Value?: StringProperty
        Key?: StringProperty
      }[]
      NetworkConfiguration?: {
        AwsVpcConfiguration?: {
          SecurityGroups?: StringProperty[]
          Subnets: StringProperty[]
          AssignPublicIp?: StringProperty
        }
      }
      TaskDefinitionArn: StringProperty
    }
    BatchParameters?: {
      ArrayProperties?: {
        Size?: number
      }
      JobName: StringProperty
      RetryStrategy?: {
        Attempts?: number
      }
      JobDefinition: StringProperty
    }
    Id: StringProperty
    Arn: StringProperty
    SageMakerPipelineParameters?: {
      PipelineParameterList?: {
        Value: StringProperty
        Name: StringProperty
      }[]
    }
    RetryPolicy?: {
      MaximumRetryAttempts?: number
      MaximumEventAgeInSeconds?: number
    }
  }[]
  Arn?: StringProperty
  RoleArn?: StringProperty
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  Name?: StringProperty
}

export const AWSEventsRule = ({
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
      Type: 'AWS::Events::Rule',
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