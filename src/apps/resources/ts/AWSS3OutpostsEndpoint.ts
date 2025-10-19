import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CidrBlock?: StringProperty
  CreationTime?: StringProperty
  Id?: StringProperty
  NetworkInterfaces?: {
    NetworkInterfaceId: StringProperty
  }[]
  OutpostId: StringProperty
  SecurityGroupId: StringProperty
  Status?: (string | "Available" | "Pending" | "Deleting" | "Create_Failed" | "Delete_Failed")
  SubnetId: StringProperty
  AccessType?: (string | "CustomerOwnedIp" | "Private")
  CustomerOwnedIpv4Pool?: StringProperty
  FailedReason?: {
    ErrorCode?: StringProperty
    Message?: StringProperty
  }
}

export const AWSS3OutpostsEndpoint = ({
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
      Type: 'AWS::S3Outposts::Endpoint',
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