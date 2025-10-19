import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  DatasetName: StringProperty
  DatasetType: (string | "TARGET_TIME_SERIES" | "RELATED_TIME_SERIES" | "ITEM_METADATA")
  DataFrequency?: StringProperty
  Domain: (string | "RETAIL" | "CUSTOM" | "INVENTORY_PLANNING" | "EC2_CAPACITY" | "WORK_FORCE" | "WEB_TRAFFIC" | "METRICS")
  EncryptionConfig?: {
    KmsKeyArn?: StringProperty
    RoleArn?: StringProperty
  }
  Schema: {
    Attributes?: {
      AttributeName?: StringProperty
      AttributeType?: (string | "string" | "integer" | "float" | "timestamp" | "geolocation")
    }[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSForecastDataset = ({
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
      Type: 'AWS::Forecast::Dataset',
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