import {StringProperty} from "../StringProperty"


type Properties = {
  ServiceEnvironmentArn?: StringProperty
  ServiceEnvironmentName?: StringProperty
  State?: StringProperty
  ServiceEnvironmentType: StringProperty
  CapacityLimits: {
    MaxCapacity?: number
    CapacityUnit?: StringProperty
  }[]
  Tags?: Record<string, any>
}

export const AWSBatchServiceEnvironment = ({
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
      Type: 'AWS::Batch::ServiceEnvironment',
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