import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Alias?: StringProperty
  Bucket: StringProperty
  BucketAccountId?: StringProperty
  VpcConfiguration?: {
    VpcId?: StringProperty
  }
  PublicAccessBlockConfiguration?: {
    BlockPublicAcls?: boolean
    IgnorePublicAcls?: boolean
    BlockPublicPolicy?: boolean
    RestrictPublicBuckets?: boolean
  }
  Policy?: Record<string, any>
  NetworkOrigin?: (string | "Internet" | "VPC")
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSS3AccessPoint = ({
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
      Type: 'AWS::S3::AccessPoint',
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