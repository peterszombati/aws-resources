import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AssociationBehavior?: (string | "CreateIotThing" | "ValidateIotThingExists")
  Attributes?: Record<string, any>
  CreationTime?: StringProperty
  DecoderManifestArn: StringProperty
  Name: StringProperty
  LastModificationTime?: StringProperty
  ModelManifestArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  StateTemplates?: {
    Identifier: StringProperty
    StateTemplateUpdateStrategy: any
  }[]
}

export const AWSIoTFleetWiseVehicle = ({
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
      Type: 'AWS::IoTFleetWise::Vehicle',
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