import {StringProperty} from "../StringProperty"


type Properties = {
  IdentityPoolId: StringProperty
  IdentityProviderName: StringProperty
  UseDefaults?: boolean
  PrincipalTags?: Record<string, any>
}

export const AWSCognitoIdentityPoolPrincipalTag = ({
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
      Type: 'AWS::Cognito::IdentityPoolPrincipalTag',
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