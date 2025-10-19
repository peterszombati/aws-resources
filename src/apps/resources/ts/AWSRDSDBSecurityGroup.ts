import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  DBSecurityGroupIngress: {
    CIDRIP?: StringProperty
    EC2SecurityGroupId?: StringProperty
    EC2SecurityGroupName?: StringProperty
    EC2SecurityGroupOwnerId?: StringProperty
  }[]
  EC2VpcId?: StringProperty
  GroupDescription: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRDSDBSecurityGroup = ({
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
      Type: 'AWS::RDS::DBSecurityGroup',
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