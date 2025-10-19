import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  DestinationArn: StringProperty
  Id?: StringProperty
  ResourceArn?: StringProperty
  ResourceId?: StringProperty
  ResourceIdentifier?: StringProperty
  ServiceNetworkLogType?: (string | "SERVICE" | "RESOURCE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSVpcLatticeAccessLogSubscription = ({
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
      Type: 'AWS::VpcLattice::AccessLogSubscription',
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