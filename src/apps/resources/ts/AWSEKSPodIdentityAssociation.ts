import {StringProperty} from "../StringProperty"


type Properties = {
  ClusterName: StringProperty
  RoleArn: StringProperty
  Namespace: StringProperty
  ServiceAccount: StringProperty
  AssociationArn?: StringProperty
  AssociationId?: StringProperty
  TargetRoleArn?: StringProperty
  ExternalId?: StringProperty
  DisableSessionTags?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEKSPodIdentityAssociation = ({
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
      Type: 'AWS::EKS::PodIdentityAssociation',
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