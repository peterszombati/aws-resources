import {StringProperty} from "../StringProperty"


type Properties = {
  ContactListName?: StringProperty
  Description?: StringProperty
  Topics?: {
    TopicName: StringProperty
    DisplayName: StringProperty
    Description?: StringProperty
    DefaultSubscriptionStatus: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSESContactList = ({
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
      Type: 'AWS::SES::ContactList',
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