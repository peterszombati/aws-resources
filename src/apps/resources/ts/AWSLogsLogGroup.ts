import {StringProperty} from "../StringProperty"


type Properties = {
  LogGroupName?: StringProperty
  KmsKeyId?: StringProperty
  DataProtectionPolicy?: Record<string, any>
  FieldIndexPolicies?: Record<string, any>[]
  LogGroupClass?: (string | "STANDARD" | "INFREQUENT_ACCESS" | "DELIVERY")
  RetentionInDays?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
  ResourcePolicyDocument?: Record<string, any>
}

export const AWSLogsLogGroup = ({
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
      Type: 'AWS::Logs::LogGroup',
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