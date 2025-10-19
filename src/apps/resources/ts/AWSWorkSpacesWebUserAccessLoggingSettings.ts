import {StringProperty} from "../StringProperty"


type Properties = {
  AssociatedPortalArns?: StringProperty[]
  KinesisStreamArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UserAccessLoggingSettingsArn?: StringProperty
}

export const AWSWorkSpacesWebUserAccessLoggingSettings = ({
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
      Type: 'AWS::WorkSpacesWeb::UserAccessLoggingSettings',
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