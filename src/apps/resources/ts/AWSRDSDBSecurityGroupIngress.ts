import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  CIDRIP?: StringProperty
  DBSecurityGroupName: StringProperty
  EC2SecurityGroupId?: StringProperty
  EC2SecurityGroupName?: StringProperty
  EC2SecurityGroupOwnerId?: StringProperty
}

export const AWSRDSDBSecurityGroupIngress = ({
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
      Type: 'AWS::RDS::DBSecurityGroupIngress',
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