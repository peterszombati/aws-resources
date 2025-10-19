import {StringProperty} from "../StringProperty"


type Properties = {
  S3KeyPrefix?: StringProperty
  ConfigSnapshotDeliveryProperties?: {
    DeliveryFrequency?: StringProperty
  }
  S3BucketName: StringProperty
  SnsTopicARN?: StringProperty
  Id?: StringProperty
  S3KmsKeyArn?: StringProperty
  Name?: StringProperty
}

export const AWSConfigDeliveryChannel = ({
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
      Type: 'AWS::Config::DeliveryChannel',
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