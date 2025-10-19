import {StringProperty} from "../StringProperty"


type Properties = {
  AddressListArn?: StringProperty
  AddressListId?: StringProperty
  AddressListName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSESMailManagerAddressList = ({
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
      Type: 'AWS::SES::MailManagerAddressList',
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