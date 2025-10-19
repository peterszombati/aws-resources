import {StringProperty} from "../StringProperty"


type Properties = {
  StackSetName: StringProperty
  StackSetId?: StringProperty
  AdministrationRoleARN?: StringProperty
  AutoDeployment?: {
    Enabled?: boolean
    RetainStacksOnAccountRemoval?: boolean
  }
  Capabilities?: (string | "CAPABILITY_IAM" | "CAPABILITY_NAMED_IAM" | "CAPABILITY_AUTO_EXPAND")[]
  Description?: StringProperty
  ExecutionRoleName?: StringProperty
  OperationPreferences?: {
    FailureToleranceCount?: number
    FailureTolerancePercentage?: number
    MaxConcurrentCount?: number
    MaxConcurrentPercentage?: number
    RegionOrder?: StringProperty[]
    RegionConcurrencyType?: (string | "SEQUENTIAL" | "PARALLEL")
    ConcurrencyMode?: (string | "STRICT_FAILURE_TOLERANCE" | "SOFT_FAILURE_TOLERANCE")
  }
  StackInstancesGroup?: {
    DeploymentTargets: {
      Accounts?: StringProperty[]
      AccountsUrl?: StringProperty
      OrganizationalUnitIds?: StringProperty[]
      AccountFilterType?: (string | "NONE" | "UNION" | "INTERSECTION" | "DIFFERENCE")
    }
    Regions: StringProperty[]
    ParameterOverrides?: {
      ParameterKey: StringProperty
      ParameterValue: StringProperty
    }[]
  }[]
  Parameters?: {
    ParameterKey: StringProperty
    ParameterValue: StringProperty
  }[]
  PermissionModel: (string | "SERVICE_MANAGED" | "SELF_MANAGED")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TemplateBody?: StringProperty
  TemplateURL?: StringProperty
  CallAs?: (string | "SELF" | "DELEGATED_ADMIN")
  ManagedExecution?: {
    Active?: boolean
  }
}

export const AWSCloudFormationStackSet = ({
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
      Type: 'AWS::CloudFormation::StackSet',
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