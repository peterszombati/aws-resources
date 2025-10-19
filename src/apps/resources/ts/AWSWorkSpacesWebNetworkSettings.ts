import {StringProperty} from "../StringProperty"


type Properties = {
  AssociatedPortalArns?: StringProperty[]
  NetworkSettingsArn?: StringProperty
  SecurityGroupIds: StringProperty[]
  SubnetIds: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VpcId: StringProperty
}

export const AWSWorkSpacesWebNetworkSettings = ({
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
      Type: 'AWS::WorkSpacesWeb::NetworkSettings',
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