import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  SshUsername?: StringProperty
  AllowSelfManagement?: boolean
  IamUserArn: StringProperty
  SshPublicKey?: StringProperty
}

export const AWSOpsWorksUserProfile = ({
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
      Type: 'AWS::OpsWorks::UserProfile',
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