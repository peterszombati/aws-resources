import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Alias?: {
    Status?: StringProperty
    Value: StringProperty
  }
  Arn?: StringProperty
  CreationDate?: StringProperty
  PublicAccessBlockConfiguration?: {
    BlockPublicAcls?: boolean
    IgnorePublicAcls?: boolean
    BlockPublicPolicy?: boolean
    RestrictPublicBuckets?: boolean
  }
  PolicyStatus?: {
    IsPublic?: boolean
  }
  ObjectLambdaConfiguration: {
    SupportingAccessPoint: StringProperty
    AllowedFeatures?: StringProperty[]
    CloudWatchMetricsEnabled?: boolean
    TransformationConfigurations: {
      Actions: StringProperty[]
      ContentTransformation: Record<string, any>
    }[]
  }
}

export const AWSS3ObjectLambdaAccessPoint = ({
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
      Type: 'AWS::S3ObjectLambda::AccessPoint',
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