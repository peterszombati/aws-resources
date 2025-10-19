import {StringProperty} from "../StringProperty"


type Properties = {
  PublicAccessBlockConfiguration?: {
    RestrictPublicBuckets?: boolean
    BlockPublicPolicy?: boolean
    BlockPublicAcls?: boolean
    IgnorePublicAcls?: boolean
  }
  Alias?: StringProperty
  CreatedAt?: StringProperty
  Regions: {
    Bucket: StringProperty
    BucketAccountId?: StringProperty
  }[]
  Name?: StringProperty
}

export const AWSS3MultiRegionAccessPoint = ({
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
      Type: 'AWS::S3::MultiRegionAccessPoint',
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