import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  ResourceConfigurationId?: StringProperty
  ServiceNetworkId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSVpcLatticeServiceNetworkResourceAssociation = ({
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
      Type: 'AWS::VpcLattice::ServiceNetworkResourceAssociation',
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