import {StringProperty} from "../StringProperty"


type Properties = {
  Uid?: StringProperty
  MeshName?: StringProperty
  MeshOwner?: StringProperty
  ResourceOwner?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Spec?: {
    EgressFilter?: {
      Type: StringProperty
    }
    ServiceDiscovery?: {
      IpPreference?: StringProperty
    }
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSAppMeshMesh = ({
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
      Type: 'AWS::AppMesh::Mesh',
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