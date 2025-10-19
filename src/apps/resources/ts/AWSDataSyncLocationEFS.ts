import {StringProperty} from "../StringProperty"


type Properties = {
  Ec2Config: {
    SecurityGroupArns: StringProperty[]
    SubnetArn: StringProperty
  }
  EfsFilesystemArn?: StringProperty
  AccessPointArn?: StringProperty
  FileSystemAccessRoleArn?: StringProperty
  InTransitEncryption?: (string | "NONE" | "TLS1_2")
  Subdirectory?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LocationArn?: StringProperty
  LocationUri?: StringProperty
}

export const AWSDataSyncLocationEFS = ({
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
      Type: 'AWS::DataSync::LocationEFS',
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