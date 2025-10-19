import {StringProperty} from "../StringProperty"


type Properties = {
  LocalGatewayVirtualInterfaceGroupId?: StringProperty
  LocalGatewayVirtualInterfaceIds?: StringProperty[]
  LocalGatewayId: StringProperty
  OwnerId?: StringProperty
  LocalBgpAsn?: number
  LocalBgpAsnExtended?: number /* schema format: int64*/
  LocalGatewayVirtualInterfaceGroupArn?: StringProperty
  ConfigurationState?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSEC2LocalGatewayVirtualInterfaceGroup = ({
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
      Type: 'AWS::EC2::LocalGatewayVirtualInterfaceGroup',
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