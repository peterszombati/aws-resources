import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  AgentVersion?: StringProperty
  Attributes?: Record<string, any>
  ChefConfiguration?: {
    BerkshelfVersion?: StringProperty
    ManageBerkshelf?: boolean
  }
  CloneAppIds?: StringProperty[]
  ClonePermissions?: boolean
  ConfigurationManager?: {
    Name?: StringProperty
    Version?: StringProperty
  }
  CustomCookbooksSource?: {
    Password?: StringProperty
    Revision?: StringProperty
    SshKey?: StringProperty
    Type?: StringProperty
    Url?: StringProperty
    Username?: StringProperty
  }
  CustomJson?: Record<string, any>
  DefaultAvailabilityZone?: StringProperty
  DefaultInstanceProfileArn: StringProperty
  DefaultOs?: StringProperty
  DefaultRootDeviceType?: StringProperty
  DefaultSshKeyName?: StringProperty
  DefaultSubnetId?: StringProperty
  EcsClusterArn?: StringProperty
  ElasticIps?: {
    Ip: StringProperty
    Name?: StringProperty
  }[]
  HostnameTheme?: StringProperty
  Name: StringProperty
  RdsDbInstances?: {
    DbPassword: StringProperty
    DbUser: StringProperty
    RdsDbInstanceArn: StringProperty
  }[]
  ServiceRoleArn: StringProperty
  SourceStackId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UseCustomCookbooks?: boolean
  UseOpsworksSecurityGroups?: boolean
  VpcId?: StringProperty
}

export const AWSOpsWorksStack = ({
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
      Type: 'AWS::OpsWorks::Stack',
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