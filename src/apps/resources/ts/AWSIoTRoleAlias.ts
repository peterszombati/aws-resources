import {StringProperty} from "../StringProperty"


type Properties = {
  RoleAlias?: StringProperty
  RoleAliasArn?: StringProperty
  RoleArn: StringProperty
  CredentialDurationSeconds?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTRoleAlias = ({
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
      Type: 'AWS::IoT::RoleAlias',
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