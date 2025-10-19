import {StringProperty} from "../StringProperty"


type Properties = {
  Uid?: StringProperty
  MeshName: StringProperty
  VirtualRouterName?: StringProperty
  MeshOwner?: StringProperty
  ResourceOwner?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Spec: {
    Listeners: {
      PortMapping: {
        Protocol: StringProperty
        Port: number
      }
    }[]
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSAppMeshVirtualRouter = ({
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
      Type: 'AWS::AppMesh::VirtualRouter',
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