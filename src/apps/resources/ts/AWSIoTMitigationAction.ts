import {StringProperty} from "../StringProperty"


type Properties = {
  ActionName?: StringProperty
  RoleArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ActionParams: {
    AddThingsToThingGroupParams?: {
      OverrideDynamicGroups?: boolean
      ThingGroupNames: StringProperty[]
    }
    EnableIoTLoggingParams?: {
      LogLevel: (string | "DEBUG" | "INFO" | "ERROR" | "WARN" | "UNSET_VALUE")
      RoleArnForLogging: StringProperty
    }
    PublishFindingToSnsParams?: {
      TopicArn: StringProperty
    }
    ReplaceDefaultPolicyVersionParams?: {
      TemplateName: (string | "BLANK_POLICY" | "UNSET_VALUE")
    }
    UpdateCACertificateParams?: {
      Action: (string | "DEACTIVATE" | "UNSET_VALUE")
    }
    UpdateDeviceCertificateParams?: {
      Action: (string | "DEACTIVATE" | "UNSET_VALUE")
    }
  }
  MitigationActionArn?: StringProperty
  MitigationActionId?: StringProperty
}

export const AWSIoTMitigationAction = ({
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
      Type: 'AWS::IoT::MitigationAction',
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