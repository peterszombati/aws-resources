import {StringProperty} from "../StringProperty"


type Properties = {
  FsxFilesystemArn?: StringProperty
  SecurityGroupArns: StringProperty[]
  Protocol: {
    NFS?: {
      MountOptions: {
        Version?: (string | "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1")
      }
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

export const AWSDataSyncLocationFSxOpenZFS = ({
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
      Type: 'AWS::DataSync::LocationFSxOpenZFS',
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