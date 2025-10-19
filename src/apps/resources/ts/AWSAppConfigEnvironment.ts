import {StringProperty} from "../StringProperty"


type Properties = {
  EnvironmentId?: StringProperty
  Description?: StringProperty
  Monitors?: {
    AlarmArn: StringProperty
    AlarmRoleArn?: StringProperty
  }[]
  DeletionProtectionCheck?: (string | "ACCOUNT_DEFAULT" | "APPLY" | "BYPASS")
  ApplicationId: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name: StringProperty
}

export const AWSAppConfigEnvironment = ({
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
      Type: 'AWS::AppConfig::Environment',
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