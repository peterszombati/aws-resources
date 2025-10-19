import {StringProperty} from "../StringProperty"


type Properties = {
  Authentication: any
  RelayArn?: StringProperty
  RelayId?: StringProperty
  RelayName?: StringProperty
  ServerName: StringProperty
  ServerPort: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSESMailManagerRelay = ({
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
      Type: 'AWS::SES::MailManagerRelay',
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