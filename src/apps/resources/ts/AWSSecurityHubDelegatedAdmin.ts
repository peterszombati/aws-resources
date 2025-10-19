import {StringProperty} from "../StringProperty"


type Properties = {
  DelegatedAdminIdentifier?: StringProperty
  AdminAccountId: StringProperty
  Status?: (string | "ENABLED" | "DISABLE_IN_PROGRESS")
}

export const AWSSecurityHubDelegatedAdmin = ({
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
      Type: 'AWS::SecurityHub::DelegatedAdmin',
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