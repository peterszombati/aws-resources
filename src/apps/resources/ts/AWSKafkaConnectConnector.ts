import {StringProperty} from "../StringProperty"


type Properties = {
  Capacity: {
    AutoScaling?: {
      MaxWorkerCount: number
      MinWorkerCount: number
      ScaleInPolicy: {
        CpuUtilizationPercentage: number
      }
      ScaleOutPolicy: {
        CpuUtilizationPercentage: number
      }
      McuCount: number
    }
    ProvisionedCapacity?: {
      McuCount?: number
      WorkerCount: number
    }
  }
  ConnectorArn?: StringProperty
  ConnectorConfiguration: Record<string, any>
  ConnectorDescription?: StringProperty
  ConnectorName: StringProperty
  KafkaCluster: {
    ApacheKafkaCluster: {
      BootstrapServers: StringProperty
      Vpc: {
        SecurityGroups: StringProperty[]
        Subnets: StringProperty[]
      }
    }
  }
  KafkaClusterClientAuthentication: {
    AuthenticationType: (string | "NONE" | "IAM")
  }
  KafkaClusterEncryptionInTransit: {
    EncryptionType: (string | "PLAINTEXT" | "TLS")
  }
  KafkaConnectVersion: StringProperty
  LogDelivery?: {
    WorkerLogDelivery: {
      CloudWatchLogs?: {
        Enabled: boolean
        LogGroup?: StringProperty
      }
      Firehose?: {
        DeliveryStream?: StringProperty
        Enabled: boolean
      }
      S3?: {
        Bucket?: StringProperty
        Enabled: boolean
        Prefix?: StringProperty
      }
    }
  }
  Plugins: {
    CustomPlugin: {
      CustomPluginArn: StringProperty
      Revision: number /* schema format: int64*/
    }
  }[]
  ServiceExecutionRoleArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  WorkerConfiguration?: {
    Revision: number /* schema format: int64*/
    WorkerConfigurationArn: StringProperty
  }
}

export const AWSKafkaConnectConnector = ({
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
      Type: 'AWS::KafkaConnect::Connector',
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