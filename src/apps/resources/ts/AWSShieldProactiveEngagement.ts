import {StringProperty} from "../StringProperty"


type Properties = {
  AccountId?: StringProperty
  ProactiveEngagementStatus: (string | "ENABLED" | "DISABLED")
  EmergencyContactList: {
    ContactNotes?: StringProperty
    EmailAddress: StringProperty
    PhoneNumber?: StringProperty
  }[]
}

export const AWSShieldProactiveEngagement = ({
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
      Type: 'AWS::Shield::ProactiveEngagement',
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