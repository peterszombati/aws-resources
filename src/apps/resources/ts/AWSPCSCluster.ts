import {StringProperty} from "../StringProperty"


type Properties = {
  Endpoints?: {
    PublicIpAddress?: StringProperty
    Type: (string | "SLURMCTLD" | "SLURMDBD")
    PrivateIpAddress: StringProperty
    Port: StringProperty
    Ipv6Address?: StringProperty
  }[]
  Status?: (string | "CREATING" | "ACTIVE" | "UPDATING" | "DELETING" | "CREATE_FAILED" | "DELETE_FAILED" | "UPDATE_FAILED")
  Networking: {
    NetworkType?: (string | "IPV4" | "IPV6")
    SecurityGroupIds?: StringProperty[]
    SubnetIds?: StringProperty[]
  }
  Scheduler: {
    Type: (string | "SLURM")
    Version: StringProperty
  }
  Size: (string | "SMALL" | "MEDIUM" | "LARGE")
  ErrorInfo?: {
    Message?: StringProperty
    Code?: StringProperty
  }[]
  SlurmConfiguration?: {
    Accounting?: {
      DefaultPurgeTimeInDays?: number
      Mode: (string | "STANDARD" | "NONE")
    }
    AuthKey?: {
      SecretArn: StringProperty
      SecretVersion: StringProperty
    }
    ScaleDownIdleTimeInSeconds?: number
    SlurmCustomSettings?: {
      ParameterValue: StringProperty
      ParameterName: StringProperty
    }[]
  }
  Id?: StringProperty
  Arn?: StringProperty
  Tags?: any
  Name?: StringProperty
}

export const AWSPCSCluster = ({
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
      Type: 'AWS::PCS::Cluster',
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