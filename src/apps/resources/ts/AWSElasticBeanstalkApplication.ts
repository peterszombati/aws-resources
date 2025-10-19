import {StringProperty} from "../StringProperty"


type Properties = {
  ApplicationName?: StringProperty
  Description?: StringProperty
  ResourceLifecycleConfig?: {
    ServiceRole?: StringProperty
    VersionLifecycleConfig?: {
      MaxAgeRule?: {
        DeleteSourceFromS3?: boolean
        Enabled?: boolean
        MaxAgeInDays?: number
      }
      MaxCountRule?: {
        DeleteSourceFromS3?: boolean
        Enabled?: boolean
        MaxCount?: number
      }
    }
  }
}

export const AWSElasticBeanstalkApplication = ({
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
      Type: 'AWS::ElasticBeanstalk::Application',
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