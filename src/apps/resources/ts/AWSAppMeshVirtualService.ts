import {StringProperty} from "../StringProperty"


type Properties = {
  Uid?: StringProperty
  MeshName: StringProperty
  MeshOwner?: StringProperty
  ResourceOwner?: StringProperty
  Id?: StringProperty
  VirtualServiceName: StringProperty
  Arn?: StringProperty
  Spec: {
    Provider?: {
      VirtualNode?: {
        VirtualNodeName: StringProperty
      }
      VirtualRouter?: {
        VirtualRouterName: StringProperty
      }
    }
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSAppMeshVirtualService = ({
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
      Type: 'AWS::AppMesh::VirtualService',
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