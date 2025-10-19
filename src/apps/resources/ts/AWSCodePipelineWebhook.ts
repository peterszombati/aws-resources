import {StringProperty} from "../StringProperty"


type Properties = {
  AuthenticationConfiguration: {
    AllowedIPRange?: StringProperty
    SecretToken?: StringProperty
  }
  Filters: {
    JsonPath: StringProperty
    MatchEquals?: StringProperty
  }[]
  Authentication: (string | "GITHUB_HMAC" | "IP" | "UNAUTHENTICATED")
  TargetPipeline: StringProperty
  TargetAction: StringProperty
  Id?: StringProperty
  Url?: StringProperty
  Name?: StringProperty
  TargetPipelineVersion?: number
  RegisterWithThirdParty?: boolean
}

export const AWSCodePipelineWebhook = ({
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
      Type: 'AWS::CodePipeline::Webhook',
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