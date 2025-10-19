import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Description: StringProperty
  Family: StringProperty
  Parameters: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSNeptuneDBParameterGroup = ({
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
      Type: 'AWS::Neptune::DBParameterGroup',
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