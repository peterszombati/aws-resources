import {StringProperty} from "../StringProperty"


type Properties = {
  ConsumerCreationTimestamp?: StringProperty
  ConsumerName: StringProperty
  ConsumerARN?: StringProperty
  ConsumerStatus?: StringProperty
  StreamARN: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSKinesisStreamConsumer = ({
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
      Type: 'AWS::Kinesis::StreamConsumer',
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