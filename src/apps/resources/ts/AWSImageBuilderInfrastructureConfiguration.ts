import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  InstanceTypes?: StringProperty[]
  SecurityGroupIds?: StringProperty[]
  Logging?: {
    S3Logs?: {
      S3BucketName?: StringProperty
      S3KeyPrefix?: StringProperty
    }
  }
  SubnetId?: StringProperty
  KeyPair?: StringProperty
  TerminateInstanceOnFailure?: boolean
  InstanceProfileName: StringProperty
  InstanceMetadataOptions?: {
    HttpPutResponseHopLimit?: number
    HttpTokens?: (string | "required" | "optional")
  }
  SnsTopicArn?: StringProperty
  ResourceTags?: Record<string, any>
  Tags?: Record<string, any>
  Placement?: {
    AvailabilityZone?: StringProperty
    Tenancy?: (string | "default" | "dedicated" | "host")
    HostId?: StringProperty
    HostResourceGroupArn?: StringProperty
  }
}

export const AWSImageBuilderInfrastructureConfiguration = ({
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
      Type: 'AWS::ImageBuilder::InfrastructureConfiguration',
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