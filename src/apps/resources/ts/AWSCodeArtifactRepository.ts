import {StringProperty} from "../StringProperty"


type Properties = {
  RepositoryName: StringProperty
  Name?: StringProperty
  DomainName: StringProperty
  DomainOwner?: StringProperty
  Description?: StringProperty
  Arn?: StringProperty
  ExternalConnections?: StringProperty[]
  Upstreams?: StringProperty[]
  PermissionsPolicyDocument?: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCodeArtifactRepository = ({
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
      Type: 'AWS::CodeArtifact::Repository',
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