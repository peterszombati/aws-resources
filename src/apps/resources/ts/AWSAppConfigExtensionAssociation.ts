import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  ExtensionArn?: StringProperty
  ResourceArn?: StringProperty
  ExtensionIdentifier?: StringProperty
  ResourceIdentifier?: StringProperty
  ExtensionVersionNumber?: number
  Parameters?: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSAppConfigExtensionAssociation = ({
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
      Type: 'AWS::AppConfig::ExtensionAssociation',
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