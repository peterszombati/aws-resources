import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  IdentityDNSRecordName3?: StringProperty
  IdentityDNSRecordName1?: StringProperty
  IdentityDNSRecordName2?: StringProperty
  IdentityDNSRecordValue3?: StringProperty
  IdentityDNSRecordValue2?: StringProperty
  IdentityDNSRecordValue1?: StringProperty
  FeedbackForwardingEnabled?: boolean
  DkimSigningEnabled?: boolean
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  Name: StringProperty
  MailFromAttributes?: {
    MailFromDomain?: StringProperty
    BehaviorOnMxFailure?: StringProperty
  }
}

export const AWSPinpointEmailIdentity = ({
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
      Type: 'AWS::PinpointEmail::Identity',
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