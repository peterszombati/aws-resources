import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name?: StringProperty
  Description?: StringProperty
  RoutingConfiguration?: {
    StateMachineVersionArn: StringProperty
    Weight: number
  }[]
  DeploymentPreference?: {
    StateMachineVersionArn: StringProperty
    Type: (string | "LINEAR" | "ALL_AT_ONCE" | "CANARY")
    Percentage?: number
    Interval?: number
    Alarms?: StringProperty[]
  }
}

export const AWSStepFunctionsStateMachineAlias = ({
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
      Type: 'AWS::StepFunctions::StateMachineAlias',
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