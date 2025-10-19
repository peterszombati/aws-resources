import {StringProperty} from "../StringProperty"


type Properties = {
  StorageVirtualMachineArn: StringProperty
  FsxFilesystemArn?: StringProperty
  SecurityGroupArns: StringProperty[]
  Protocol?: {
    NFS?: {
      MountOptions: {
        Version?: (string | "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1")
      }
    }
    SMB?: {
      MountOptions: {
        Version?: (string | "AUTOMATIC" | "SMB2" | "SMB3")
      }
      Domain?: StringProperty
      Password: StringProperty
      User: StringProperty
    }
  }
  Subdirectory?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LocationArn?: StringProperty
  LocationUri?: StringProperty
}

export const AWSDataSyncLocationFSxONTAP = ({
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
      Type: 'AWS::DataSync::LocationFSxONTAP',
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