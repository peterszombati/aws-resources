import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreationTime?: StringProperty
  Description?: StringProperty
  LastModificationTime?: StringProperty
  Name?: StringProperty
  NodeCounts?: {
    TotalNodes?: number
    TotalBranches?: number
    TotalSensors?: number
    TotalAttributes?: number
    TotalActuators?: number
  }
  Nodes?: any[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTFleetWiseSignalCatalog = ({
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
      Type: 'AWS::IoTFleetWise::SignalCatalog',
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