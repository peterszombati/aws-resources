import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CollaborationArn?: StringProperty
  CollaborationIdentifier?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AnalysisParameters?: {
    DefaultValue?: StringProperty
    Name: StringProperty
    Type: (string | "SMALLINT" | "INTEGER" | "BIGINT" | "DECIMAL" | "REAL" | "DOUBLE_PRECISION" | "BOOLEAN" | "CHAR" | "VARCHAR" | "DATE" | "TIMESTAMP" | "TIMESTAMPTZ" | "TIME" | "TIMETZ" | "VARBYTE" | "BINARY" | "BYTE" | "CHARACTER" | "DOUBLE" | "FLOAT" | "INT" | "LONG" | "NUMERIC" | "SHORT" | "STRING" | "TIMESTAMP_LTZ" | "TIMESTAMP_NTZ" | "TINYINT")
  }[]
  AnalysisTemplateIdentifier?: StringProperty
  Description?: StringProperty
  MembershipArn?: StringProperty
  MembershipIdentifier: StringProperty
  Name: StringProperty
  Schema?: {
    ReferencedTables: StringProperty[]
  }
  Source: any
  SourceMetadata?: any
  Format: (string | "SQL" | "PYSPARK_1_0")
  ErrorMessageConfiguration?: {
    Type: (string | "DETAILED")
  }
}

export const AWSCleanRoomsAnalysisTemplate = ({
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
      Type: 'AWS::CleanRooms::AnalysisTemplate',
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