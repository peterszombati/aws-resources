import {StringProperty} from "../StringProperty"


type Properties = {
  ServiceName: StringProperty
  Power: StringProperty
  ContainerArn?: StringProperty
  Scale: number
  PublicDomainNames?: {
    CertificateName?: StringProperty
    DomainNames?: StringProperty[]
  }[]
  ContainerServiceDeployment?: {
    Containers?: {
      ContainerName?: StringProperty
      Command?: StringProperty[]
      Environment?: {
        Variable?: StringProperty
        Value?: StringProperty
      }[]
      Image?: StringProperty
      Ports?: {
        Port?: StringProperty
        Protocol?: StringProperty
      }[]
    }[]
    PublicEndpoint?: {
      ContainerName?: StringProperty
      ContainerPort?: number
      HealthCheckConfig?: {
        HealthyThreshold?: number
        IntervalSeconds?: number
        Path?: StringProperty
        SuccessCodes?: StringProperty
        TimeoutSeconds?: number
        UnhealthyThreshold?: number
      }
    }
  }
  IsDisabled?: boolean
  PrivateRegistryAccess?: {
    EcrImagePullerRole?: {
      IsActive?: boolean
      PrincipalArn?: StringProperty
    }
  }
  Url?: StringProperty
  PrincipalArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSLightsailContainer = ({
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
      Type: 'AWS::Lightsail::Container',
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