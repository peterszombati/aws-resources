import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  TargetId: StringProperty
  TargetType: (string | "AWS_ACCOUNT")
  PermissionSetArn: StringProperty
  PrincipalType: (string | "USER" | "GROUP")
  PrincipalId: StringProperty
}

export const AWSSSOAssignment = ({
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
      Type: 'AWS::SSO::Assignment',
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