import {StringProperty} from "../StringProperty"


type Properties = {
  EncryptionConfig?: {
    Provider?: {
      KeyArn?: StringProperty
    }
    Resources?: StringProperty[]
  }[]
  KubernetesNetworkConfig?: {
    ServiceIpv4Cidr?: StringProperty
    ServiceIpv6Cidr?: StringProperty
    IpFamily?: (string | "ipv4" | "ipv6")
    ElasticLoadBalancing?: {
      Enabled?: boolean
    }
  }
  Logging?: {
    ClusterLogging?: {
      EnabledTypes?: {
        Type?: (string | "api" | "audit" | "authenticator" | "controllerManager" | "scheduler")
      }[]
    }
  }
  Name?: StringProperty
  Id?: StringProperty
  ResourcesVpcConfig: {
    EndpointPrivateAccess?: boolean
    EndpointPublicAccess?: boolean
    PublicAccessCidrs?: StringProperty[]
    SecurityGroupIds?: StringProperty[]
    SubnetIds: StringProperty[]
  }
  OutpostConfig?: {
    OutpostArns: StringProperty[]
    ControlPlaneInstanceType: StringProperty
    ControlPlanePlacement?: {
      GroupName?: StringProperty
    }
  }
  AccessConfig?: {
    BootstrapClusterCreatorAdminPermissions?: boolean
    AuthenticationMode?: (string | "CONFIG_MAP" | "API_AND_CONFIG_MAP" | "API")
  }
  UpgradePolicy?: {
    SupportType?: (string | "STANDARD" | "EXTENDED")
  }
  RemoteNetworkConfig?: {
    RemoteNodeNetworks: {
      Cidrs: StringProperty[]
    }[]
    RemotePodNetworks?: {
      Cidrs: StringProperty[]
    }[]
  }
  ComputeConfig?: {
    Enabled?: boolean
    NodeRoleArn?: StringProperty
    NodePools?: StringProperty[]
  }
  StorageConfig?: {
    BlockStorage?: {
      Enabled?: boolean
    }
  }
  RoleArn: StringProperty
  Version?: StringProperty
  Force?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
  Endpoint?: StringProperty
  CertificateAuthorityData?: StringProperty
  ClusterSecurityGroupId?: StringProperty
  EncryptionConfigKeyArn?: StringProperty
  OpenIdConnectIssuerUrl?: StringProperty
  BootstrapSelfManagedAddons?: boolean
  DeletionProtection?: boolean
  ZonalShiftConfig?: {
    Enabled?: boolean
  }
}

export const AWSEKSCluster = ({
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
      Type: 'AWS::EKS::Cluster',
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