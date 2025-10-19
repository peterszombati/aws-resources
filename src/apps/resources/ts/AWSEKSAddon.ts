import {StringProperty} from "../StringProperty"


type Properties = {
  ClusterName: StringProperty
  AddonName: StringProperty
  AddonVersion?: StringProperty
  PreserveOnDelete?: boolean
  ResolveConflicts?: (string | "NONE" | "OVERWRITE" | "PRESERVE")
  ServiceAccountRoleArn?: StringProperty
  PodIdentityAssociations?: {
    ServiceAccount: StringProperty
    RoleArn: StringProperty
  }[]
  ConfigurationValues?: StringProperty
  Arn?: StringProperty
  NamespaceConfig?: {
    Namespace: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEKSAddon = ({
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
      Type: 'AWS::EKS::Addon',
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