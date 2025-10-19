import {StringProperty} from "../StringProperty"


type Properties = {
  AllowAssociationToSharableServiceNetwork?: boolean
  ProtocolType?: (string | "TCP")
  ResourceConfigurationType: (string | "GROUP" | "CHILD" | "SINGLE" | "ARN")
  PortRanges?: StringProperty[]
  ResourceConfigurationDefinition?: Record<string, any>
  Id?: StringProperty
  ResourceGatewayId?: StringProperty
  Arn?: StringProperty
  ResourceConfigurationAuthType?: (string | "NONE" | "AWS_IAM")
  ResourceConfigurationGroupId?: StringProperty
  Tags?: {
    Value?: StringProperty
    Key: StringProperty
  }[]
  Name: StringProperty
}

export const AWSVpcLatticeResourceConfiguration = ({
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
      Type: 'AWS::VpcLattice::ResourceConfiguration',
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