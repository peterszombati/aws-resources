import {StringProperty} from "../StringProperty"


type Properties = {
  ConnectionArn: StringProperty
  ProviderType?: (string | "GitHub" | "Bitbucket" | "GitHubEnterprise" | "GitLab" | "GitLabSelfManaged")
  OwnerId: StringProperty
  RepositoryName: StringProperty
  EncryptionKeyArn?: StringProperty
  RepositoryLinkId?: StringProperty
  RepositoryLinkArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCodeStarConnectionsRepositoryLink = ({
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
      Type: 'AWS::CodeStarConnections::RepositoryLink',
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