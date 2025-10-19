import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  QueryString: StringProperty
  LogGroupNames?: StringProperty[]
  QueryDefinitionId?: StringProperty
  QueryLanguage?: (string | "CWLI" | "SQL" | "PPL")
}

export const AWSLogsQueryDefinition = ({
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
      Type: 'AWS::Logs::QueryDefinition',
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