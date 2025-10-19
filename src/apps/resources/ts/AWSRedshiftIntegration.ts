import {StringProperty} from "../StringProperty"


type Properties = {
  IntegrationArn?: StringProperty
  IntegrationName?: StringProperty
  SourceArn: StringProperty
  TargetArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  CreateTime?: StringProperty
  KMSKeyId?: StringProperty
  AdditionalEncryptionContext?: Record<string, any>
}

export const AWSRedshiftIntegration = ({
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
      Type: 'AWS::Redshift::Integration',
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