import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  EngineType: (string | "microfocus" | "bluage")
  EngineVersion?: StringProperty
  EnvironmentArn?: StringProperty
  EnvironmentId?: StringProperty
  HighAvailabilityConfig?: {
    DesiredCapacity: number
  }
  InstanceType: StringProperty
  KmsKeyId?: StringProperty
  Name: StringProperty
  NetworkType?: (string | "ipv4" | "dual")
  PreferredMaintenanceWindow?: StringProperty
  PubliclyAccessible?: boolean
  SecurityGroupIds?: StringProperty[]
  StorageConfigurations?: Record<string, any>[]
  SubnetIds?: StringProperty[]
  Tags?: Record<string, any>
}

export const AWSM2Environment = ({
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
      Type: 'AWS::M2::Environment',
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