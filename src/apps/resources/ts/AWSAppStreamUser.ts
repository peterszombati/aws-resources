import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  UserName: StringProperty
  FirstName?: StringProperty
  MessageAction?: StringProperty
  LastName?: StringProperty
  AuthenticationType: StringProperty
}

export const AWSAppStreamUser = ({
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
      Type: 'AWS::AppStream::User',
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