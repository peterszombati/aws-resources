import {StringProperty} from "../StringProperty"


type Properties = {
  Ruleset?: StringProperty
  Description?: StringProperty
  TargetTable?: {
    DatabaseName?: StringProperty
    TableName?: StringProperty
  }
  Id?: StringProperty
  ClientToken?: StringProperty
  Tags?: Record<string, any>
  Name?: StringProperty
}

export const AWSGlueDataQualityRuleset = ({
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
      Type: 'AWS::Glue::DataQualityRuleset',
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