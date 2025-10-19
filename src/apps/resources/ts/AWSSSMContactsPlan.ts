import {StringProperty} from "../StringProperty"


type Properties = {
  ContactId?: StringProperty
  Stages?: {
    DurationInMinutes: number
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
  }[]
  RotationIds?: StringProperty[]
  Arn?: StringProperty
}

export const AWSSSMContactsPlan = ({
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
      Type: 'AWS::SSMContacts::Plan',
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