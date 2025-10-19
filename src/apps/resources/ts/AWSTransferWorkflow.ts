import {StringProperty} from "../StringProperty"


type Properties = {
  OnExceptionSteps?: {
    CopyStepDetails?: {
      DestinationFileLocation?: {
        S3FileLocation?: {
          Bucket?: StringProperty
          Key?: StringProperty
        }
      }
      Name?: StringProperty
      OverwriteExisting?: (string | "TRUE" | "FALSE")
      SourceFileLocation?: StringProperty
    }
    CustomStepDetails?: {
      Name?: StringProperty
      Target?: StringProperty
      TimeoutSeconds?: number
      SourceFileLocation?: StringProperty
    }
    DecryptStepDetails?: {
      DestinationFileLocation: {
        S3FileLocation?: {
          Bucket?: StringProperty
          Key?: StringProperty
        }
        EfsFileLocation?: {
          FileSystemId?: StringProperty
          Path?: StringProperty
        }
      }
      Name?: StringProperty
      Type: (string | "PGP")
      OverwriteExisting?: (string | "TRUE" | "FALSE")
      SourceFileLocation?: StringProperty
    }
    DeleteStepDetails?: {
      Name?: StringProperty
      SourceFileLocation?: StringProperty
    }
    TagStepDetails?: {
      Name?: StringProperty
      Tags?: {
        Key: StringProperty
        Value: StringProperty
      }[]
      SourceFileLocation?: StringProperty
    }
    Type?: (string | "COPY" | "CUSTOM" | "DECRYPT" | "DELETE" | "TAG")
  }[]
  Steps: {
    CopyStepDetails?: {
      DestinationFileLocation?: {
        S3FileLocation?: {
          Bucket?: StringProperty
          Key?: StringProperty
        }
      }
      Name?: StringProperty
      OverwriteExisting?: (string | "TRUE" | "FALSE")
      SourceFileLocation?: StringProperty
    }
    CustomStepDetails?: {
      Name?: StringProperty
      Target?: StringProperty
      TimeoutSeconds?: number
      SourceFileLocation?: StringProperty
    }
    DecryptStepDetails?: {
      DestinationFileLocation: {
        S3FileLocation?: {
          Bucket?: StringProperty
          Key?: StringProperty
        }
        EfsFileLocation?: {
          FileSystemId?: StringProperty
          Path?: StringProperty
        }
      }
      Name?: StringProperty
      Type: (string | "PGP")
      OverwriteExisting?: (string | "TRUE" | "FALSE")
      SourceFileLocation?: StringProperty
    }
    DeleteStepDetails?: {
      Name?: StringProperty
      SourceFileLocation?: StringProperty
    }
    TagStepDetails?: {
      Name?: StringProperty
      Tags?: {
        Key: StringProperty
        Value: StringProperty
      }[]
      SourceFileLocation?: StringProperty
    }
    Type?: (string | "COPY" | "CUSTOM" | "DECRYPT" | "DELETE" | "TAG")
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Description?: StringProperty
  WorkflowId?: StringProperty
  Arn?: StringProperty
}

export const AWSTransferWorkflow = ({
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
      Type: 'AWS::Transfer::Workflow',
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