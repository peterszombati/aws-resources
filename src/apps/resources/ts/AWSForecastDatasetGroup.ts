import {StringProperty} from "../StringProperty"


type Properties = {
  DatasetArns?: StringProperty[]
  DatasetGroupName: StringProperty
  Domain: (string | "RETAIL" | "CUSTOM" | "INVENTORY_PLANNING" | "EC2_CAPACITY" | "WORK_FORCE" | "WEB_TRAFFIC" | "METRICS")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  DatasetGroupArn?: StringProperty
}

export const AWSForecastDatasetGroup = ({
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
      Type: 'AWS::Forecast::DatasetGroup',
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