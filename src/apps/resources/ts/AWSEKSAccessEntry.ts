import {StringProperty} from "../StringProperty"


type Properties = {
  ClusterName: StringProperty
  PrincipalArn: StringProperty
  Username?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AccessEntryArn?: StringProperty
  KubernetesGroups?: StringProperty[]
  AccessPolicies?: {
    PolicyArn: StringProperty
    AccessScope: {
      Type: (string | "namespace" | "cluster")
      Namespaces?: StringProperty[]
    }
  }[]
  Type?: StringProperty
}

export const AWSEKSAccessEntry = ({
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
      Type: 'AWS::EKS::AccessEntry',
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