import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  DomainId?: StringProperty
  Name: StringProperty
  ServerSideEncryptionConfiguration: {
    KmsKeyId: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSVoiceIDDomain = ({
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
      Type: 'AWS::VoiceID::Domain',
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