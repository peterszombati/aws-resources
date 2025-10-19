import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  EmailAddressArn?: StringProperty
  Description?: StringProperty
  EmailAddress: StringProperty
  DisplayName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSConnectEmailAddress = ({
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
      Type: 'AWS::Connect::EmailAddress',
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