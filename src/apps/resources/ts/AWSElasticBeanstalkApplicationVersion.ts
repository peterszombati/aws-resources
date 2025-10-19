import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ApplicationName: StringProperty
  Description?: StringProperty
  SourceBundle: {
    S3Bucket: StringProperty
    S3Key: StringProperty
  }
}

export const AWSElasticBeanstalkApplicationVersion = ({
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
      Type: 'AWS::ElasticBeanstalk::ApplicationVersion',
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