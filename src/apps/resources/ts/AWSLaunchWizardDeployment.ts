import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreatedAt?: StringProperty
  DeletedAt?: StringProperty
  DeploymentId?: StringProperty
  DeploymentPatternName: StringProperty
  Name: StringProperty
  ResourceGroup?: StringProperty
  Specifications?: Record<string, any>
  Status?: (string | "COMPLETED" | "CREATING" | "DELETE_IN_PROGRESS" | "DELETE_INITIATING" | "DELETE_FAILED" | "DELETED" | "FAILED" | "IN_PROGRESS" | "VALIDATING")
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  WorkloadName: StringProperty
}

export const AWSLaunchWizardDeployment = ({
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
      Type: 'AWS::LaunchWizard::Deployment',
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