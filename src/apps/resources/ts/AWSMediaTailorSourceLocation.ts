import {StringProperty} from "../StringProperty"


type Properties = {
  AccessConfiguration?: {
    AccessType?: (string | "S3_SIGV4" | "SECRETS_MANAGER_ACCESS_TOKEN" | "AUTODETECT_SIGV4")
    SecretsManagerAccessTokenConfiguration?: {
      HeaderName?: StringProperty
      SecretArn?: StringProperty
      SecretStringKey?: StringProperty
    }
  }
  Arn?: StringProperty
  DefaultSegmentDeliveryConfiguration?: {
    BaseUrl?: StringProperty
  }
  HttpConfiguration: {
    BaseUrl: StringProperty
  }
  SegmentDeliveryConfigurations?: {
    BaseUrl?: StringProperty
    Name?: StringProperty
  }[]
  SourceLocationName: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSMediaTailorSourceLocation = ({
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
      Type: 'AWS::MediaTailor::SourceLocation',
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