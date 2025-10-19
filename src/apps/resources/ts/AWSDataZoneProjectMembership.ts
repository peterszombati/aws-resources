import {StringProperty} from "../StringProperty"


type Properties = {
  Designation: (string | "PROJECT_OWNER" | "PROJECT_CONTRIBUTOR" | "PROJECT_CATALOG_VIEWER" | "PROJECT_CATALOG_CONSUMER" | "PROJECT_CATALOG_STEWARD")
  DomainIdentifier: StringProperty
  Member: any
  MemberIdentifier?: StringProperty
  MemberIdentifierType?: (string | "USER_IDENTIFIER" | "GROUP_IDENTIFIER")
  ProjectIdentifier: StringProperty
}

export const AWSDataZoneProjectMembership = ({
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
      Type: 'AWS::DataZone::ProjectMembership',
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