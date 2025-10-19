import {StringProperty} from "../StringProperty"


type Properties = {
  ClusterName: StringProperty
  Type: (string | "oidc")
  IdentityProviderConfigName?: StringProperty
  Oidc?: {
    ClientId: StringProperty
    GroupsClaim?: StringProperty
    GroupsPrefix?: StringProperty
    IssuerUrl: StringProperty
    RequiredClaims?: {
      Key: StringProperty
      Value: StringProperty
    }[]
    UsernameClaim?: StringProperty
    UsernamePrefix?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  IdentityProviderConfigArn?: StringProperty
}

export const AWSEKSIdentityProviderConfig = ({
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
      Type: 'AWS::EKS::IdentityProviderConfig',
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