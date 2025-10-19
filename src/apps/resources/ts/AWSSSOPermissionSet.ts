import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  PermissionSetArn?: StringProperty
  Description?: StringProperty
  InstanceArn: StringProperty
  SessionDuration?: StringProperty
  RelayStateType?: StringProperty
  ManagedPolicies?: StringProperty[]
  InlinePolicy?: Record<string, any> | StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CustomerManagedPolicyReferences?: {
    Name: StringProperty
    Path?: StringProperty
  }[]
  PermissionsBoundary?: {
    CustomerManagedPolicyReference?: {
      Name: StringProperty
      Path?: StringProperty
    }
    ManagedPolicyArn?: StringProperty
  }
}

export const AWSSSOPermissionSet = ({
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
      Type: 'AWS::SSO::PermissionSet',
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