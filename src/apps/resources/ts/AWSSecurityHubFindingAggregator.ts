import {StringProperty} from "../StringProperty"


type Properties = {
  FindingAggregatorArn?: StringProperty
  RegionLinkingMode: (string | "ALL_REGIONS" | "ALL_REGIONS_EXCEPT_SPECIFIED" | "SPECIFIED_REGIONS")
  Regions?: StringProperty[]
  FindingAggregationRegion?: StringProperty
}

export const AWSSecurityHubFindingAggregator = ({
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
      Type: 'AWS::SecurityHub::FindingAggregator',
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