import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AssumeRolePolicyDocument: Record<string, any> | StringProperty
  Description?: StringProperty
  ManagedPolicyArns?: StringProperty[]
  MaxSessionDuration?: number
  Path?: StringProperty
  PermissionsBoundary?: StringProperty
  Policies?: {
    PolicyDocument: StringProperty | Record<string, any>
    PolicyName: StringProperty
  }[]
  RoleId?: StringProperty
  RoleName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIAMRole = ({
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
      Type: 'AWS::IAM::Role',
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