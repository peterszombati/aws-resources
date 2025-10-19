import {StringProperty} from "../StringProperty"


type Properties = {
  Configuration: any
  Details?: {
    ClientIds?: StringProperty[]
    UserPoolArn?: StringProperty
    DiscoveryUrl?: StringProperty
    OpenIdIssuer?: (string | "COGNITO")
  }
  IdentitySourceId?: StringProperty
  PolicyStoreId: StringProperty
  PrincipalEntityType?: StringProperty
}

export const AWSVerifiedPermissionsIdentitySource = ({
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
      Type: 'AWS::VerifiedPermissions::IdentitySource',
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