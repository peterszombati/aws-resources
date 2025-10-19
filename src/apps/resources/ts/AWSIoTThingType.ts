import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  ThingTypeName?: StringProperty
  DeprecateThingType?: boolean
  ThingTypeProperties?: {
    SearchableAttributes?: StringProperty[]
    ThingTypeDescription?: StringProperty
    Mqtt5Configuration?: {
      PropagatingAttributes?: {
        UserPropertyKey: StringProperty
        ThingAttribute?: StringProperty
        ConnectionAttribute?: (string | "iot:ClientId" | "iot:Thing.ThingName")
      }[]
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTThingType = ({
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
      Type: 'AWS::IoT::ThingType',
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