import {StringProperty} from "../StringProperty"


type Properties = {
  RoleArn?: StringProperty
  Name: StringProperty
  CreatedBy?: StringProperty
  CreatedAt?: StringProperty
  LastModifiedBy?: StringProperty
  LastModifiedAt?: StringProperty
  Arn?: StringProperty
  RetentionInDays?: number
  EncryptionConfig?: {
    EncryptionConfigurationType?: StringProperty
    KmsKeyId?: StringProperty
  }
  InvestigationGroupPolicy?: StringProperty
  IsCloudTrailEventHistoryEnabled?: boolean
  TagKeyBoundaries?: StringProperty[]
  ChatbotNotificationChannels?: {
    SNSTopicArn?: StringProperty
    ChatConfigurationArns?: StringProperty[]
  }[]
  CrossAccountConfigurations?: {
    SourceRoleArn?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSAIOpsInvestigationGroup = ({
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
      Type: 'AWS::AIOps::InvestigationGroup',
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