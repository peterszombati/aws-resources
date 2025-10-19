import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  ServerId: StringProperty
  LocalProfileId: StringProperty
  PartnerProfileId: StringProperty
  BaseDirectory?: StringProperty
  AccessRole: StringProperty
  Status?: (string | "ACTIVE" | "INACTIVE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AgreementId?: StringProperty
  Arn?: StringProperty
  PreserveFilename?: (string | "ENABLED" | "DISABLED")
  EnforceMessageSigning?: (string | "ENABLED" | "DISABLED")
  CustomDirectories?: {
    FailedFilesDirectory: StringProperty
    MdnFilesDirectory: StringProperty
    PayloadFilesDirectory: StringProperty
    StatusFilesDirectory: StringProperty
    TemporaryFilesDirectory: StringProperty
  }
}

export const AWSTransferAgreement = ({
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
      Type: 'AWS::Transfer::Agreement',
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