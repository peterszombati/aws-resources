import {StringProperty} from "../StringProperty"


type Properties = {
  EnableIssues?: boolean
  ConnectionArn?: StringProperty
  RepositoryName: StringProperty
  RepositoryAccessToken?: StringProperty
  Id?: StringProperty
  RepositoryOwner: StringProperty
  IsPrivate?: boolean
  Code?: {
    S3: {
      ObjectVersion?: StringProperty
      Bucket: StringProperty
      Key: StringProperty
    }
  }
  RepositoryDescription?: StringProperty
}

export const AWSCodeStarGitHubRepository = ({
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
      Type: 'AWS::CodeStar::GitHubRepository',
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