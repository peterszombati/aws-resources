import {StringProperty} from "../StringProperty"


type Properties = {
  As2Id: StringProperty
  ProfileType: (string | "LOCAL" | "PARTNER")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CertificateIds?: StringProperty[]
  Arn?: StringProperty
  ProfileId?: StringProperty
}

export const AWSTransferProfile = ({
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
      Type: 'AWS::Transfer::Profile',
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