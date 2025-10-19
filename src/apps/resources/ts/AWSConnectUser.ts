import {StringProperty} from "../StringProperty"


type Properties = {
  UserArn?: StringProperty
  RoutingProfileArn: StringProperty
  Username: StringProperty
  PhoneConfig: {
    AutoAccept?: boolean
    PhoneType: (string | "SOFT_PHONE" | "DESK_PHONE")
    PersistentConnection?: boolean
    DeskPhoneNumber?: StringProperty
    AfterContactWorkTimeLimit?: number
  }
  InstanceArn: StringProperty
  DirectoryUserId?: StringProperty
  IdentityInfo?: {
    Email?: StringProperty
    FirstName?: StringProperty
    SecondaryEmail?: StringProperty
    LastName?: StringProperty
    Mobile?: StringProperty
  }
  HierarchyGroupArn?: StringProperty
  SecurityProfileArns: StringProperty[]
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  UserProficiencies?: {
    AttributeValue: StringProperty
    AttributeName: StringProperty
    Level: number
  }[]
  Password?: StringProperty
}

export const AWSConnectUser = ({
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
      Type: 'AWS::Connect::User',
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