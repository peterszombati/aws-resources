import {StringProperty} from "../StringProperty"


type Properties = {
  DBSubnetGroupDescription: StringProperty
  DBSubnetGroupName?: StringProperty
  SubnetIds: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSRDSDBSubnetGroup = ({
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
      Type: 'AWS::RDS::DBSubnetGroup',
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