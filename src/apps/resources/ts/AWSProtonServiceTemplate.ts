import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Description?: StringProperty
  DisplayName?: StringProperty
  EncryptionKey?: StringProperty
  Name?: StringProperty
  PipelineProvisioning?: (string | "CUSTOMER_MANAGED")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSProtonServiceTemplate = ({
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
      Type: 'AWS::Proton::ServiceTemplate',
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