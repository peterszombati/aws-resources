import {StringProperty} from "../StringProperty"


type Properties = {
  ConfigurationPolicyId: StringProperty
  AssociationStatus?: (string | "SUCCESS" | "PENDING" | "FAILED")
  AssociationType?: (string | "APPLIED" | "INHERITED")
  AssociationStatusMessage?: StringProperty
  TargetId: StringProperty
  TargetType: (string | "ACCOUNT" | "ORGANIZATIONAL_UNIT" | "ROOT")
  UpdatedAt?: StringProperty
  AssociationIdentifier?: StringProperty
}

export const AWSSecurityHubPolicyAssociation = ({
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
      Type: 'AWS::SecurityHub::PolicyAssociation',
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