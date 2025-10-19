import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  Parameters?: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Type: (string | "LAMBDA" | "GLUE" | "HIVE" | "FEDERATED")
  Status?: (string | "CREATE_IN_PROGRESS" | "CREATE_COMPLETE" | "CREATE_FAILED" | "CREATE_FAILED_CLEANUP_IN_PROGRESS" | "CREATE_FAILED_CLEANUP_COMPLETE" | "CREATE_FAILED_CLEANUP_FAILED" | "DELETE_IN_PROGRESS" | "DELETE_COMPLETE" | "DELETE_FAILED")
  ConnectionType?: StringProperty
  Error?: StringProperty
}

export const AWSAthenaDataCatalog = ({
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
      Type: 'AWS::Athena::DataCatalog',
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