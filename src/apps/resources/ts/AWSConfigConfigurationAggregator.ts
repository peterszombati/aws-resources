import {StringProperty} from "../StringProperty"


type Properties = {
  AccountAggregationSources?: {
    AllAwsRegions?: boolean
    AwsRegions?: StringProperty[]
    AccountIds: StringProperty[]
  }[]
  ConfigurationAggregatorName?: StringProperty
  ConfigurationAggregatorArn?: StringProperty
  OrganizationAggregationSource?: {
    AllAwsRegions?: boolean
    AwsRegions?: StringProperty[]
    RoleArn: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSConfigConfigurationAggregator = ({
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
      Type: 'AWS::Config::ConfigurationAggregator',
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