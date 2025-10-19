import {StringProperty} from "../StringProperty"


type Properties = {
  CreateTime?: StringProperty
  Description?: StringProperty
  EventBridgeEnabled?: boolean
  KmsKeyEnableGeospatialQueries?: boolean
  KmsKeyId?: StringProperty
  PositionFiltering?: (string | "TimeBased" | "DistanceBased" | "AccuracyBased")
  PricingPlan?: (string | "RequestBasedUsage")
  PricingPlanDataSource?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TrackerArn?: StringProperty
  TrackerName: StringProperty
  UpdateTime?: StringProperty
  Arn?: StringProperty
}

export const AWSLocationTracker = ({
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
      Type: 'AWS::Location::Tracker',
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