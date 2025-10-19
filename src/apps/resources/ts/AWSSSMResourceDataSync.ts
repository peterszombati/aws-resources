import {StringProperty} from "../StringProperty"


type Properties = {
  S3Destination?: {
    KMSKeyArn?: StringProperty
    BucketPrefix?: StringProperty
    BucketName: StringProperty
    BucketRegion: StringProperty
    SyncFormat: StringProperty
  }
  KMSKeyArn?: StringProperty
  SyncSource?: {
    IncludeFutureRegions?: boolean
    SourceRegions: StringProperty[]
    SourceType: StringProperty
    AwsOrganizationsSource?: {
      OrganizationalUnits?: StringProperty[]
      OrganizationSourceType: StringProperty
    }
  }
  BucketName?: StringProperty
  BucketRegion?: StringProperty
  SyncFormat?: StringProperty
  SyncName: StringProperty
  SyncType?: StringProperty
  BucketPrefix?: StringProperty
}

export const AWSSSMResourceDataSync = ({
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
      Type: 'AWS::SSM::ResourceDataSync',
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