import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: StringProperty
  Description?: StringProperty
  PricingPlan?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Tags?: Record<string, any>
  Name?: StringProperty
  ConcurrentJobs?: number
}

export const AWSMediaConvertQueue = ({
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
      Type: 'AWS::MediaConvert::Queue',
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