import {StringProperty} from "../StringProperty"


type Properties = {
  AccessKey?: StringProperty
  AgentArns?: StringProperty[]
  BucketName?: StringProperty
  SecretKey?: StringProperty
  ServerCertificate?: StringProperty
  ServerHostname?: StringProperty
  ServerPort?: number
  ServerProtocol?: (string | "HTTPS" | "HTTP")
  Subdirectory?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LocationArn?: StringProperty
  LocationUri?: StringProperty
  CmkSecretConfig?: {
    SecretArn?: StringProperty
    KmsKeyArn?: StringProperty
  }
  CustomSecretConfig?: {
    SecretArn: StringProperty
    SecretAccessRoleArn: StringProperty
  }
  ManagedSecretConfig?: {
    SecretArn: StringProperty
  }
}

export const AWSDataSyncLocationObjectStorage = ({
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
      Type: 'AWS::DataSync::LocationObjectStorage',
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