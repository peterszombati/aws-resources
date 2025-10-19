import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name?: StringProperty
  KmsKeyId?: StringProperty
  RoleArn: StringProperty
  KinesisVideoStream: {
    Arn: StringProperty
  }
  FaceSearchSettings?: {
    CollectionId: StringProperty
    FaceMatchThreshold?: number
  }
  ConnectedHomeSettings?: {
    Labels: StringProperty[]
    MinConfidence?: number
  }
  KinesisDataStream?: {
    Arn: StringProperty
  }
  S3Destination?: {
    BucketName: StringProperty
    ObjectKeyPrefix?: StringProperty
  }
  NotificationChannel?: {
    Arn: StringProperty
  }
  DataSharingPreference?: {
    OptIn: boolean
  }
  PolygonRegionsOfInterest?: {
    X: number
    Y: number
  }[][]
  BoundingBoxRegionsOfInterest?: {
    Height: number
    Width: number
    Left: number
    Top: number
  }[]
  Status?: StringProperty
  StatusMessage?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRekognitionStreamProcessor = ({
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
      Type: 'AWS::Rekognition::StreamProcessor',
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