import {StringProperty} from "../StringProperty"


type Properties = {
  UserPoolId: StringProperty
  Username: StringProperty
  GroupName: StringProperty
}

export const AWSCognitoUserPoolUserToGroupAttachment = ({
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
      Type: 'AWS::Cognito::UserPoolUserToGroupAttachment',
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