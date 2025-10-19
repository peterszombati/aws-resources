import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  BrokerName: StringProperty
  EngineType: StringProperty
  EngineVersion?: StringProperty
  EngineVersionCurrent?: StringProperty
  DeploymentMode: StringProperty
  HostInstanceType: StringProperty
  PubliclyAccessible: boolean
  AuthenticationStrategy?: StringProperty
  LdapServerMetadata?: {
    Hosts: StringProperty[]
    UserRoleName?: StringProperty
    UserSearchMatching: StringProperty
    RoleName?: StringProperty
    UserBase: StringProperty
    UserSearchSubtree?: boolean
    RoleSearchMatching: StringProperty
    ServiceAccountUsername: StringProperty
    RoleBase: StringProperty
    ServiceAccountPassword?: StringProperty
    RoleSearchSubtree?: boolean
  }
  StorageType?: StringProperty
  EncryptionOptions?: {
    KmsKeyId?: StringProperty
    UseAwsOwnedKey: boolean
  }
  Configuration?: {
    Revision: number
    Id: StringProperty
  }
  ConfigurationRevision?: StringProperty
  ConfigurationId?: StringProperty
  DataReplicationMode?: StringProperty
  DataReplicationPrimaryBrokerArn?: StringProperty
  MaintenanceWindowStartTime?: {
    DayOfWeek: StringProperty
    TimeOfDay: StringProperty
    TimeZone: StringProperty
  }
  AutoMinorVersionUpgrade?: boolean
  Users?: {
    ReplicationUser?: boolean
    ConsoleAccess?: boolean
    Username: StringProperty
    Groups?: StringProperty[]
    Password: StringProperty
  }[]
  StompEndpoints?: StringProperty[]
  MqttEndpoints?: StringProperty[]
  AmqpEndpoints?: StringProperty[]
  ConsoleURLs?: StringProperty[]
  WssEndpoints?: StringProperty[]
  OpenWireEndpoints?: StringProperty[]
  Logs?: {
    Audit?: boolean
    General?: boolean
  }
  SecurityGroups?: StringProperty[]
  SubnetIds?: StringProperty[]
  IpAddresses?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSAmazonMQBroker = ({
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
      Type: 'AWS::AmazonMQ::Broker',
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