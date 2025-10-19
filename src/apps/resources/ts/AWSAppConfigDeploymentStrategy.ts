import {StringProperty} from "../StringProperty"


type Properties = {
  DeploymentDurationInMinutes: number
  Description?: StringProperty
  FinalBakeTimeInMinutes?: number
  GrowthFactor: number
  GrowthType?: (string | "EXPONENTIAL" | "LINEAR")
  Name: StringProperty
  ReplicateTo: (string | "NONE" | "SSM_DOCUMENT")
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  Id?: StringProperty
}

export const AWSAppConfigDeploymentStrategy = ({
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
      Type: 'AWS::AppConfig::DeploymentStrategy',
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