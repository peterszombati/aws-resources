import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  SubnetId: StringProperty
  ClientToken?: StringProperty
  PreserveClientIp?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  SecurityGroupIds?: StringProperty[]
}

export const AWSEC2InstanceConnectEndpoint = ({
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
      Type: 'AWS::EC2::InstanceConnectEndpoint',
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