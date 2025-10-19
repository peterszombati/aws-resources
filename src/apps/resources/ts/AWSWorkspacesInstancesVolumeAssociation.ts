import {StringProperty} from "../StringProperty"


type Properties = {
  WorkspaceInstanceId: StringProperty
  VolumeId: StringProperty
  Device: StringProperty
  DisassociateMode?: (string | "FORCE" | "NO_FORCE")
}

export const AWSWorkspacesInstancesVolumeAssociation = ({
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
      Type: 'AWS::WorkspacesInstances::VolumeAssociation',
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