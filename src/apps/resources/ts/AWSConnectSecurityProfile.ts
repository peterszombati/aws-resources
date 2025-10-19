import {StringProperty} from "../StringProperty"


type Properties = {
  AllowedAccessControlTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Description?: StringProperty
  InstanceArn: StringProperty
  Permissions?: StringProperty[]
  SecurityProfileArn?: StringProperty
  SecurityProfileName: StringProperty
  TagRestrictedResources?: StringProperty[]
  HierarchyRestrictedResources?: StringProperty[]
  AllowedAccessControlHierarchyGroupId?: StringProperty
  Applications?: {
    ApplicationPermissions: StringProperty[]
    Namespace: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LastModifiedRegion?: StringProperty
  LastModifiedTime?: number
}

export const AWSConnectSecurityProfile = ({
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
      Type: 'AWS::Connect::SecurityProfile',
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