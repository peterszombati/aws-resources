import {StringProperty} from "../StringProperty"


type Properties = {
  OwnerId?: StringProperty
  ResourceName: StringProperty
  RepositoryName?: StringProperty
  ProviderType?: (string | "GitHub" | "Bitbucket" | "GitHubEnterprise" | "GitLab" | "GitLabSelfManaged")
  Branch: StringProperty
  ConfigFile: StringProperty
  SyncType: StringProperty
  RoleArn: StringProperty
  PublishDeploymentStatus?: (string | "ENABLED" | "DISABLED")
  TriggerResourceUpdateOn?: (string | "ANY_CHANGE" | "FILE_CHANGE")
  RepositoryLinkId: StringProperty
}

export const AWSCodeStarConnectionsSyncConfiguration = ({
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
      Type: 'AWS::CodeStarConnections::SyncConfiguration',
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