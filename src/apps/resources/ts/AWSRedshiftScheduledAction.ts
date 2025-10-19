import {StringProperty} from "../StringProperty"


type Properties = {
  ScheduledActionDescription?: StringProperty
  ScheduledActionName: StringProperty
  EndTime?: StringProperty
  State?: (string | "ACTIVE" | "DISABLED")
  Schedule?: StringProperty
  IamRole?: StringProperty
  StartTime?: StringProperty
  Enable?: boolean
  TargetAction?: Record<string, any>
  NextInvocations?: StringProperty[]
}

export const AWSRedshiftScheduledAction = ({
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
      Type: 'AWS::Redshift::ScheduledAction',
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