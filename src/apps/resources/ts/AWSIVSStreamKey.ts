import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ChannelArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Value?: StringProperty
}

export const AWSIVSStreamKey = ({
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
      Type: 'AWS::IVS::StreamKey',
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