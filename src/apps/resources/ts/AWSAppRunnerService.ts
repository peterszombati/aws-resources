import {StringProperty} from "../StringProperty"


type Properties = {
  ServiceName?: StringProperty
  ServiceId?: StringProperty
  ServiceArn?: StringProperty
  ServiceUrl?: StringProperty
  Status?: StringProperty
  SourceConfiguration: {
    CodeRepository?: {
      RepositoryUrl: StringProperty
      SourceCodeVersion: {
        Type: (string | "BRANCH")
        Value: StringProperty
      }
      CodeConfiguration?: {
        ConfigurationSource: (string | "REPOSITORY" | "API")
        CodeConfigurationValues?: {
          Runtime: (string | "PYTHON_3" | "NODEJS_12" | "NODEJS_14" | "CORRETTO_8" | "CORRETTO_11" | "NODEJS_16" | "GO_1" | "DOTNET_6" | "PHP_81" | "RUBY_31" | "PYTHON_311" | "NODEJS_18" | "NODEJS_22")
          BuildCommand?: StringProperty
          StartCommand?: StringProperty
          Port?: StringProperty
          RuntimeEnvironmentVariables?: {
            Name?: StringProperty
            Value?: StringProperty
          }[]
          RuntimeEnvironmentSecrets?: {
            Name?: StringProperty
            Value?: StringProperty
          }[]
        }
      }
      SourceDirectory?: StringProperty
    }
    ImageRepository?: {
      ImageIdentifier: StringProperty
      ImageConfiguration?: {
        StartCommand?: StringProperty
        Port?: StringProperty
        RuntimeEnvironmentVariables?: {
          Name?: StringProperty
          Value?: StringProperty
        }[]
        RuntimeEnvironmentSecrets?: {
          Name?: StringProperty
          Value?: StringProperty
        }[]
      }
      ImageRepositoryType: (string | "ECR" | "ECR_PUBLIC")
    }
    AutoDeploymentsEnabled?: boolean
    AuthenticationConfiguration?: {
      ConnectionArn?: StringProperty
      AccessRoleArn?: StringProperty
    }
  }
  InstanceConfiguration?: {
    Cpu?: StringProperty
    Memory?: StringProperty
    InstanceRoleArn?: StringProperty
  }
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  EncryptionConfiguration?: {
    KmsKey: StringProperty
  }
  HealthCheckConfiguration?: {
    Protocol?: (string | "TCP" | "HTTP")
    Path?: StringProperty
    Interval?: number
    Timeout?: number
    HealthyThreshold?: number
    UnhealthyThreshold?: number
  }
  ObservabilityConfiguration?: {
    ObservabilityEnabled: boolean
    ObservabilityConfigurationArn?: StringProperty
  }
  AutoScalingConfigurationArn?: StringProperty
  NetworkConfiguration?: {
    EgressConfiguration?: {
      EgressType: (string | "DEFAULT" | "VPC")
      VpcConnectorArn?: StringProperty
    }
    IngressConfiguration?: {
      IsPubliclyAccessible: boolean
    }
    IpAddressType?: (string | "IPV4" | "DUAL_STACK")
  }
}

export const AWSAppRunnerService = ({
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
      Type: 'AWS::AppRunner::Service',
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