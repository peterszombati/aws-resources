import {StringProperty} from "../StringProperty"


type Properties = {
  EmailIdentity: StringProperty
  ConfigurationSetAttributes?: {
    ConfigurationSetName?: StringProperty
  }
  DkimSigningAttributes?: {
    DomainSigningSelector?: StringProperty
    DomainSigningPrivateKey?: StringProperty
    NextSigningKeyLength?: StringProperty
  }
  DkimAttributes?: {
    SigningEnabled?: boolean
  }
  MailFromAttributes?: {
    MailFromDomain?: StringProperty
    BehaviorOnMxFailure?: StringProperty
  }
  FeedbackAttributes?: {
    EmailForwardingEnabled?: boolean
  }
  DkimDNSTokenName1?: StringProperty
  DkimDNSTokenName2?: StringProperty
  DkimDNSTokenName3?: StringProperty
  DkimDNSTokenValue1?: StringProperty
  DkimDNSTokenValue2?: StringProperty
  DkimDNSTokenValue3?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSESEmailIdentity = ({
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
      Type: 'AWS::SES::EmailIdentity',
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