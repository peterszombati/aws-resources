import {StringProperty} from "../StringProperty"


type Properties = {
  AccessTypes: (string | "LAKEFORMATION" | "S3")[]
  DataLakeArn: StringProperty
  SubscriberIdentity: {
    ExternalId: StringProperty
    Principal: StringProperty
  }
  SubscriberName: StringProperty
  SubscriberDescription?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Sources: any[]
  ResourceShareArn?: StringProperty
  ResourceShareName?: StringProperty
  SubscriberRoleArn?: StringProperty
  S3BucketArn?: StringProperty
  SubscriberArn?: StringProperty
}

export const AWSSecurityLakeSubscriber = ({
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
      Type: 'AWS::SecurityLake::Subscriber',
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