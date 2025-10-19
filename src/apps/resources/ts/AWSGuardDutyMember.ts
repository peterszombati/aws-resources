import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: StringProperty
  MemberId?: StringProperty
  Email: StringProperty
  Message?: StringProperty
  DisableEmailNotification?: boolean
  DetectorId?: StringProperty
}

export const AWSGuardDutyMember = ({
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
      Type: 'AWS::GuardDuty::Member',
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