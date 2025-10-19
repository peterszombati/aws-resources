import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  TracingConfig?: {
    Mode?: (string | "Active" | "PassThrough")
  }
  VpcConfig?: {
    Ipv6AllowedForDualStack?: boolean
    SecurityGroupIds?: StringProperty[]
    SubnetIds?: StringProperty[]
  }
  RuntimeManagementConfig?: {
    UpdateRuntimeOn: (string | "Auto" | "FunctionUpdate" | "Manual")
    RuntimeVersionArn?: StringProperty
  }
  ReservedConcurrentExecutions?: number
  SnapStart?: {
    ApplyOn: (string | "PublishedVersions" | "None")
  }
  FileSystemConfigs?: {
    Arn: StringProperty
    LocalMountPath: StringProperty
  }[]
  FunctionName?: StringProperty
  Runtime?: StringProperty
  KmsKeyArn?: StringProperty
  PackageType?: (string | "Image" | "Zip")
  CodeSigningConfigArn?: StringProperty
  Layers?: StringProperty[]
  Tags?: {
    Value?: StringProperty
    Key: StringProperty
  }[]
  ImageConfig?: {
    WorkingDirectory?: StringProperty
    Command?: StringProperty[]
    EntryPoint?: StringProperty[]
  }
  MemorySize?: number
  DeadLetterConfig?: {
    TargetArn?: StringProperty
  }
  Timeout?: number
  Handler?: StringProperty
  SnapStartResponse?: {
    OptimizationStatus?: (string | "On" | "Off")
    ApplyOn?: (string | "PublishedVersions" | "None")
  }
  Code: {
    SourceKMSKeyArn?: StringProperty
    S3ObjectVersion?: StringProperty
    S3Bucket?: StringProperty
    ZipFile?: StringProperty
    S3Key?: StringProperty
    ImageUri?: StringProperty
  }
  Role: StringProperty
  LoggingConfig?: {
    LogFormat?: (string | "Text" | "JSON")
    ApplicationLogLevel?: (string | "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL")
    LogGroup?: StringProperty
    SystemLogLevel?: (string | "DEBUG" | "INFO" | "WARN")
  }
  RecursiveLoop?: (string | "Allow" | "Terminate")
  Environment?: {
    Variables?: Record<string, any>
  }
  Arn?: StringProperty
  EphemeralStorage?: {
    Size: number
  }
  Architectures?: (string | "x86_64" | "arm64")[]
}

export const AWSLambdaFunction = ({
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
      Type: 'AWS::Lambda::Function',
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