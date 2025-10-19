import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: (string | "CREATING" | "ACTIVE" | "UPDATING" | "DELETING" | "CREATE_FAILED" | "DELETE_FAILED" | "UPDATE_FAILED")
  ClusterId: StringProperty
  ErrorInfo?: {
    Message?: StringProperty
    Code?: StringProperty
  }[]
  SpotOptions?: {
    AllocationStrategy?: (string | "lowest-price" | "capacity-optimized" | "price-capacity-optimized")
  }
  SlurmConfiguration?: {
    SlurmCustomSettings?: {
      ParameterValue: StringProperty
      ParameterName: StringProperty
    }[]
  }
  SubnetIds: StringProperty[]
  Name?: StringProperty
  ScalingConfiguration: {
    MaxInstanceCount: number
    MinInstanceCount: number
  }
  InstanceConfigs: {
    InstanceType?: StringProperty
  }[]
  Id?: StringProperty
  PurchaseOption?: (string | "ONDEMAND" | "SPOT" | "CAPACITY_BLOCK")
  Arn?: StringProperty
  CustomLaunchTemplate: {
    Version: StringProperty
    TemplateId?: StringProperty
  }
  Tags?: any
  AmiId?: StringProperty
  IamInstanceProfileArn: StringProperty
}

export const AWSPCSComputeNodeGroup = ({
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
      Type: 'AWS::PCS::ComputeNodeGroup',
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