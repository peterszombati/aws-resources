import {StringProperty} from "../StringProperty"


type Properties = {
  VdmAttributesResourceId?: StringProperty
  DashboardAttributes?: {
    EngagementMetrics?: StringProperty
  }
  GuardianAttributes?: {
    OptimizedSharedDelivery?: StringProperty
  }
}

export const AWSSESVdmAttributes = ({
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
      Type: 'AWS::SES::VdmAttributes',
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