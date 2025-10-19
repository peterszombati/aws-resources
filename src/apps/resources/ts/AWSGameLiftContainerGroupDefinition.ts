import {StringProperty} from "../StringProperty"


type Properties = {
  ContainerGroupDefinitionArn?: StringProperty
  CreationTime?: StringProperty
  OperatingSystem: (string | "AMAZON_LINUX_2023")
  Name: StringProperty
  ContainerGroupType?: (string | "GAME_SERVER" | "PER_INSTANCE")
  TotalMemoryLimitMebibytes: number
  TotalVcpuLimit: number
  GameServerContainerDefinition?: {
    ContainerName: StringProperty
    DependsOn?: {
      ContainerName: StringProperty
      Condition: (string | "START" | "COMPLETE" | "SUCCESS" | "HEALTHY")
    }[]
    ServerSdkVersion: StringProperty
    ImageUri: StringProperty
    ResolvedImageDigest?: StringProperty
    EnvironmentOverride?: {
      Name: StringProperty
      Value: StringProperty
    }[]
    PortConfiguration?: {
      ContainerPortRanges: {
        FromPort: number
        Protocol: (string | "TCP" | "UDP")
        ToPort: number
      }[]
    }
    MountPoints?: {
      InstancePath: StringProperty
      ContainerPath?: StringProperty
      AccessLevel?: (string | "READ_ONLY" | "READ_AND_WRITE")
    }[]
  }
  SupportContainerDefinitions?: {
    ContainerName: StringProperty
    Vcpu?: number
    DependsOn?: {
      ContainerName: StringProperty
      Condition: (string | "START" | "COMPLETE" | "SUCCESS" | "HEALTHY")
    }[]
    Essential?: boolean
    ImageUri: StringProperty
    ResolvedImageDigest?: StringProperty
    MemoryHardLimitMebibytes?: number
    EnvironmentOverride?: {
      Name: StringProperty
      Value: StringProperty
    }[]
    PortConfiguration?: {
      ContainerPortRanges: {
        FromPort: number
        Protocol: (string | "TCP" | "UDP")
        ToPort: number
      }[]
    }
    HealthCheck?: {
      Command: StringProperty[]
      Interval?: number
      Timeout?: number
      Retries?: number
      StartPeriod?: number
    }
    MountPoints?: {
      InstancePath: StringProperty
      ContainerPath?: StringProperty
      AccessLevel?: (string | "READ_ONLY" | "READ_AND_WRITE")
    }[]
  }[]
  VersionNumber?: number
  SourceVersionNumber?: number
  VersionDescription?: StringProperty
  Status?: (string | "READY" | "COPYING" | "FAILED")
  StatusReason?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGameLiftContainerGroupDefinition = ({
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
      Type: 'AWS::GameLift::ContainerGroupDefinition',
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