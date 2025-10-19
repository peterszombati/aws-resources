import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CollaborationArn?: StringProperty
  CollaborationIdentifier?: StringProperty
  PrivacyBudgetTemplateIdentifier?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AutoRefresh: (string | "CALENDAR_MONTH" | "NONE")
  PrivacyBudgetType: (string | "DIFFERENTIAL_PRIVACY")
  Parameters: {
    Epsilon: number
    UsersNoisePerQuery: number
  }
  MembershipArn?: StringProperty
  MembershipIdentifier: StringProperty
}

export const AWSCleanRoomsPrivacyBudgetTemplate = ({
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
      Type: 'AWS::CleanRooms::PrivacyBudgetTemplate',
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