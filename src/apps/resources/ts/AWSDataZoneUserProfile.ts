import {StringProperty} from "../StringProperty"


type Properties = {
  Details?: any
  DomainId?: StringProperty
  DomainIdentifier: StringProperty
  Id?: StringProperty
  Status?: (string | "ASSIGNED" | "NOT_ASSIGNED" | "ACTIVATED" | "DEACTIVATED")
  Type?: (string | "IAM" | "SSO")
  UserIdentifier: StringProperty
  UserType?: (string | "IAM_USER" | "IAM_ROLE" | "SSO_USER")
}

export const AWSDataZoneUserProfile = ({
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
      Type: 'AWS::DataZone::UserProfile',
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