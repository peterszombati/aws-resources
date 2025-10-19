import {StringProperty} from "../StringProperty"


type Properties = {
  ConfigurationDefinitions: {
    Type: StringProperty
    Parameters: Record<string, any>
    TypeVersion?: StringProperty
    LocalDeploymentExecutionRoleName?: StringProperty
    LocalDeploymentAdministrationRoleArn?: StringProperty
    id?: StringProperty
  }[]
  CreatedAt?: StringProperty
  Description?: StringProperty
  LastModifiedAt?: StringProperty
  ManagerArn?: StringProperty
  Name?: StringProperty
  StatusSummaries?: {
    StatusType: (string | "Deployment" | "AsyncExecutions")
    Status?: (string | "INITIALIZING" | "DEPLOYING" | "SUCCEEDED" | "DELETING" | "STOPPING" | "FAILED" | "STOPPED" | "DELETE_FAILED" | "STOP_FAILED" | "NONE")
    StatusMessage?: StringProperty
    LastUpdatedAt: StringProperty
    StatusDetails?: Record<string, any>
  }[]
  Tags?: Record<string, any>
}

export const AWSSSMQuickSetupConfigurationManager = ({
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
      Type: 'AWS::SSMQuickSetup::ConfigurationManager',
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