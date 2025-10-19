import {StringProperty} from "../StringProperty"


type Properties = {
  ContactId?: StringProperty
  ChannelName?: StringProperty
  ChannelType?: (string | "SMS" | "VOICE" | "EMAIL")
  DeferActivation?: boolean
  ChannelAddress?: StringProperty
  Arn?: StringProperty
}

export const AWSSSMContactsContactChannel = ({
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
      Type: 'AWS::SSMContacts::ContactChannel',
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