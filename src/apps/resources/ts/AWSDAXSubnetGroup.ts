import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  Id?: StringProperty
  SubnetIds: StringProperty[]
  SubnetGroupName?: StringProperty
}

export const AWSDAXSubnetGroup = ({
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
      Type: 'AWS::DAX::SubnetGroup',
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