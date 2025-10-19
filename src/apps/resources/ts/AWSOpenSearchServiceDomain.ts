import {StringProperty} from "../StringProperty"


type Properties = {
  ClusterConfig?: {
    InstanceCount?: number
    WarmEnabled?: boolean
    WarmCount?: number
    DedicatedMasterEnabled?: boolean
    ZoneAwarenessConfig?: {
      AvailabilityZoneCount?: number
    }
    DedicatedMasterCount?: number
    InstanceType?: StringProperty
    WarmType?: StringProperty
    ZoneAwarenessEnabled?: boolean
    DedicatedMasterType?: StringProperty
    MultiAZWithStandbyEnabled?: boolean
    ColdStorageOptions?: {
      Enabled?: boolean
    }
    NodeOptions?: {
      NodeType?: (string | "coordinator")
      NodeConfig?: {
        Enabled?: boolean
        Type?: StringProperty
        Count?: number
      }
    }[]
  }
  DomainName?: StringProperty
  AccessPolicies?: Record<string, any>
  IPAddressType?: StringProperty
  EngineVersion?: StringProperty
  AdvancedOptions?: Record<string, any>
  LogPublishingOptions?: Record<string, any>
  SnapshotOptions?: {
    AutomatedSnapshotStartHour?: number
  }
  VPCOptions?: {
    SecurityGroupIds?: StringProperty[]
    SubnetIds?: StringProperty[]
  }
  NodeToNodeEncryptionOptions?: {
    Enabled?: boolean
  }
  DomainEndpointOptions?: {
    CustomEndpointCertificateArn?: StringProperty
    CustomEndpointEnabled?: boolean
    EnforceHTTPS?: boolean
    CustomEndpoint?: StringProperty
    TLSSecurityPolicy?: StringProperty
  }
  CognitoOptions?: {
    Enabled?: boolean
    IdentityPoolId?: StringProperty
    UserPoolId?: StringProperty
    RoleArn?: StringProperty
  }
  AdvancedSecurityOptions?: {
    Enabled?: boolean
    MasterUserOptions?: {
      MasterUserPassword?: StringProperty
      MasterUserName?: StringProperty
      MasterUserARN?: StringProperty
    }
    InternalUserDatabaseEnabled?: boolean
    AnonymousAuthEnabled?: boolean
    SAMLOptions?: {
      Enabled?: boolean
      Idp?: {
        MetadataContent: StringProperty
        EntityId: StringProperty
      }
      MasterUserName?: StringProperty
      MasterBackendRole?: StringProperty
      SubjectKey?: StringProperty
      RolesKey?: StringProperty
      SessionTimeoutMinutes?: number
    }
    JWTOptions?: {
      Enabled?: boolean
      PublicKey?: StringProperty
      SubjectKey?: StringProperty
      RolesKey?: StringProperty
    }
    IAMFederationOptions?: {
      Enabled?: boolean
      RolesKey?: StringProperty
      SubjectKey?: StringProperty
    }
    AnonymousAuthDisableDate?: StringProperty
  }
  DomainEndpoint?: StringProperty
  DomainEndpointV2?: StringProperty
  DomainEndpoints?: Record<string, any>
  EBSOptions?: {
    EBSEnabled?: boolean
    VolumeType?: StringProperty
    Iops?: number
    VolumeSize?: number
    Throughput?: number
  }
  Id?: StringProperty
  Arn?: StringProperty
  DomainArn?: StringProperty
  EncryptionAtRestOptions?: {
    KmsKeyId?: StringProperty
    Enabled?: boolean
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  ServiceSoftwareOptions?: {
    CurrentVersion?: StringProperty
    NewVersion?: StringProperty
    UpdateAvailable?: boolean
    Cancellable?: boolean
    UpdateStatus?: StringProperty
    Description?: StringProperty
    AutomatedUpdateDate?: StringProperty
    OptionalDeployment?: boolean
  }
  OffPeakWindowOptions?: {
    Enabled?: boolean
    OffPeakWindow?: {
      WindowStartTime?: {
        Hours: number
        Minutes: number
      }
    }
  }
  SoftwareUpdateOptions?: {
    AutoSoftwareUpdateEnabled?: boolean
  }
  SkipShardMigrationWait?: boolean
  IdentityCenterOptions?: {
    EnabledAPIAccess?: boolean
    IdentityCenterInstanceARN?: StringProperty
    SubjectKey?: (string | "UserName" | "UserId" | "Email")
    RolesKey?: (string | "GroupName" | "GroupId")
    IdentityCenterApplicationARN?: StringProperty
    IdentityStoreId?: StringProperty
  }
}

export const AWSOpenSearchServiceDomain = ({
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
      Type: 'AWS::OpenSearchService::Domain',
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