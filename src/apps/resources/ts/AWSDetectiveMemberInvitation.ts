import {StringProperty} from "../StringProperty"


type Properties = {
  GraphArn: StringProperty
  MemberId: StringProperty
  MemberEmailAddress: StringProperty
  DisableEmailNotification?: boolean
  Message?: StringProperty
}

export const AWSDetectiveMemberInvitation = ({
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
      Type: 'AWS::Detective::MemberInvitation',
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