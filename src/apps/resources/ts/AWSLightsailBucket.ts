import {StringProperty} from "../StringProperty"


type Properties = {
  BucketName: StringProperty
  BundleId: StringProperty
  BucketArn?: StringProperty
  ObjectVersioning?: boolean
  AccessRules?: {
    GetObject?: StringProperty
    AllowPublicOverrides?: boolean
  }
  ResourcesReceivingAccess?: StringProperty[]
  ReadOnlyAccessAccounts?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  Url?: StringProperty
  AbleToUpdateBundle?: boolean
}

export const AWSLightsailBucket = ({
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
      Type: 'AWS::Lightsail::Bucket',
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