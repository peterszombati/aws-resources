import {StringProperty} from "../StringProperty"


type Properties = {
  ProfilingGroupName: StringProperty
  ComputePlatform?: (string | "Default" | "AWSLambda")
  AgentPermissions?: {
    Principals: StringProperty[]
  }
  AnomalyDetectionNotificationConfiguration?: {
    channelId?: StringProperty
    channelUri: StringProperty
  }[]
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCodeGuruProfilerProfilingGroup = ({
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
      Type: 'AWS::CodeGuruProfiler::ProfilingGroup',
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