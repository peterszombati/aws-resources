import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Id?: StringProperty
  State?: StringProperty
  Code: {
    S3Bucket?: StringProperty
    S3Key?: StringProperty
    S3ObjectVersion?: StringProperty
    Script?: StringProperty
    Handler?: StringProperty
    SourceLocationArn?: StringProperty
    Dependencies?: {
      Type?: (string | "LambdaLayer")
      Reference: StringProperty
    }[]
    BlueprintTypes?: StringProperty[]
  }
  ArtifactS3Location: StringProperty
  ArtifactConfig?: {
    S3Encryption?: {
      EncryptionMode?: StringProperty
      KmsKeyArn?: StringProperty
    }
  }
  Schedule: {
    Expression: StringProperty
    DurationInSeconds?: StringProperty
    RetryConfig?: {
      MaxRetries: number
    }
  }
  ExecutionRoleArn: StringProperty
  RuntimeVersion: StringProperty
  SuccessRetentionPeriod?: number
  FailureRetentionPeriod?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VPCConfig?: {
    VpcId?: StringProperty
    SubnetIds: StringProperty[]
    SecurityGroupIds: StringProperty[]
    Ipv6AllowedForDualStack?: boolean
  }
  RunConfig?: {
    TimeoutInSeconds?: number
    MemoryInMB?: number
    EphemeralStorage?: number
    ActiveTracing?: boolean
    EnvironmentVariables?: Record<string, any>
  }
  StartCanaryAfterCreation?: boolean
  VisualReference?: {
    BaseCanaryRunId: StringProperty
    BaseScreenshots?: {
      ScreenshotName: StringProperty
      IgnoreCoordinates?: StringProperty[]
    }[]
    BrowserType?: (string | "CHROME" | "FIREFOX")
  }
  DeleteLambdaResourcesOnCanaryDeletion?: boolean
  ResourcesToReplicateTags?: (string | "lambda-function")[]
  ProvisionedResourceCleanup?: (string | "AUTOMATIC" | "OFF")
  DryRunAndUpdate?: boolean
  BrowserConfigs?: {
    BrowserType: (string | "CHROME" | "FIREFOX")
  }[]
  VisualReferences?: {
    BaseCanaryRunId: StringProperty
    BaseScreenshots?: {
      ScreenshotName: StringProperty
      IgnoreCoordinates?: StringProperty[]
    }[]
    BrowserType?: (string | "CHROME" | "FIREFOX")
  }[]
}

export const AWSSyntheticsCanary = ({
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
      Type: 'AWS::Synthetics::Canary',
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