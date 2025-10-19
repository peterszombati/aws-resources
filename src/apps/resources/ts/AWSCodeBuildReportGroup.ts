import {StringProperty} from "../StringProperty"


type Properties = {
  Type: StringProperty
  ExportConfig: {
    S3Destination?: {
      Path?: StringProperty
      Bucket: StringProperty
      Packaging?: StringProperty
      EncryptionKey?: StringProperty
      BucketOwner?: StringProperty
      EncryptionDisabled?: boolean
    }
    ExportConfigType: StringProperty
  }
  Id?: StringProperty
  Arn?: StringProperty
  DeleteReports?: boolean
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name?: StringProperty
}

export const AWSCodeBuildReportGroup = ({
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
      Type: 'AWS::CodeBuild::ReportGroup',
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