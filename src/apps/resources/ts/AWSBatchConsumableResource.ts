import {StringProperty} from "../StringProperty"


type Properties = {
  ConsumableResourceName?: StringProperty
  ConsumableResourceArn?: StringProperty
  TotalQuantity: number /* schema format: int64*/
  InUseQuantity?: number /* schema format: int64*/
  AvailableQuantity?: number /* schema format: int64*/
  ResourceType: (string | "REPLENISHABLE" | "NON_REPLENISHABLE")
  CreatedAt?: number /* schema format: int64*/
  Tags?: Record<string, any>
}

export const AWSBatchConsumableResource = ({
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
      Type: 'AWS::Batch::ConsumableResource',
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