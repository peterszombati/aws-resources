import {StringProperty} from "../StringProperty"


type Properties = {
  DBParameterGroupName?: StringProperty
  Description: StringProperty
  Family: StringProperty
  Parameters?: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSRDSDBParameterGroup = ({
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
      Type: 'AWS::RDS::DBParameterGroup',
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