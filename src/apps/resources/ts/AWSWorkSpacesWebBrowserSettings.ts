import {StringProperty} from "../StringProperty"


type Properties = {
  AdditionalEncryptionContext?: Record<string, any>
  AssociatedPortalArns?: StringProperty[]
  BrowserPolicy?: StringProperty
  BrowserSettingsArn?: StringProperty
  CustomerManagedKey?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWorkSpacesWebBrowserSettings = ({
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
      Type: 'AWS::WorkSpacesWeb::BrowserSettings',
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