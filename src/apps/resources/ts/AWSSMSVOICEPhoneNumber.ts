import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  PhoneNumber?: StringProperty
  PhoneNumberId?: StringProperty
  IsoCountryCode: StringProperty
  NumberCapabilities: (string | "SMS" | "VOICE" | "MMS")[]
  NumberType: (string | "LONG_CODE" | "TOLL_FREE" | "TEN_DLC" | "SIMULATOR")
  DeletionProtectionEnabled?: boolean
  OptOutListName?: StringProperty
  SelfManagedOptOutsEnabled?: boolean
  MandatoryKeywords: {
    STOP: {
      Message: StringProperty
    }
    HELP: {
      Message: StringProperty
    }
  }
  OptionalKeywords?: {
    Keyword: StringProperty
    Message: StringProperty
    Action: (string | "AUTOMATIC_RESPONSE" | "OPT_OUT" | "OPT_IN")
  }[]
  TwoWay?: {
    Enabled: boolean
    ChannelArn?: StringProperty
    ChannelRole?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSMSVOICEPhoneNumber = ({
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
      Type: 'AWS::SMSVOICE::PhoneNumber',
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