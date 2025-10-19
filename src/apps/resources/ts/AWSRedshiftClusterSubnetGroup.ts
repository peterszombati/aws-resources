import {StringProperty} from "../StringProperty"


type Properties = {
  Description: StringProperty
  SubnetIds: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ClusterSubnetGroupName?: StringProperty
}

export const AWSRedshiftClusterSubnetGroup = ({
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
      Type: 'AWS::Redshift::ClusterSubnetGroup',
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