import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  StateMachineArn: StringProperty
  StateMachineRevisionId?: StringProperty
  Description?: StringProperty
}

export const AWSStepFunctionsStateMachineVersion = ({
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
      Type: 'AWS::StepFunctions::StateMachineVersion',
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