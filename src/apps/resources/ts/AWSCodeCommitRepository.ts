import {StringProperty} from "../StringProperty"


type Properties = {
  CloneUrlHttp?: StringProperty
  KmsKeyId?: StringProperty
  CloneUrlSsh?: StringProperty
  RepositoryName: StringProperty
  Triggers?: {
    CustomData?: StringProperty
    Events: StringProperty[]
    Branches?: StringProperty[]
    DestinationArn: StringProperty
    Name: StringProperty
  }[]
  Id?: StringProperty
  Arn?: StringProperty
  Code?: {
    S3: {
      ObjectVersion?: StringProperty
      Bucket: StringProperty
      Key: StringProperty
    }
    BranchName?: StringProperty
  }
  RepositoryDescription?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name?: StringProperty
}

export const AWSCodeCommitRepository = ({
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
      Type: 'AWS::CodeCommit::Repository',
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