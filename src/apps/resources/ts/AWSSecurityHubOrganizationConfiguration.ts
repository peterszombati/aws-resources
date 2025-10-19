import {StringProperty} from "../StringProperty"


type Properties = {
  AutoEnable: boolean
  AutoEnableStandards?: (string | "DEFAULT" | "NONE")
  ConfigurationType?: (string | "CENTRAL" | "LOCAL")
  Status?: (string | "PENDING" | "ENABLED" | "FAILED")
  StatusMessage?: StringProperty
  MemberAccountLimitReached?: boolean
  OrganizationConfigurationIdentifier?: StringProperty
}

export const AWSSecurityHubOrganizationConfiguration = ({
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
      Type: 'AWS::SecurityHub::OrganizationConfiguration',
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