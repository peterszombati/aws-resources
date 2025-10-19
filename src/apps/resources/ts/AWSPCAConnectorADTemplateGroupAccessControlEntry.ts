import {StringProperty} from "../StringProperty"


type Properties = {
  AccessRights: {
    Enroll?: (string | "ALLOW" | "DENY")
    AutoEnroll?: (string | "ALLOW" | "DENY")
  }
  GroupDisplayName: StringProperty
  GroupSecurityIdentifier?: StringProperty
  TemplateArn?: StringProperty
}

export const AWSPCAConnectorADTemplateGroupAccessControlEntry = ({
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
      Type: 'AWS::PCAConnectorAD::TemplateGroupAccessControlEntry',
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