import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Description: StringProperty
  Parameters: Record<string, any>
  Family: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Name?: StringProperty
}

export const AWSDocDBDBClusterParameterGroup = ({
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
      Type: 'AWS::DocDB::DBClusterParameterGroup',
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