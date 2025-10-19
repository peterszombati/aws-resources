import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Id?: StringProperty
  DestinationConfiguration: {
    CloudWatchLogs?: {
      LogGroupName: StringProperty
    }
    Firehose?: {
      DeliveryStreamName: StringProperty
    }
    S3?: {
      BucketName: StringProperty
    }
  }
  Name?: StringProperty
  State?: (string | "CREATING" | "CREATE_FAILED" | "DELETING" | "DELETE_FAILED" | "UPDATING" | "UPDATING_FAILED" | "ACTIVE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIVSChatLoggingConfiguration = ({
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
      Type: 'AWS::IVSChat::LoggingConfiguration',
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