import {StringProperty} from "../StringProperty"


type Properties = {
  DesiredDeliveryMediums?: StringProperty[]
  ForceAliasCreation?: boolean
  UserAttributes?: {
    Name?: StringProperty
    Value?: StringProperty
  }[]
  MessageAction?: StringProperty
  Username?: StringProperty
  UserPoolId: StringProperty
  ValidationData?: {
    Name?: StringProperty
    Value?: StringProperty
  }[]
  ClientMetadata?: Record<string, any>
}

export const AWSCognitoUserPoolUser = ({
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
      Type: 'AWS::Cognito::UserPoolUser',
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