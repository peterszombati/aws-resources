import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name?: StringProperty
  State?: (string | "CREATING" | "CREATE_FAILED" | "ACTIVE")
  RecordingReconnectWindowSeconds?: number
  DestinationConfiguration: {
    S3?: {
      BucketName: StringProperty
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ThumbnailConfiguration?: {
    RecordingMode?: (string | "INTERVAL" | "DISABLED")
    TargetIntervalSeconds?: number
    Resolution?: (string | "FULL_HD" | "HD" | "SD" | "LOWEST_RESOLUTION")
    Storage?: (string | "SEQUENTIAL" | "LATEST")[]
  }
  RenditionConfiguration?: {
    RenditionSelection?: (string | "ALL" | "NONE" | "CUSTOM")
    Renditions?: (string | "FULL_HD" | "HD" | "SD" | "LOWEST_RESOLUTION")[]
  }
}

export const AWSIVSRecordingConfiguration = ({
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
      Type: 'AWS::IVS::RecordingConfiguration',
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