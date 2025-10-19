import {StringProperty} from "../StringProperty"


type Properties = {
  AdditionalEncryptionContext?: Record<string, any>
  AssociatedPortalArns?: StringProperty[]
  CreationDate?: StringProperty
  CustomerManagedKey?: StringProperty
  Description?: StringProperty
  DisplayName?: StringProperty
  IpAccessSettingsArn?: StringProperty
  IpRules: {
    IpRange: StringProperty
    Description?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWorkSpacesWebIpAccessSettings = ({
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
      Type: 'AWS::WorkSpacesWeb::IpAccessSettings',
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