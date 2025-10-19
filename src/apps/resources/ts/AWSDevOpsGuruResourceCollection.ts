import {StringProperty} from "../StringProperty"


type Properties = {
  ResourceCollectionFilter: {
    CloudFormation?: {
      StackNames?: StringProperty[]
    }
    Tags?: {
      AppBoundaryKey?: StringProperty
      TagValues?: StringProperty[]
    }[]
  }
  ResourceCollectionType?: (string | "AWS_CLOUD_FORMATION" | "AWS_TAGS")
}

export const AWSDevOpsGuruResourceCollection = ({
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
      Type: 'AWS::DevOpsGuru::ResourceCollection',
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