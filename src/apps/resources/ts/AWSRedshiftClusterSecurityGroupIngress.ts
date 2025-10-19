import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  CIDRIP?: StringProperty
  ClusterSecurityGroupName: StringProperty
  EC2SecurityGroupName?: StringProperty
  EC2SecurityGroupOwnerId?: StringProperty
}

export const AWSRedshiftClusterSecurityGroupIngress = ({
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
      Type: 'AWS::Redshift::ClusterSecurityGroupIngress',
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