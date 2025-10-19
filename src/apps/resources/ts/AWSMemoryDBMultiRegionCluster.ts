import {StringProperty} from "../StringProperty"


type Properties = {
  MultiRegionClusterNameSuffix?: StringProperty
  Description?: StringProperty
  MultiRegionClusterName?: StringProperty
  Status?: StringProperty
  NodeType: StringProperty
  NumShards?: number
  MultiRegionParameterGroupName?: StringProperty
  TLSEnabled?: boolean
  ARN?: StringProperty
  Engine?: StringProperty
  EngineVersion?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UpdateStrategy?: (string | "COORDINATED" | "UNCOORDINATED")
}

export const AWSMemoryDBMultiRegionCluster = ({
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
      Type: 'AWS::MemoryDB::MultiRegionCluster',
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