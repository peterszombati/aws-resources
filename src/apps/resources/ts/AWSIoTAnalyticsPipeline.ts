import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  PipelineName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  PipelineActivities: {
    SelectAttributes?: {
      Next?: StringProperty
      Attributes: StringProperty[]
      Name: StringProperty
    }
    Datastore?: {
      DatastoreName: StringProperty
      Name: StringProperty
    }
    Filter?: {
      Filter: StringProperty
      Next?: StringProperty
      Name: StringProperty
    }
    AddAttributes?: {
      Next?: StringProperty
      Attributes: Record<string, any>
      Name: StringProperty
    }
    Channel?: {
      ChannelName: StringProperty
      Next?: StringProperty
      Name: StringProperty
    }
    DeviceShadowEnrich?: {
      Attribute: StringProperty
      Next?: StringProperty
      ThingName: StringProperty
      RoleArn: StringProperty
      Name: StringProperty
    }
    Math?: {
      Attribute: StringProperty
      Next?: StringProperty
      Math: StringProperty
      Name: StringProperty
    }
    Lambda?: {
      BatchSize: number
      Next?: StringProperty
      LambdaName: StringProperty
      Name: StringProperty
    }
    DeviceRegistryEnrich?: {
      Attribute: StringProperty
      Next?: StringProperty
      ThingName: StringProperty
      RoleArn: StringProperty
      Name: StringProperty
    }
    RemoveAttributes?: {
      Next?: StringProperty
      Attributes: StringProperty[]
      Name: StringProperty
    }
  }[]
}

export const AWSIoTAnalyticsPipeline = ({
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
      Type: 'AWS::IoTAnalytics::Pipeline',
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