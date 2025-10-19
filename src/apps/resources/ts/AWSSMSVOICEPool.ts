import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  PoolId?: StringProperty
  OriginationIdentities: StringProperty[]
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
  SharedRoutesEnabled?: boolean
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

export const AWSSMSVOICEPool = ({
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
      Type: 'AWS::SMSVOICE::Pool',
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