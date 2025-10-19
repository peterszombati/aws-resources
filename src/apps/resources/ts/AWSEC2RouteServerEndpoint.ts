import {StringProperty} from "../StringProperty"


type Properties = {
  RouteServerId: StringProperty
  Arn?: StringProperty
  Id?: StringProperty
  SubnetId: StringProperty
  VpcId?: StringProperty
  EniId?: StringProperty
  EniAddress?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2RouteServerEndpoint = ({
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
      Type: 'AWS::EC2::RouteServerEndpoint',
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