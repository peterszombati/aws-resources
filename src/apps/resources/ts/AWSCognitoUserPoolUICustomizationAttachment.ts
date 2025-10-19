import {StringProperty} from "../StringProperty"


type Properties = {
  UserPoolId: StringProperty
  ClientId: StringProperty
  CSS?: StringProperty
}

export const AWSCognitoUserPoolUICustomizationAttachment = ({
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
      Type: 'AWS::Cognito::UserPoolUICustomizationAttachment',
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