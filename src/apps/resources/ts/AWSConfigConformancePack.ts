import {StringProperty} from "../StringProperty"


type Properties = {
  ConformancePackName: StringProperty
  DeliveryS3Bucket?: StringProperty
  DeliveryS3KeyPrefix?: StringProperty
  TemplateBody?: StringProperty
  TemplateS3Uri?: StringProperty
  TemplateSSMDocumentDetails?: {
    DocumentName?: StringProperty
    DocumentVersion?: StringProperty
  }
  ConformancePackInputParameters?: {
    ParameterName: StringProperty
    ParameterValue: StringProperty
  }[]
}

export const AWSConfigConformancePack = ({
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
      Type: 'AWS::Config::ConformancePack',
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