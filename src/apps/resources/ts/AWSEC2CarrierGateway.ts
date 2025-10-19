import {StringProperty} from "../StringProperty"


type Properties = {
  CarrierGatewayId?: StringProperty
  State?: StringProperty
  VpcId: StringProperty
  OwnerId?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSEC2CarrierGateway = ({
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
      Type: 'AWS::EC2::CarrierGateway',
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