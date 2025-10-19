import {StringProperty} from "../StringProperty"


type Properties = {
  Path?: StringProperty
  ManagedPolicyArns?: StringProperty[]
  Policies?: {
    PolicyDocument: Record<string, any> | StringProperty
    PolicyName: StringProperty
  }[]
  UserName?: StringProperty
  Groups?: StringProperty[]
  Arn?: StringProperty
  LoginProfile?: {
    PasswordResetRequired?: boolean
    Password: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  PermissionsBoundary?: StringProperty
}

export const AWSIAMUser = ({
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
      Type: 'AWS::IAM::User',
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