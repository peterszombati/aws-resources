import {StringProperty} from "../StringProperty"


type Properties = {
  DatasetName: StringProperty
  Name: StringProperty
  RecipeName: StringProperty
  RoleArn: StringProperty
  Sample?: {
    Size?: number
    Type: (string | "FIRST_N" | "LAST_N" | "RANDOM")
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDataBrewProject = ({
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
      Type: 'AWS::DataBrew::Project',
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