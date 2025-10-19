import {StringProperty} from "../StringProperty"


type Properties = {
  EcrRepositoryPrefix?: StringProperty
  UpstreamRegistryUrl?: StringProperty
  CredentialArn?: StringProperty
  UpstreamRegistry?: StringProperty
  CustomRoleArn?: StringProperty
  UpstreamRepositoryPrefix?: StringProperty
}

export const AWSECRPullThroughCacheRule = ({
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
      Type: 'AWS::ECR::PullThroughCacheRule',
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