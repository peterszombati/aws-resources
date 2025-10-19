import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Registry?: {
    Name?: StringProperty
    Arn?: StringProperty
  }
  Name: StringProperty
  Description?: StringProperty
  DataFormat: (string | "AVRO" | "JSON" | "PROTOBUF")
  Compatibility: (string | "NONE" | "DISABLED" | "BACKWARD" | "BACKWARD_ALL" | "FORWARD" | "FORWARD_ALL" | "FULL" | "FULL_ALL")
  SchemaDefinition?: StringProperty
  CheckpointVersion?: {
    IsLatest?: boolean
    VersionNumber?: number
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  InitialSchemaVersionId?: StringProperty
}

export const AWSGlueSchema = ({
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
      Type: 'AWS::Glue::Schema',
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