import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Type: (string | "SERVICE_CONTROL_POLICY" | "AISERVICES_OPT_OUT_POLICY" | "BACKUP_POLICY" | "TAG_POLICY" | "CHATBOT_POLICY" | "RESOURCE_CONTROL_POLICY" | "DECLARATIVE_POLICY_EC2" | "SECURITYHUB_POLICY")
  Content: Record<string, any> | StringProperty
  Description?: StringProperty
  TargetIds?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Id?: StringProperty
  Arn?: StringProperty
  AwsManaged?: boolean
}

export const AWSOrganizationsPolicy = ({
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
      Type: 'AWS::Organizations::Policy',
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