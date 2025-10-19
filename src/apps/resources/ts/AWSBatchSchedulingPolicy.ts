import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Arn?: StringProperty
  FairsharePolicy?: {
    ShareDecaySeconds?: number
    ComputeReservation?: number
    ShareDistribution?: {
      ShareIdentifier?: StringProperty
      WeightFactor?: number
    }[]
  }
  Tags?: Record<string, any>
}

export const AWSBatchSchedulingPolicy = ({
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
      Type: 'AWS::Batch::SchedulingPolicy',
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