import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Arn?: StringProperty
  Description?: StringProperty
  DisplayName?: StringProperty
  Platform: StringProperty
  AccessEndpoints?: {
    EndpointType: StringProperty
    VpceId: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VpcConfig: {
    SecurityGroupIds?: StringProperty[]
    SubnetIds?: StringProperty[]
  }
  EnableDefaultInternetAccess?: boolean
  IamRoleArn?: StringProperty
  CreatedTime?: StringProperty
  InstanceType: StringProperty
  AppBlockArns?: StringProperty[]
}

export const AWSAppStreamAppBlockBuilder = ({
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
      Type: 'AWS::AppStream::AppBlockBuilder',
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