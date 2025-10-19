import {StringProperty} from "../StringProperty"


type Properties = {
  Configuration: {
    Style: StringProperty
    PoliticalView?: StringProperty
    CustomLayers?: StringProperty[]
  }
  CreateTime?: StringProperty
  Description?: StringProperty
  MapArn?: StringProperty
  MapName: StringProperty
  PricingPlan?: (string | "RequestBasedUsage")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UpdateTime?: StringProperty
  Arn?: StringProperty
}

export const AWSLocationMap = ({
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
      Type: 'AWS::Location::Map',
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