import {StringProperty} from "../StringProperty"


type Properties = {
  Connections?: {
    Connections?: StringProperty[]
  }
  MaxRetries?: number
  Description?: StringProperty
  Timeout?: number
  AllocatedCapacity?: number
  Name?: StringProperty
  Role: StringProperty
  DefaultArguments?: Record<string, any>
  NotificationProperty?: {
    NotifyDelayAfter?: number
  }
  WorkerType?: (string | "Standard" | "G.1X" | "G.2X" | "G.025X" | "G.4X" | "G.8X" | "Z.2X" | "G.12X" | "G.16X" | "R.1X" | "R.2X" | "R.4X" | "R.8X")
  ExecutionClass?: StringProperty
  LogUri?: StringProperty
  Command: {
    Name?: StringProperty
    PythonVersion?: StringProperty
    Runtime?: StringProperty
    ScriptLocation?: StringProperty
  }
  GlueVersion?: StringProperty
  ExecutionProperty?: {
    MaxConcurrentRuns?: number
  }
  SecurityConfiguration?: StringProperty
  NumberOfWorkers?: number
  Tags?: Record<string, any>
  MaxCapacity?: number
  NonOverridableArguments?: Record<string, any>
  MaintenanceWindow?: StringProperty
  JobMode?: StringProperty
  JobRunQueuingEnabled?: boolean
}

export const AWSGlueJob = ({
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
      Type: 'AWS::Glue::Job',
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