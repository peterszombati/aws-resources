import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  BatchSize?: number
  BisectBatchOnFunctionError?: boolean
  DestinationConfig?: {
    OnFailure?: {
      Destination?: StringProperty
    }
  }
  Enabled?: boolean
  EventSourceArn?: StringProperty
  EventSourceMappingArn?: StringProperty
  FilterCriteria?: {
    Filters?: {
      Pattern?: StringProperty
    }[]
  }
  KmsKeyArn?: StringProperty
  FunctionName: StringProperty
  MaximumBatchingWindowInSeconds?: number
  MaximumRecordAgeInSeconds?: number
  MaximumRetryAttempts?: number
  ParallelizationFactor?: number
  StartingPosition?: StringProperty
  StartingPositionTimestamp?: number
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  Topics?: StringProperty[]
  Queues?: StringProperty[]
  SourceAccessConfigurations?: {
    Type?: (string | "BASIC_AUTH" | "VPC_SUBNET" | "VPC_SECURITY_GROUP" | "SASL_SCRAM_512_AUTH" | "SASL_SCRAM_256_AUTH" | "VIRTUAL_HOST" | "CLIENT_CERTIFICATE_TLS_AUTH" | "SERVER_ROOT_CA_CERTIFICATE")
    URI?: StringProperty
  }[]
  TumblingWindowInSeconds?: number
  FunctionResponseTypes?: (string | "ReportBatchItemFailures")[]
  SelfManagedEventSource?: {
    Endpoints?: {
      KafkaBootstrapServers?: StringProperty[]
    }
  }
  AmazonManagedKafkaEventSourceConfig?: {
    ConsumerGroupId?: StringProperty
    SchemaRegistryConfig?: {
      SchemaRegistryURI?: StringProperty
      EventRecordFormat?: (string | "JSON" | "SOURCE")
      AccessConfigs?: {
        Type?: (string | "BASIC_AUTH" | "CLIENT_CERTIFICATE_TLS_AUTH" | "SERVER_ROOT_CA_CERTIFICATE")
        URI?: StringProperty
      }[]
      SchemaValidationConfigs?: {
        Attribute?: (string | "KEY" | "VALUE")
      }[]
    }
  }
  SelfManagedKafkaEventSourceConfig?: {
    ConsumerGroupId?: StringProperty
    SchemaRegistryConfig?: {
      SchemaRegistryURI?: StringProperty
      EventRecordFormat?: (string | "JSON" | "SOURCE")
      AccessConfigs?: {
        Type?: (string | "BASIC_AUTH" | "CLIENT_CERTIFICATE_TLS_AUTH" | "SERVER_ROOT_CA_CERTIFICATE")
        URI?: StringProperty
      }[]
      SchemaValidationConfigs?: {
        Attribute?: (string | "KEY" | "VALUE")
      }[]
    }
  }
  ScalingConfig?: {
    MaximumConcurrency?: number
  }
  DocumentDBEventSourceConfig?: {
    DatabaseName?: StringProperty
    CollectionName?: StringProperty
    FullDocument?: (string | "UpdateLookup" | "Default")
  }
  ProvisionedPollerConfig?: {
    MinimumPollers?: number
    MaximumPollers?: number
  }
  MetricsConfig?: {
    Metrics?: (string | "EventCount")[]
  }
}

export const AWSLambdaEventSourceMapping = ({
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
      Type: 'AWS::Lambda::EventSourceMapping',
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