import {StringProperty} from "../StringProperty"


type Properties = {
  AccountId?: StringProperty
  ConnectionRecordingPreferences?: {
    RecordingDestinations: {
      S3Buckets: {
        BucketOwner: StringProperty
        BucketName: StringProperty
      }[]
    }
    KMSKeyArn: StringProperty
  }
}

export const AWSSSMGuiConnectPreferences = ({
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
      Type: 'AWS::SSMGuiConnect::Preferences',
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