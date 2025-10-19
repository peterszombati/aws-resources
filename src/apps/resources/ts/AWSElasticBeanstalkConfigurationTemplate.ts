import {StringProperty} from "../StringProperty"


type Properties = {
  ApplicationName: StringProperty
  Description?: StringProperty
  EnvironmentId?: StringProperty
  OptionSettings?: {
    Namespace: StringProperty
    OptionName: StringProperty
    ResourceName?: StringProperty
    Value?: StringProperty
  }[]
  PlatformArn?: StringProperty
  SolutionStackName?: StringProperty
  SourceConfiguration?: {
    ApplicationName: StringProperty
    TemplateName: StringProperty
  }
  TemplateName?: StringProperty
}

export const AWSElasticBeanstalkConfigurationTemplate = ({
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
      Type: 'AWS::ElasticBeanstalk::ConfigurationTemplate',
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