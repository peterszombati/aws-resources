import {StringProperty} from "../StringProperty"


type Properties = {
  ElasticsearchClusterConfig?: {
    InstanceCount?: number
    WarmEnabled?: boolean
    WarmCount?: number
    DedicatedMasterEnabled?: boolean
    ZoneAwarenessConfig?: {
      AvailabilityZoneCount?: number
    }
    ColdStorageOptions?: {
      Enabled?: boolean
    }
    DedicatedMasterCount?: number
    InstanceType?: StringProperty
    WarmType?: StringProperty
    ZoneAwarenessEnabled?: boolean
    DedicatedMasterType?: StringProperty
  }
  DomainName?: StringProperty
  ElasticsearchVersion?: StringProperty
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
  AccessPolicies?: Record<string, any>
  DomainEndpointOptions?: {
    CustomEndpointCertificateArn?: StringProperty
    CustomEndpointEnabled?: boolean
    EnforceHTTPS?: boolean
    CustomEndpoint?: StringProperty
    TLSSecurityPolicy?: StringProperty
  }
  DomainArn?: StringProperty
  CognitoOptions?: {
    Enabled?: boolean
    IdentityPoolId?: StringProperty
    UserPoolId?: StringProperty
    RoleArn?: StringProperty
  }
  AdvancedOptions?: Record<string, any>
  AdvancedSecurityOptions?: {
    Enabled?: boolean
    MasterUserOptions?: {
      MasterUserPassword?: StringProperty
      MasterUserName?: StringProperty
      MasterUserARN?: StringProperty
    }
    AnonymousAuthEnabled?: boolean
    InternalUserDatabaseEnabled?: boolean
  }
  DomainEndpoint?: StringProperty
  EBSOptions?: {
    EBSEnabled?: boolean
    VolumeType?: StringProperty
    Iops?: number
    VolumeSize?: number
  }
  Id?: StringProperty
  Arn?: StringProperty
  EncryptionAtRestOptions?: {
    KmsKeyId?: StringProperty
    Enabled?: boolean
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSElasticsearchDomain = ({
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
      Type: 'AWS::Elasticsearch::Domain',
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