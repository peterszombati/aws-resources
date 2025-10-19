import {StringProperty} from "../StringProperty"


type Properties = {
  UserPoolId: StringProperty
  Identifier: StringProperty
  Name: StringProperty
  Scopes?: {
    ScopeDescription: StringProperty
    ScopeName: StringProperty
  }[]
}

export const AWSCognitoUserPoolResourceServer = ({
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
      Type: 'AWS::Cognito::UserPoolResourceServer',
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