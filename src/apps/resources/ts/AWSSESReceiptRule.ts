import {StringProperty} from "../StringProperty"


type Properties = {
  After?: StringProperty
  Rule: {
    ScanEnabled?: boolean
    Recipients?: StringProperty[]
    Actions?: {
      ConnectAction?: {
        InstanceARN: StringProperty
        IAMRoleARN: StringProperty
      }
      BounceAction?: {
        Sender: StringProperty
        SmtpReplyCode: StringProperty
        Message: StringProperty
        TopicArn?: StringProperty
        StatusCode?: StringProperty
      }
      S3Action?: {
        ObjectKeyPrefix?: StringProperty
        BucketName: StringProperty
        IamRoleArn?: StringProperty
        KmsKeyArn?: StringProperty
        TopicArn?: StringProperty
      }
      StopAction?: {
        Scope: StringProperty
        TopicArn?: StringProperty
      }
      SNSAction?: {
        TopicArn?: StringProperty
        Encoding?: StringProperty
      }
      WorkmailAction?: {
        TopicArn?: StringProperty
        OrganizationArn: StringProperty
      }
      AddHeaderAction?: {
        HeaderName: StringProperty
        HeaderValue: StringProperty
      }
      LambdaAction?: {
        InvocationType?: StringProperty
        FunctionArn: StringProperty
        TopicArn?: StringProperty
      }
    }[]
    Enabled?: boolean
    Name?: StringProperty
    TlsPolicy?: StringProperty
  }
  Id?: StringProperty
  RuleSetName: StringProperty
}

export const AWSSESReceiptRule = ({
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
      Type: 'AWS::SES::ReceiptRule',
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