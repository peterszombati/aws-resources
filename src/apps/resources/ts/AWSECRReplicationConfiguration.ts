import {StringProperty} from "../StringProperty"


type Properties = {
  ReplicationConfiguration: {
    Rules: {
      RepositoryFilters?: {
        Filter: StringProperty
        FilterType: (string | "PREFIX_MATCH")
      }[]
      Destinations: {
        Region: StringProperty
        RegistryId: StringProperty
      }[]
    }[]
  }
  RegistryId?: StringProperty
}

export const AWSECRReplicationConfiguration = ({
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
      Type: 'AWS::ECR::ReplicationConfiguration',
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