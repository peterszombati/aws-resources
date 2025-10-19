import {StringProperty} from "../StringProperty"


type Properties = {
  FsxFilesystemArn?: StringProperty
  SecurityGroupArns: StringProperty[]
  Subdirectory?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LocationArn?: StringProperty
  LocationUri?: StringProperty
}

export const AWSDataSyncLocationFSxLustre = ({
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
      Type: 'AWS::DataSync::LocationFSxLustre',
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