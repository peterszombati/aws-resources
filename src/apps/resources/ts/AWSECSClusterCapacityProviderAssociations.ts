import {StringProperty} from "../StringProperty"


type Properties = {
  DefaultCapacityProviderStrategy: {
    CapacityProvider: StringProperty
    Base?: number
    Weight?: number
  }[]
  CapacityProviders?: StringProperty[]
  Cluster: StringProperty
}

export const AWSECSClusterCapacityProviderAssociations = ({
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
      Type: 'AWS::ECS::ClusterCapacityProviderAssociations',
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