import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AllowedColumns: StringProperty[]
  AnalysisMethod: (string | "DIRECT_QUERY" | "DIRECT_JOB" | "MULTIPLE")
  SelectedAnalysisMethods?: (string | "DIRECT_QUERY" | "DIRECT_JOB")[]
  ConfiguredTableIdentifier?: StringProperty
  Description?: StringProperty
  Name: StringProperty
  AnalysisRules?: {
    Type: (string | "AGGREGATION" | "LIST" | "CUSTOM")
    Policy: {
      V1: any
    }
  }[]
  TableReference: any
}

export const AWSCleanRoomsConfiguredTable = ({
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
      Type: 'AWS::CleanRooms::ConfiguredTable',
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