import {StringProperty} from "../StringProperty"


type Properties = {
  Capabilities?: {
    Amounts?: {
      Name: StringProperty
      Min: number
      Max?: number
    }[]
    Attributes?: {
      Name: StringProperty
      Values: StringProperty[]
    }[]
  }
  Configuration: any
  Description?: StringProperty
  DisplayName: StringProperty
  FarmId: StringProperty
  FleetId?: StringProperty
  HostConfiguration?: {
    ScriptBody: StringProperty
    ScriptTimeoutSeconds?: number
  }
  MaxWorkerCount: number
  MinWorkerCount?: number
  RoleArn: StringProperty
  Status?: (string | "ACTIVE" | "CREATE_IN_PROGRESS" | "UPDATE_IN_PROGRESS" | "CREATE_FAILED" | "UPDATE_FAILED" | "SUSPENDED")
  StatusMessage?: StringProperty
  WorkerCount?: number
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDeadlineFleet = ({
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
      Type: 'AWS::Deadline::Fleet',
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