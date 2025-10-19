import {StringProperty} from "../StringProperty"


type Properties = {
  AuthenticationProviders: (string | "AWS_SSO" | "SAML")[]
  SsoClientId?: StringProperty
  SamlConfiguration?: {
    IdpMetadata: {
      Url?: StringProperty
      Xml?: StringProperty
    }
    AssertionAttributes?: {
      Name?: StringProperty
      Login?: StringProperty
      Email?: StringProperty
      Groups?: StringProperty
      Role?: StringProperty
      Org?: StringProperty
    }
    RoleValues?: {
      Editor?: StringProperty[]
      Admin?: StringProperty[]
    }
    AllowedOrganizations?: StringProperty[]
    LoginValidityDuration?: number
  }
  NetworkAccessControl?: {
    PrefixListIds?: StringProperty[]
    VpceIds?: StringProperty[]
  }
  VpcConfiguration?: {
    SecurityGroupIds: StringProperty[]
    SubnetIds: StringProperty[]
  }
  SamlConfigurationStatus?: (string | "CONFIGURED" | "NOT_CONFIGURED")
  ClientToken?: StringProperty
  Status?: (string | "ACTIVE" | "CREATING" | "DELETING" | "FAILED" | "UPDATING" | "UPGRADING" | "VERSION_UPDATING" | "DELETION_FAILED" | "CREATION_FAILED" | "UPDATE_FAILED" | "UPGRADE_FAILED" | "LICENSE_REMOVAL_FAILED" | "VERSION_UPDATE_FAILED")
  CreationTimestamp?: StringProperty
  ModificationTimestamp?: StringProperty
  GrafanaVersion?: StringProperty
  Endpoint?: StringProperty
  AccountAccessType: (string | "CURRENT_ACCOUNT" | "ORGANIZATION")
  OrganizationRoleName?: StringProperty
  PermissionType: (string | "CUSTOMER_MANAGED" | "SERVICE_MANAGED")
  StackSetName?: StringProperty
  DataSources?: (string | "AMAZON_OPENSEARCH_SERVICE" | "CLOUDWATCH" | "PROMETHEUS" | "XRAY" | "TIMESTREAM" | "SITEWISE" | "ATHENA" | "REDSHIFT")[]
  Description?: StringProperty
  Id?: StringProperty
  Name?: StringProperty
  NotificationDestinations?: (string | "SNS")[]
  OrganizationalUnits?: StringProperty[]
  RoleArn?: StringProperty
  PluginAdminEnabled?: boolean
}

export const AWSGrafanaWorkspace = ({
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
      Type: 'AWS::Grafana::Workspace',
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