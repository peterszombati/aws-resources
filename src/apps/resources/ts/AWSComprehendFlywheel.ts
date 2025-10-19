import {StringProperty} from "../StringProperty"


type Properties = {
  ActiveModelArn?: StringProperty
  DataAccessRoleArn: StringProperty
  DataLakeS3Uri: StringProperty
  DataSecurityConfig?: {
    ModelKmsKeyId?: StringProperty
    VolumeKmsKeyId?: StringProperty
    DataLakeKmsKeyId?: StringProperty
    VpcConfig?: {
      SecurityGroupIds: StringProperty[]
      Subnets: StringProperty[]
    }
  }
  FlywheelName: StringProperty
  ModelType?: (string | "DOCUMENT_CLASSIFIER" | "ENTITY_RECOGNIZER")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TaskConfig?: {
    LanguageCode: (string | "en" | "es" | "fr" | "it" | "de" | "pt")
    DocumentClassificationConfig?: {
      Mode: (string | "MULTI_CLASS" | "MULTI_LABEL")
      Labels?: StringProperty[]
    }
    EntityRecognitionConfig?: {
      EntityTypes?: {
        Type: StringProperty
      }[]
    }
  }
  Arn?: StringProperty
}

export const AWSComprehendFlywheel = ({
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
      Type: 'AWS::Comprehend::Flywheel',
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