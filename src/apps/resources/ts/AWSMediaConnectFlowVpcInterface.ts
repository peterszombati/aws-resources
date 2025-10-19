import {StringProperty} from "../StringProperty"


type Properties = {
  FlowArn: StringProperty
  Name: StringProperty
  RoleArn: StringProperty
  SecurityGroupIds: StringProperty[]
  SubnetId: StringProperty
  NetworkInterfaceIds?: StringProperty[]
}

export const AWSMediaConnectFlowVpcInterface = ({
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
      Type: 'AWS::MediaConnect::FlowVpcInterface',
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