import {StringProperty} from "../StringProperty"


type Properties = {
  ParameterGroupName: StringProperty
  Family: StringProperty
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Parameters?: Record<string, any>
  ARN?: StringProperty
}

export const AWSMemoryDBParameterGroup = ({
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
      Type: 'AWS::MemoryDB::ParameterGroup',
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