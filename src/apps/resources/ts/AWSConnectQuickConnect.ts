import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  Name: StringProperty
  Description?: StringProperty
  QuickConnectConfig: {
    QuickConnectType: (string | "PHONE_NUMBER" | "QUEUE" | "USER")
    PhoneConfig?: {
      PhoneNumber: StringProperty
    }
    QueueConfig?: {
      ContactFlowArn: StringProperty
      QueueArn: StringProperty
    }
    UserConfig?: {
      ContactFlowArn: StringProperty
      UserArn: StringProperty
    }
  }
  QuickConnectArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  QuickConnectType?: (string | "PHONE_NUMBER" | "QUEUE" | "USER")
}

export const AWSConnectQuickConnect = ({
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
      Type: 'AWS::Connect::QuickConnect',
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