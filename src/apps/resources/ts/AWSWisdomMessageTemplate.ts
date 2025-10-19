import {StringProperty} from "../StringProperty"


type Properties = {
  KnowledgeBaseArn: StringProperty
  MessageTemplateId?: StringProperty
  MessageTemplateArn?: StringProperty
  Name: StringProperty
  ChannelSubtype: (string | "EMAIL" | "SMS")
  Content: {
    EmailMessageTemplateContent?: {
      Subject: StringProperty
      Body: {
        PlainText?: {
          Content?: StringProperty
        }
        Html?: {
          Content?: StringProperty
        }
      }
      Headers: {
        Name?: StringProperty
        Value?: StringProperty
      }[]
    }
    SmsMessageTemplateContent?: {
      Body: {
        PlainText?: {
          Content?: StringProperty
        }
      }
    }
  }
  Description?: StringProperty
  Language?: StringProperty
  GroupingConfiguration?: {
    Criteria: StringProperty
    Values: StringProperty[]
  }
  DefaultAttributes?: {
    SystemAttributes?: {
      Name?: StringProperty
      CustomerEndpoint?: {
        Address?: StringProperty
      }
      SystemEndpoint?: {
        Address?: StringProperty
      }
    }
    AgentAttributes?: {
      FirstName?: StringProperty
      LastName?: StringProperty
    }
    CustomerProfileAttributes?: {
      ProfileId?: StringProperty
      ProfileARN?: StringProperty
      FirstName?: StringProperty
      MiddleName?: StringProperty
      LastName?: StringProperty
      AccountNumber?: StringProperty
      EmailAddress?: StringProperty
      PhoneNumber?: StringProperty
      AdditionalInformation?: StringProperty
      PartyType?: StringProperty
      BusinessName?: StringProperty
      BirthDate?: StringProperty
      Gender?: StringProperty
      MobilePhoneNumber?: StringProperty
      HomePhoneNumber?: StringProperty
      BusinessPhoneNumber?: StringProperty
      BusinessEmailAddress?: StringProperty
      Address1?: StringProperty
      Address2?: StringProperty
      Address3?: StringProperty
      Address4?: StringProperty
      City?: StringProperty
      County?: StringProperty
      Country?: StringProperty
      PostalCode?: StringProperty
      Province?: StringProperty
      State?: StringProperty
      ShippingAddress1?: StringProperty
      ShippingAddress2?: StringProperty
      ShippingAddress3?: StringProperty
      ShippingAddress4?: StringProperty
      ShippingCity?: StringProperty
      ShippingCounty?: StringProperty
      ShippingCountry?: StringProperty
      ShippingPostalCode?: StringProperty
      ShippingProvince?: StringProperty
      ShippingState?: StringProperty
      MailingAddress1?: StringProperty
      MailingAddress2?: StringProperty
      MailingAddress3?: StringProperty
      MailingAddress4?: StringProperty
      MailingCity?: StringProperty
      MailingCounty?: StringProperty
      MailingCountry?: StringProperty
      MailingPostalCode?: StringProperty
      MailingProvince?: StringProperty
      MailingState?: StringProperty
      BillingAddress1?: StringProperty
      BillingAddress2?: StringProperty
      BillingAddress3?: StringProperty
      BillingAddress4?: StringProperty
      BillingCity?: StringProperty
      BillingCounty?: StringProperty
      BillingCountry?: StringProperty
      BillingPostalCode?: StringProperty
      BillingProvince?: StringProperty
      BillingState?: StringProperty
      Custom?: Record<string, any>
    }
    CustomAttributes?: Record<string, any>
  }
  MessageTemplateContentSha256?: StringProperty
  MessageTemplateAttachments?: {
    AttachmentId?: StringProperty
    AttachmentName: StringProperty
    S3PresignedUrl: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWisdomMessageTemplate = ({
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
      Type: 'AWS::Wisdom::MessageTemplate',
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