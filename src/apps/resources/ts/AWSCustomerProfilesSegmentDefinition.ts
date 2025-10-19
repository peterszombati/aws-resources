import {StringProperty} from "../StringProperty"


type Properties = {
  CreatedAt?: StringProperty
  Description?: StringProperty
  DisplayName: StringProperty
  DomainName: StringProperty
  SegmentDefinitionName: StringProperty
  SegmentGroups: {
    Groups?: {
      Dimensions?: any[]
      SourceSegments?: {
        SegmentDefinitionName?: StringProperty
      }[]
      SourceType?: (string | "ALL" | "ANY" | "NONE")
      Type?: (string | "ALL" | "ANY" | "NONE")
    }[]
    Include?: (string | "ALL" | "ANY" | "NONE")
  }
  SegmentDefinitionArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCustomerProfilesSegmentDefinition = ({
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
      Type: 'AWS::CustomerProfiles::SegmentDefinition',
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