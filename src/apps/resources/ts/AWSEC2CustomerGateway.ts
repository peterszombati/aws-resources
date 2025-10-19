import {StringProperty} from "../StringProperty"


type Properties = {
  Type: StringProperty
  CustomerGatewayId?: StringProperty
  IpAddress: StringProperty
  BgpAsnExtended?: number
  BgpAsn?: number
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  CertificateArn?: StringProperty
  DeviceName?: StringProperty
}

export const AWSEC2CustomerGateway = ({
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
      Type: 'AWS::EC2::CustomerGateway',
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