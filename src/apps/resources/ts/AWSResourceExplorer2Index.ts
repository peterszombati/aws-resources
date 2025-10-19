import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Tags?: Record<string, any>
  Type: (string | "LOCAL" | "AGGREGATOR")
  IndexState?: (string | "ACTIVE" | "CREATING" | "DELETING" | "DELETED" | "UPDATING")
}

export const AWSResourceExplorer2Index = ({
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
      Type: 'AWS::ResourceExplorer2::Index',
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