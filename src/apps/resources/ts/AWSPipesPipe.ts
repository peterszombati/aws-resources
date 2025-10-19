import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreationTime?: StringProperty
  CurrentState?: (string | "RUNNING" | "STOPPED" | "CREATING" | "UPDATING" | "DELETING" | "STARTING" | "STOPPING" | "CREATE_FAILED" | "UPDATE_FAILED" | "START_FAILED" | "STOP_FAILED" | "DELETE_FAILED" | "CREATE_ROLLBACK_FAILED" | "DELETE_ROLLBACK_FAILED" | "UPDATE_ROLLBACK_FAILED")
  Description?: StringProperty
  DesiredState?: (string | "RUNNING" | "STOPPED")
  Enrichment?: StringProperty
  EnrichmentParameters?: {
    InputTemplate?: StringProperty
    HttpParameters?: {
      PathParameterValues?: StringProperty[]
      HeaderParameters?: Record<string, any>
      QueryStringParameters?: Record<string, any>
    }
  }
  KmsKeyIdentifier?: StringProperty
  LastModifiedTime?: StringProperty
  LogConfiguration?: {
    S3LogDestination?: {
      BucketName?: StringProperty
      Prefix?: StringProperty
      BucketOwner?: StringProperty
      OutputFormat?: (string | "json" | "plain" | "w3c")
    }
    FirehoseLogDestination?: {
      DeliveryStreamArn?: StringProperty
    }
    CloudwatchLogsLogDestination?: {
      LogGroupArn?: StringProperty
    }
    Level?: (string | "OFF" | "ERROR" | "INFO" | "TRACE")
    IncludeExecutionData?: (string | "ALL")[]
  }
  Name?: StringProperty
  RoleArn: StringProperty
  Source: StringProperty
  SourceParameters?: {
    FilterCriteria?: {
      Filters?: {
        Pattern?: StringProperty
      }[]
    }
    KinesisStreamParameters?: {
      BatchSize?: number
      DeadLetterConfig?: {
        Arn?: StringProperty
      }
      OnPartialBatchItemFailure?: (string | "AUTOMATIC_BISECT")
      MaximumBatchingWindowInSeconds?: number
      MaximumRecordAgeInSeconds?: number
      MaximumRetryAttempts?: number
      ParallelizationFactor?: number
      StartingPosition: (string | "TRIM_HORIZON" | "LATEST" | "AT_TIMESTAMP")
      StartingPositionTimestamp?: StringProperty
    }
    DynamoDBStreamParameters?: {
      BatchSize?: number
      DeadLetterConfig?: {
        Arn?: StringProperty
      }
      OnPartialBatchItemFailure?: (string | "AUTOMATIC_BISECT")
      MaximumBatchingWindowInSeconds?: number
      MaximumRecordAgeInSeconds?: number
      MaximumRetryAttempts?: number
      ParallelizationFactor?: number
      StartingPosition: (string | "TRIM_HORIZON" | "LATEST")
    }
    SqsQueueParameters?: {
      BatchSize?: number
      MaximumBatchingWindowInSeconds?: number
    }
    ActiveMQBrokerParameters?: {
      Credentials: any
      QueueName: StringProperty
      BatchSize?: number
      MaximumBatchingWindowInSeconds?: number
    }
    RabbitMQBrokerParameters?: {
      Credentials: any
      QueueName: StringProperty
      VirtualHost?: StringProperty
      BatchSize?: number
      MaximumBatchingWindowInSeconds?: number
    }
    ManagedStreamingKafkaParameters?: {
      TopicName: StringProperty
      StartingPosition?: (string | "TRIM_HORIZON" | "LATEST")
      BatchSize?: number
      MaximumBatchingWindowInSeconds?: number
      ConsumerGroupID?: StringProperty
      Credentials?: any
    }
    SelfManagedKafkaParameters?: {
      TopicName: StringProperty
      StartingPosition?: (string | "TRIM_HORIZON" | "LATEST")
      AdditionalBootstrapServers?: StringProperty[]
      BatchSize?: number
      MaximumBatchingWindowInSeconds?: number
      ConsumerGroupID?: StringProperty
      Credentials?: any
      ServerRootCaCertificate?: StringProperty
      Vpc?: {
        Subnets?: StringProperty[]
        SecurityGroup?: StringProperty[]
      }
    }
  }
  StateReason?: StringProperty
  Tags?: Record<string, any>
  Target: StringProperty
  TargetParameters?: {
    InputTemplate?: StringProperty
    LambdaFunctionParameters?: {
      InvocationType?: (string | "REQUEST_RESPONSE" | "FIRE_AND_FORGET")
    }
    StepFunctionStateMachineParameters?: {
      InvocationType?: (string | "REQUEST_RESPONSE" | "FIRE_AND_FORGET")
    }
    KinesisStreamParameters?: {
      PartitionKey: StringProperty
    }
    EcsTaskParameters?: {
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
      Overrides?: {
        ContainerOverrides?: {
          Command?: StringProperty[]
          Cpu?: number
          Environment?: {
            Name?: StringProperty
            Value?: StringProperty
          }[]
          EnvironmentFiles?: {
            Type: (string | "s3")
            Value: StringProperty
          }[]
          Memory?: number
          MemoryReservation?: number
          Name?: StringProperty
          ResourceRequirements?: {
            Type: (string | "GPU" | "InferenceAccelerator")
            Value: StringProperty
          }[]
        }[]
        Cpu?: StringProperty
        EphemeralStorage?: {
          SizeInGiB: number
        }
        ExecutionRoleArn?: StringProperty
        InferenceAcceleratorOverrides?: {
          DeviceName?: StringProperty
          DeviceType?: StringProperty
        }[]
        Memory?: StringProperty
        TaskRoleArn?: StringProperty
      }
      Tags?: {
        Key: StringProperty
        Value: StringProperty
      }[]
    }
    BatchJobParameters?: {
      JobDefinition: StringProperty
      JobName: StringProperty
      ArrayProperties?: {
        Size?: number
      }
      RetryStrategy?: {
        Attempts?: number
      }
      ContainerOverrides?: {
        Command?: StringProperty[]
        Environment?: {
          Name?: StringProperty
          Value?: StringProperty
        }[]
        InstanceType?: StringProperty
        ResourceRequirements?: {
          Type: (string | "GPU" | "MEMORY" | "VCPU")
          Value: StringProperty
        }[]
      }
      DependsOn?: {
        JobId?: StringProperty
        Type?: (string | "N_TO_N" | "SEQUENTIAL")
      }[]
      Parameters?: Record<string, any>
    }
    SqsQueueParameters?: {
      MessageGroupId?: StringProperty
      MessageDeduplicationId?: StringProperty
    }
    HttpParameters?: {
      PathParameterValues?: StringProperty[]
      HeaderParameters?: Record<string, any>
      QueryStringParameters?: Record<string, any>
    }
    RedshiftDataParameters?: {
      SecretManagerArn?: StringProperty
      Database: StringProperty
      DbUser?: StringProperty
      StatementName?: StringProperty
      WithEvent?: boolean
      Sqls: StringProperty[]
    }
    SageMakerPipelineParameters?: {
      PipelineParameterList?: {
        Name: StringProperty
        Value: StringProperty
      }[]
    }
    EventBridgeEventBusParameters?: {
      EndpointId?: StringProperty
      DetailType?: StringProperty
      Source?: StringProperty
      Resources?: StringProperty[]
      Time?: StringProperty
    }
    CloudWatchLogsParameters?: {
      LogStreamName?: StringProperty
      Timestamp?: StringProperty
    }
    TimestreamParameters?: {
      TimeValue: StringProperty
      EpochTimeUnit?: (string | "MILLISECONDS" | "SECONDS" | "MICROSECONDS" | "NANOSECONDS")
      TimeFieldType?: (string | "EPOCH" | "TIMESTAMP_FORMAT")
      TimestampFormat?: StringProperty
      VersionValue: StringProperty
      DimensionMappings: {
        DimensionValue: StringProperty
        DimensionValueType: (string | "VARCHAR")
        DimensionName: StringProperty
      }[]
      SingleMeasureMappings?: {
        MeasureValue: StringProperty
        MeasureValueType: (string | "DOUBLE" | "BIGINT" | "VARCHAR" | "BOOLEAN" | "TIMESTAMP")
        MeasureName: StringProperty
      }[]
      MultiMeasureMappings?: {
        MultiMeasureName: StringProperty
        MultiMeasureAttributeMappings: {
          MeasureValue: StringProperty
          MeasureValueType: (string | "DOUBLE" | "BIGINT" | "VARCHAR" | "BOOLEAN" | "TIMESTAMP")
          MultiMeasureAttributeName: StringProperty
        }[]
      }[]
    }
  }
}

export const AWSPipesPipe = ({
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
      Type: 'AWS::Pipes::Pipe',
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