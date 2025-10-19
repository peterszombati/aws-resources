import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  NotificationConfiguration?: {
    NotificationTopicArn: StringProperty
  }
  WorkteamName?: StringProperty
  MemberDefinitions?: {
    CognitoMemberDefinition?: {
      CognitoUserGroup: StringProperty
      CognitoUserPool: StringProperty
      CognitoClientId: StringProperty
    }
    OidcMemberDefinition?: {
      OidcGroups: StringProperty[]
    }
  }[]
  Id?: StringProperty
  WorkforceName?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSSageMakerWorkteam = ({
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
      Type: 'AWS::SageMaker::Workteam',
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