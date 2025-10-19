import {StringProperty} from "../StringProperty"


type Properties = {
  DeploymentStrategyId: StringProperty
  ConfigurationProfileId: StringProperty
  EnvironmentId: StringProperty
  KmsKeyIdentifier?: StringProperty
  Description?: StringProperty
  ConfigurationVersion: StringProperty
  State?: (string | "BAKING" | "VALIDATING" | "DEPLOYING" | "COMPLETE" | "ROLLING_BACK" | "ROLLED_BACK" | "REVERTED")
  DeploymentNumber?: StringProperty
  ApplicationId: StringProperty
  DynamicExtensionParameters?: {
    ParameterValue?: StringProperty
    ExtensionReference?: StringProperty
    ParameterName?: StringProperty
  }[]
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
}

export const AWSAppConfigDeployment = ({
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
      Type: 'AWS::AppConfig::Deployment',
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