import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Arn?: StringProperty
  WebserverUrl?: StringProperty
  ExecutionRoleArn?: StringProperty
  KmsKey?: StringProperty
  AirflowVersion?: StringProperty
  SourceBucketArn?: StringProperty
  DagS3Path?: StringProperty
  PluginsS3Path?: StringProperty
  PluginsS3ObjectVersion?: StringProperty
  RequirementsS3Path?: StringProperty
  RequirementsS3ObjectVersion?: StringProperty
  StartupScriptS3Path?: StringProperty
  StartupScriptS3ObjectVersion?: StringProperty
  AirflowConfigurationOptions?: Record<string, any>
  EnvironmentClass?: StringProperty
  MaxWorkers?: number
  MinWorkers?: number
  MaxWebservers?: number
  MinWebservers?: number
  Schedulers?: number
  NetworkConfiguration?: {
    SubnetIds?: StringProperty[]
    SecurityGroupIds?: StringProperty[]
  }
  LoggingConfiguration?: {
    DagProcessingLogs?: {
      Enabled?: boolean
      LogLevel?: (string | "CRITICAL" | "ERROR" | "WARNING" | "INFO" | "DEBUG")
      CloudWatchLogGroupArn?: StringProperty
    }
    SchedulerLogs?: {
      Enabled?: boolean
      LogLevel?: (string | "CRITICAL" | "ERROR" | "WARNING" | "INFO" | "DEBUG")
      CloudWatchLogGroupArn?: StringProperty
    }
    WebserverLogs?: {
      Enabled?: boolean
      LogLevel?: (string | "CRITICAL" | "ERROR" | "WARNING" | "INFO" | "DEBUG")
      CloudWatchLogGroupArn?: StringProperty
    }
    WorkerLogs?: {
      Enabled?: boolean
      LogLevel?: (string | "CRITICAL" | "ERROR" | "WARNING" | "INFO" | "DEBUG")
      CloudWatchLogGroupArn?: StringProperty
    }
    TaskLogs?: {
      Enabled?: boolean
      LogLevel?: (string | "CRITICAL" | "ERROR" | "WARNING" | "INFO" | "DEBUG")
      CloudWatchLogGroupArn?: StringProperty
    }
  }
  WeeklyMaintenanceWindowStart?: StringProperty
  Tags?: Record<string, any>
  WebserverAccessMode?: (string | "PRIVATE_ONLY" | "PUBLIC_ONLY")
  EndpointManagement?: (string | "CUSTOMER" | "SERVICE")
  CeleryExecutorQueue?: StringProperty
  DatabaseVpcEndpointService?: StringProperty
  WebserverVpcEndpointService?: StringProperty
  WorkerReplacementStrategy?: (string | "FORCED" | "GRACEFUL")
}

export const AWSMWAAEnvironment = ({
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
      Type: 'AWS::MWAA::Environment',
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