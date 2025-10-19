import {StringProperty} from "../StringProperty"


type Properties = {
  MaxRetries?: number
  Description?: StringProperty
  TransformEncryption?: {
    TaskRunSecurityConfigurationName?: StringProperty
    MLUserDataEncryption?: {
      KmsKeyId?: StringProperty
      MLUserDataEncryptionMode: StringProperty
    }
  }
  Timeout?: number
  Name?: StringProperty
  Role: StringProperty
  WorkerType?: StringProperty
  GlueVersion?: StringProperty
  TransformParameters: {
    TransformType: StringProperty
    FindMatchesParameters?: {
      PrecisionRecallTradeoff?: number
      EnforceProvidedLabels?: boolean
      PrimaryKeyColumnName: StringProperty
      AccuracyCostTradeoff?: number
    }
  }
  Id?: StringProperty
  InputRecordTables: {
    GlueTables?: {
      ConnectionName?: StringProperty
      DatabaseName: StringProperty
      TableName: StringProperty
      CatalogId?: StringProperty
    }[]
  }
  NumberOfWorkers?: number
  Tags?: Record<string, any>
  MaxCapacity?: number
}

export const AWSGlueMLTransform = ({
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
      Type: 'AWS::Glue::MLTransform',
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