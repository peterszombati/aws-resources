import {StringProperty} from "../StringProperty"


type Properties = {
  TeamId: StringProperty
  ChannelId: StringProperty
  ChannelName?: StringProperty
  NotifyOnCreateOrReopenCase?: boolean
  NotifyOnAddCorrespondenceToCase?: boolean
  NotifyOnResolveCase?: boolean
  NotifyOnCaseSeverity: (string | "none" | "all" | "high")
  ChannelRoleArn: StringProperty
}

export const AWSSupportAppSlackChannelConfiguration = ({
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
      Type: 'AWS::SupportApp::SlackChannelConfiguration',
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