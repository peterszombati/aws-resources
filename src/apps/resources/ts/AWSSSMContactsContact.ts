import {StringProperty} from "../StringProperty"


type Properties = {
  Alias: StringProperty
  DisplayName: StringProperty
  Type: (string | "PERSONAL" | "ESCALATION" | "ONCALL_SCHEDULE")
  Plan?: {
    DurationInMinutes?: number
    Targets?: {
      ContactTargetInfo?: {
        ContactId: StringProperty
        IsEssential: boolean
      }
      ChannelTargetInfo?: {
        ChannelId: StringProperty
        RetryIntervalInMinutes: number
      }
    }[]
    RotationIds?: StringProperty[]
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
}

export const AWSSSMContactsContact = ({
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
      Type: 'AWS::SSMContacts::Contact',
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