import {StringProperty} from "../StringProperty"


type Properties = {
  CollectionArn?: StringProperty
  CollectionName: StringProperty
  CreateTime?: StringProperty
  Description?: StringProperty
  KmsKeyId?: StringProperty
  PricingPlan?: (string | "RequestBasedUsage")
  PricingPlanDataSource?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UpdateTime?: StringProperty
  Arn?: StringProperty
}

export const AWSLocationGeofenceCollection = ({
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
      Type: 'AWS::Location::GeofenceCollection',
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