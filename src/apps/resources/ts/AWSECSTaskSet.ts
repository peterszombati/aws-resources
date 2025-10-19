import {StringProperty} from "../StringProperty"


type Properties = {
  PlatformVersion?: StringProperty
  ExternalId?: StringProperty
  Cluster: StringProperty
  LoadBalancers?: {
    TargetGroupArn?: StringProperty
    ContainerName?: StringProperty
    ContainerPort?: number
  }[]
  Service: StringProperty
  Scale?: {
    Value?: number
    Unit?: (string | "PERCENT")
  }
  ServiceRegistries?: {
    ContainerName?: StringProperty
    Port?: number
    ContainerPort?: number
    RegistryArn?: StringProperty
  }[]
  CapacityProviderStrategy?: {
    CapacityProvider?: StringProperty
    Base?: number
    Weight?: number
  }[]
  LaunchType?: (string | "EC2" | "FARGATE")
  TaskDefinition: StringProperty
  NetworkConfiguration?: {
    AwsVpcConfiguration?: {
      SecurityGroups?: StringProperty[]
      Subnets: StringProperty[]
      AssignPublicIp?: (string | "DISABLED" | "ENABLED")
    }
  }
  Id?: StringProperty
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
}

export const AWSECSTaskSet = ({
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
      Type: 'AWS::ECS::TaskSet',
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