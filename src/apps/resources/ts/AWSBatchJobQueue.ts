import {StringProperty} from "../StringProperty"


type Properties = {
  JobQueueName?: StringProperty
  JobQueueArn?: StringProperty
  JobQueueType?: StringProperty
  ComputeEnvironmentOrder?: {
    ComputeEnvironment: StringProperty
    Order: number
  }[]
  ServiceEnvironmentOrder?: {
    ServiceEnvironment: StringProperty
    Order: number
  }[]
  JobStateTimeLimitActions?: {
    Action: (string | "CANCEL" | "TERMINATE")
    MaxTimeSeconds: number
    Reason: StringProperty
    State: (string | "RUNNABLE")
  }[]
  Priority: number
  State?: (string | "DISABLED" | "ENABLED")
  SchedulingPolicyArn?: StringProperty
  Tags?: Record<string, any>
}

export const AWSBatchJobQueue = ({
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
      Type: 'AWS::Batch::JobQueue',
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