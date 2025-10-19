import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Type: (string | "CodeCommit" | "Bitbucket" | "GitHubEnterpriseServer" | "S3Bucket")
  Owner?: StringProperty
  BucketName?: StringProperty
  ConnectionArn?: StringProperty
  AssociationArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCodeGuruReviewerRepositoryAssociation = ({
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
      Type: 'AWS::CodeGuruReviewer::RepositoryAssociation',
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