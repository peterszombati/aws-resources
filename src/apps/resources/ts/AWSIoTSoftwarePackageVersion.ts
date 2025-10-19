import {StringProperty} from "../StringProperty"


type Properties = {
  Attributes?: Record<string, any>
  Artifact?: {
    S3Location: {
      Bucket: StringProperty
      Key: StringProperty
      Version: StringProperty
    }
  }
  Description?: StringProperty
  ErrorReason?: StringProperty
  PackageName: StringProperty
  PackageVersionArn?: StringProperty
  Recipe?: StringProperty
  Sbom?: {
    S3Location: {
      Bucket: StringProperty
      Key: StringProperty
      Version: StringProperty
    }
  }
  SbomValidationStatus?: (string | "IN_PROGRESS" | "FAILED" | "SUCCEEDED" | "")
  Status?: (string | "DRAFT" | "PUBLISHED" | "DEPRECATED")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VersionName?: StringProperty
}

export const AWSIoTSoftwarePackageVersion = ({
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
      Type: 'AWS::IoT::SoftwarePackageVersion',
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