import {StringProperty} from "../StringProperty"


type Properties = {
  AccessLogLocation?: StringProperty
  Arn?: StringProperty
  CreationTime?: StringProperty
  Description?: StringProperty
  ETagAlgorithmFamily?: (string | "MD5up" | "SHA256up" | "SHA512up")
  FallbackLocation?: StringProperty
  Name: StringProperty
  PropagatedSetLevelTags?: StringProperty[]
  S3AccessPointArn?: StringProperty
  S3AccessPolicy?: Record<string, any>
  S3Uri?: StringProperty
  SequenceStoreId?: StringProperty
  SseConfig?: {
    Type: (string | "KMS")
    KeyArn?: StringProperty
  }
  Status?: (string | "CREATING" | "ACTIVE" | "UPDATING" | "DELETING" | "FAILED")
  StatusMessage?: StringProperty
  Tags?: Record<string, any>
  UpdateTime?: StringProperty
}

export const AWSOmicsSequenceStore = ({
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
      Type: 'AWS::Omics::SequenceStore',
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