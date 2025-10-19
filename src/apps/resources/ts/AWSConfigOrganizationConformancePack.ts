import {StringProperty} from "../StringProperty"


type Properties = {
  OrganizationConformancePackName: StringProperty
  TemplateS3Uri?: StringProperty
  TemplateBody?: StringProperty
  DeliveryS3Bucket?: StringProperty
  DeliveryS3KeyPrefix?: StringProperty
  ConformancePackInputParameters?: {
    ParameterName: StringProperty
    ParameterValue: StringProperty
  }[]
  ExcludedAccounts?: StringProperty[]
}

export const AWSConfigOrganizationConformancePack = ({
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
      Type: 'AWS::Config::OrganizationConformancePack',
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