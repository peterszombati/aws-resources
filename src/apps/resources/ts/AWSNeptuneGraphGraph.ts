import {StringProperty} from "../StringProperty"


type Properties = {
  DeletionProtection?: boolean
  GraphName?: StringProperty
  ProvisionedMemory: number
  PublicConnectivity?: boolean
  ReplicaCount?: number
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  VectorSearchConfiguration?: {
    VectorSearchDimension: number
  }
  Endpoint?: StringProperty
  GraphArn?: StringProperty
  GraphId?: StringProperty
}

export const AWSNeptuneGraphGraph = ({
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
      Type: 'AWS::NeptuneGraph::Graph',
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