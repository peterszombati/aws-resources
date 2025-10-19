import {StringProperty} from "../StringProperty"


type Properties = {
  GraphIdentifier: StringProperty
  SecurityGroupIds?: StringProperty[]
  SubnetIds?: StringProperty[]
  VpcId: StringProperty
  PrivateGraphEndpointIdentifier?: StringProperty
  VpcEndpointId?: StringProperty
}

export const AWSNeptuneGraphPrivateGraphEndpoint = ({
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
      Type: 'AWS::NeptuneGraph::PrivateGraphEndpoint',
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