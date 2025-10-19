import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Description?: StringProperty
  DisplayName?: StringProperty
  EncryptionKey?: StringProperty
  Name?: StringProperty
  Provisioning?: (string | "CUSTOMER_MANAGED")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSProtonEnvironmentTemplate = ({
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
      Type: 'AWS::Proton::EnvironmentTemplate',
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