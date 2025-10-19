import {StringProperty} from "../StringProperty"


type Properties = {
  AggregatorV2Arn?: StringProperty
  RegionLinkingMode: (string | "SPECIFIED_REGIONS")
  LinkedRegions: StringProperty[]
  Tags?: Record<string, any>
  AggregationRegion?: StringProperty
}

export const AWSSecurityHubAggregatorV2 = ({
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
      Type: 'AWS::SecurityHub::AggregatorV2',
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