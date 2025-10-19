import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  CustomPluginArn?: StringProperty
  ContentType: (string | "JAR" | "ZIP")
  FileDescription?: {
    FileMd5?: StringProperty
    FileSize?: number /* schema format: int64*/
  }
  Location: {
    S3Location: {
      BucketArn: StringProperty
      FileKey: StringProperty
      ObjectVersion?: StringProperty
    }
  }
  Revision?: number /* schema format: int64*/
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSKafkaConnectCustomPlugin = ({
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
      Type: 'AWS::KafkaConnect::CustomPlugin',
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