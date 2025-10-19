import {StringProperty} from "../StringProperty"


type Properties = {
  IntegrationName?: StringProperty
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  DataFilter?: StringProperty
  SourceArn: StringProperty
  TargetArn: StringProperty
  IntegrationArn?: StringProperty
  KMSKeyId?: StringProperty
  AdditionalEncryptionContext?: Record<string, any>
  CreateTime?: StringProperty
}

export const AWSRDSIntegration = ({
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
      Type: 'AWS::RDS::Integration',
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