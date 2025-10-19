import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: (string | "CREATING" | "WAITING_FOR_APPROVAL" | "RUNNING" | "SUSPENDED")
  Action?: (string | "APPROVE" | "SUSPEND" | "RESUME" | "UPDATE")
  CreationTime?: StringProperty
  Compression?: (string | "OFF" | "SNAPPY")
  Description?: StringProperty
  Priority?: number
  SignalsToCollect?: {
    MaxSampleCount?: number
    Name: StringProperty
    MinimumSamplingIntervalMs?: number
    DataPartitionId?: StringProperty
  }[]
  SignalsToFetch?: {
    FullyQualifiedName: StringProperty
    SignalFetchConfig: any
    ConditionLanguageVersion?: number
    Actions: StringProperty[]
  }[]
  DataDestinationConfigs?: any[]
  StartTime?: StringProperty
  Name: StringProperty
  ExpiryTime?: StringProperty
  LastModificationTime?: StringProperty
  SpoolingMode?: (string | "OFF" | "TO_DISK")
  SignalCatalogArn: StringProperty
  PostTriggerCollectionDuration?: number
  DataExtraDimensions?: StringProperty[]
  DiagnosticsMode?: (string | "OFF" | "SEND_ACTIVE_DTCS")
  TargetArn: StringProperty
  Arn?: StringProperty
  CollectionScheme: any
  DataPartitions?: {
    Id: StringProperty
    StorageOptions: {
      MaximumSize: {
        Unit: (string | "MB" | "GB" | "TB")
        Value: number
      }
      MinimumTimeToLive: {
        Unit: (string | "HOURS" | "DAYS" | "WEEKS")
        Value: number
      }
      StorageLocation: StringProperty
    }
    UploadOptions?: {
      Expression: StringProperty
      ConditionLanguageVersion?: number
    }
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTFleetWiseCampaign = ({
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
      Type: 'AWS::IoTFleetWise::Campaign',
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