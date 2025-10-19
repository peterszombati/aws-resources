import {StringProperty} from "../StringProperty"


type Properties = {
  ComputePlatform?: StringProperty
  DeploymentConfigName?: StringProperty
  MinimumHealthyHosts?: {
    Value: number
    Type: StringProperty
  }
  ZonalConfig?: {
    FirstZoneMonitorDurationInSeconds?: number /* schema format: int64*/
    MonitorDurationInSeconds?: number /* schema format: int64*/
    MinimumHealthyHostsPerZone?: {
      Value: number
      Type: StringProperty
    }
  }
  TrafficRoutingConfig?: {
    Type: StringProperty
    TimeBasedLinear?: {
      LinearInterval: number
      LinearPercentage: number
    }
    TimeBasedCanary?: {
      CanaryPercentage: number
      CanaryInterval: number
    }
  }
}

export const AWSCodeDeployDeploymentConfig = ({
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
      Type: 'AWS::CodeDeploy::DeploymentConfig',
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