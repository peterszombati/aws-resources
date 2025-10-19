import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  VpcConfig?: {
    SecurityGroupIds?: StringProperty[]
    SubnetIds?: StringProperty[]
  }
  EnableDefaultInternetAccess?: boolean
  DomainJoinInfo?: {
    OrganizationalUnitDistinguishedName?: StringProperty
    DirectoryName?: StringProperty
  }
  AppstreamAgentVersion?: StringProperty
  Name: StringProperty
  ImageName?: StringProperty
  DisplayName?: StringProperty
  IamRoleArn?: StringProperty
  InstanceType: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  StreamingUrl?: StringProperty
  ImageArn?: StringProperty
  AccessEndpoints?: {
    EndpointType: StringProperty
    VpceId: StringProperty
  }[]
}

export const AWSAppStreamImageBuilder = ({
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
      Type: 'AWS::AppStream::ImageBuilder',
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