import {StringProperty} from "../StringProperty"


type Properties = {
  AmountRequirementName: StringProperty
  CurrentCount?: number
  Description?: StringProperty
  DisplayName: StringProperty
  FarmId: StringProperty
  LimitId?: StringProperty
  MaxCount: number
}

export const AWSDeadlineLimit = ({
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
      Type: 'AWS::Deadline::Limit',
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