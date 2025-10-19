import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  Id?: StringProperty
  Name: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
  CollectionEndpoint?: StringProperty
  DashboardEndpoint?: StringProperty
  Type?: (string | "SEARCH" | "TIMESERIES" | "VECTORSEARCH")
  StandbyReplicas?: (string | "ENABLED" | "DISABLED")
}

export const AWSOpenSearchServerlessCollection = ({
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
      Type: 'AWS::OpenSearchServerless::Collection',
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