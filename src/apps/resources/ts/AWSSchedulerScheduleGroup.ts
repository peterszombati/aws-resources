import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreationDate?: StringProperty
  LastModificationDate?: StringProperty
  Name?: StringProperty
  State?: (string | "ACTIVE" | "DELETING")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSchedulerScheduleGroup = ({
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
      Type: 'AWS::Scheduler::ScheduleGroup',
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