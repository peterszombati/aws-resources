import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  BucketName: StringProperty
  OutpostId: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LifecycleConfiguration?: {
    Rules: {
      Status?: (string | "Enabled" | "Disabled")
      Id?: StringProperty
      AbortIncompleteMultipartUpload?: {
        DaysAfterInitiation: number
      }
      ExpirationDate?: StringProperty
      ExpirationInDays?: number
      Filter?: {
        Prefix?: StringProperty
        Tag?: {
          Key: StringProperty
          Value: StringProperty
        }
        AndOperator?: any
      }
    }[]
  }
}

export const AWSS3OutpostsBucket = ({
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
      Type: 'AWS::S3Outposts::Bucket',
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