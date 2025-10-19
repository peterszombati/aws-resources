import {StringProperty} from "../StringProperty"


type Properties = {
  GroupId: StringProperty
  IdentityStoreId: StringProperty
  MemberId: {
    UserId: StringProperty
  }
  MembershipId?: StringProperty
}

export const AWSIdentityStoreGroupMembership = ({
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
      Type: 'AWS::IdentityStore::GroupMembership',
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