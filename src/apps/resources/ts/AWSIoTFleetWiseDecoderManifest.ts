import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreationTime?: StringProperty
  Description?: StringProperty
  LastModificationTime?: StringProperty
  ModelManifestArn: StringProperty
  Name: StringProperty
  NetworkInterfaces?: any[]
  SignalDecoders?: any[]
  Status?: (string | "ACTIVE" | "DRAFT")
  DefaultForUnmappedSignals?: (string | "CUSTOM_DECODING")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTFleetWiseDecoderManifest = ({
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
      Type: 'AWS::IoTFleetWise::DecoderManifest',
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