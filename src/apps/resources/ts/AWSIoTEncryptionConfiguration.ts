import {StringProperty} from "../StringProperty"


type Properties = {
  AccountId?: StringProperty
  EncryptionType: (string | "CUSTOMER_MANAGED_KMS_KEY" | "AWS_OWNED_KMS_KEY")
  KmsAccessRoleArn?: StringProperty
  KmsKeyArn?: StringProperty
  ConfigurationDetails?: {
    ConfigurationStatus?: (string | "HEALTHY" | "UNHEALTHY")
    ErrorCode?: StringProperty
    ErrorMessage?: StringProperty
  }
  LastModifiedDate?: StringProperty
}

export const AWSIoTEncryptionConfiguration = ({
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
      Type: 'AWS::IoT::EncryptionConfiguration',
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