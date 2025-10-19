import {StringProperty} from "../StringProperty"


type Properties = {
  DataAccessRoleArn: StringProperty
  InputDataConfig: {
    AugmentedManifests?: {
      AttributeNames: StringProperty[]
      S3Uri: StringProperty
      Split?: (string | "TRAIN" | "TEST")
    }[]
    DataFormat?: (string | "COMPREHEND_CSV" | "AUGMENTED_MANIFEST")
    LabelDelimiter?: StringProperty
    DocumentType?: (string | "PLAIN_TEXT_DOCUMENT" | "SEMI_STRUCTURED_DOCUMENT")
    Documents?: {
      S3Uri: StringProperty
      TestS3Uri?: StringProperty
    }
    DocumentReaderConfig?: {
      DocumentReadAction: (string | "TEXTRACT_DETECT_DOCUMENT_TEXT" | "TEXTRACT_ANALYZE_DOCUMENT")
      DocumentReadMode?: (string | "SERVICE_DEFAULT" | "FORCE_DOCUMENT_READ_ACTION")
      FeatureTypes?: (string | "TABLES" | "FORMS")[]
    }
    S3Uri?: StringProperty
    TestS3Uri?: StringProperty
  }
  OutputDataConfig?: {
    KmsKeyId?: StringProperty
    S3Uri?: StringProperty
  }
  LanguageCode: (string | "en" | "es" | "fr" | "it" | "de" | "pt")
  ModelKmsKeyId?: StringProperty
  ModelPolicy?: StringProperty
  DocumentClassifierName: StringProperty
  Mode?: (string | "MULTI_CLASS" | "MULTI_LABEL")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VersionName?: StringProperty
  VolumeKmsKeyId?: StringProperty
  VpcConfig?: {
    SecurityGroupIds: StringProperty[]
    Subnets: StringProperty[]
  }
  Arn?: StringProperty
}

export const AWSComprehendDocumentClassifier = ({
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
      Type: 'AWS::Comprehend::DocumentClassifier',
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