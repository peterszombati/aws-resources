import {StringProperty} from "../StringProperty"


type Properties = {
  CreateTime?: StringProperty
  DataSource: StringProperty
  DataSourceConfiguration?: {
    IntendedUse?: (string | "SingleUse" | "Storage")
  }
  Description?: StringProperty
  IndexArn?: StringProperty
  IndexName: StringProperty
  PricingPlan?: (string | "RequestBasedUsage")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UpdateTime?: StringProperty
  Arn?: StringProperty
}

export const AWSLocationPlaceIndex = ({
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
      Type: 'AWS::Location::PlaceIndex',
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