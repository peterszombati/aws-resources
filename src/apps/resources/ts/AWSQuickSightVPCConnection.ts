import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AvailabilityStatus?: (string | "AVAILABLE" | "UNAVAILABLE" | "PARTIALLY_AVAILABLE")
  AwsAccountId?: StringProperty
  CreatedTime?: StringProperty
  DnsResolvers?: StringProperty[]
  LastUpdatedTime?: StringProperty
  Name?: StringProperty
  NetworkInterfaces?: {
    SubnetId?: StringProperty
    AvailabilityZone?: StringProperty
    ErrorMessage?: StringProperty
    Status?: (string | "CREATING" | "AVAILABLE" | "CREATION_FAILED" | "UPDATING" | "UPDATE_FAILED" | "DELETING" | "DELETED" | "DELETION_FAILED" | "DELETION_SCHEDULED" | "ATTACHMENT_FAILED_ROLLBACK_FAILED")
    NetworkInterfaceId?: StringProperty
  }[]
  RoleArn?: StringProperty
  SecurityGroupIds?: StringProperty[]
  Status?: (string | "CREATION_IN_PROGRESS" | "CREATION_SUCCESSFUL" | "CREATION_FAILED" | "UPDATE_IN_PROGRESS" | "UPDATE_SUCCESSFUL" | "UPDATE_FAILED" | "DELETION_IN_PROGRESS" | "DELETION_FAILED" | "DELETED")
  SubnetIds?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VPCConnectionId?: StringProperty
  VPCId?: StringProperty
}

export const AWSQuickSightVPCConnection = ({
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
      Type: 'AWS::QuickSight::VPCConnection',
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