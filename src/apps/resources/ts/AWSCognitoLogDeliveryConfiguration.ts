import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  UserPoolId: StringProperty
  LogConfigurations?: {
    LogLevel?: StringProperty
    EventSource?: StringProperty
    CloudWatchLogsConfiguration?: {
      LogGroupArn?: StringProperty
    }
    S3Configuration?: {
      BucketArn?: StringProperty
    }
    FirehoseConfiguration?: {
      StreamArn?: StringProperty
    }
  }[]
}

export const AWSCognitoLogDeliveryConfiguration = ({
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
      Type: 'AWS::Cognito::LogDeliveryConfiguration',
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