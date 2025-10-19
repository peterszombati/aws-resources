import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  ComputeCapacity?: {
    DesiredInstances?: number
    DesiredSessions?: number
  }
  Platform?: StringProperty
  VpcConfig?: {
    SubnetIds?: StringProperty[]
    SecurityGroupIds?: StringProperty[]
  }
  FleetType?: StringProperty
  EnableDefaultInternetAccess?: boolean
  DomainJoinInfo?: {
    OrganizationalUnitDistinguishedName?: StringProperty
    DirectoryName?: StringProperty
  }
  SessionScriptS3Location?: {
    S3Bucket: StringProperty
    S3Key: StringProperty
  }
  Name: StringProperty
  ImageName?: StringProperty
  MaxUserDurationInSeconds?: number
  IdleDisconnectTimeoutInSeconds?: number
  UsbDeviceFilterStrings?: StringProperty[]
  DisconnectTimeoutInSeconds?: number
  DisplayName?: StringProperty
  StreamView?: StringProperty
  IamRoleArn?: StringProperty
  MaxSessionsPerInstance?: number
  Id?: StringProperty
  InstanceType: StringProperty
  MaxConcurrentSessions?: number
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  ImageArn?: StringProperty
}

export const AWSAppStreamFleet = ({
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
      Type: 'AWS::AppStream::Fleet',
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