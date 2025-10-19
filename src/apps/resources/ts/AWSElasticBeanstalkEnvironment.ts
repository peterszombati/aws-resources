import {StringProperty} from "../StringProperty"


type Properties = {
  PlatformArn?: StringProperty
  ApplicationName: StringProperty
  Description?: StringProperty
  EnvironmentName?: StringProperty
  OperationsRole?: StringProperty
  Tier?: {
    Type?: StringProperty
    Version?: StringProperty
    Name?: StringProperty
  }
  VersionLabel?: StringProperty
  EndpointURL?: StringProperty
  OptionSettings?: {
    ResourceName?: StringProperty
    Value?: StringProperty
    Namespace: StringProperty
    OptionName: StringProperty
  }[]
  TemplateName?: StringProperty
  SolutionStackName?: StringProperty
  CNAMEPrefix?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSElasticBeanstalkEnvironment = ({
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
      Type: 'AWS::ElasticBeanstalk::Environment',
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