import {StringProperty} from "../StringProperty"


type Properties = {
  StartDate?: StringProperty
  Description?: StringProperty
  AllowUnassociatedTargets: boolean
  Cutoff: number
  Schedule: StringProperty
  Duration: number
  ScheduleOffset?: number
  Id?: StringProperty
  EndDate?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name: StringProperty
  ScheduleTimezone?: StringProperty
}

export const AWSSSMMaintenanceWindow = ({
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
      Type: 'AWS::SSM::MaintenanceWindow',
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