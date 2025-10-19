import {StringProperty} from "../StringProperty"


type Properties = {
  SubnetGroupName: StringProperty
  Description?: StringProperty
  SubnetIds: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ARN?: StringProperty
  SupportedNetworkTypes?: StringProperty[]
}

export const AWSMemoryDBSubnetGroup = ({
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
      Type: 'AWS::MemoryDB::SubnetGroup',
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