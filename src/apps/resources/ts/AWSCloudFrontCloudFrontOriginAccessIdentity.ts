import {StringProperty} from "../StringProperty"


type Properties = {
  CloudFrontOriginAccessIdentityConfig: {
    Comment: StringProperty
  }
  Id?: StringProperty
  S3CanonicalUserId?: StringProperty
}

export const AWSCloudFrontCloudFrontOriginAccessIdentity = ({
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
      Type: 'AWS::CloudFront::CloudFrontOriginAccessIdentity',
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