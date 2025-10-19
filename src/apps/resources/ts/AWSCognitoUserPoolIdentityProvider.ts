import {StringProperty} from "../StringProperty"


type Properties = {
  UserPoolId: StringProperty
  ProviderName: StringProperty
  ProviderType: StringProperty
  ProviderDetails: Record<string, any>
  IdpIdentifiers?: StringProperty[]
  AttributeMapping?: Record<string, any>
}

export const AWSCognitoUserPoolIdentityProvider = ({
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
      Type: 'AWS::Cognito::UserPoolIdentityProvider',
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