import {StringProperty} from "../StringProperty"


type Properties = {
  VPNGatewayId?: StringProperty
  AmazonSideAsn?: number /* schema format: int64*/
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Type: StringProperty
}

export const AWSEC2VPNGateway = ({
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
      Type: 'AWS::EC2::VPNGateway',
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