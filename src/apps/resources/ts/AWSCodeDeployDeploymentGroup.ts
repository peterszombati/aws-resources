import {StringProperty} from "../StringProperty"


type Properties = {
  OnPremisesTagSet?: {
    OnPremisesTagSetList?: {
      OnPremisesTagGroup?: {
        Value?: StringProperty
        Type?: StringProperty
        Key?: StringProperty
      }[]
    }[]
  }
  ApplicationName: StringProperty
  DeploymentStyle?: {
    DeploymentOption?: StringProperty
    DeploymentType?: StringProperty
  }
  ServiceRoleArn: StringProperty
  BlueGreenDeploymentConfiguration?: {
    GreenFleetProvisioningOption?: {
      Action?: StringProperty
    }
    DeploymentReadyOption?: {
      WaitTimeInMinutes?: number
      ActionOnTimeout?: StringProperty
    }
    TerminateBlueInstancesOnDeploymentSuccess?: {
      TerminationWaitTimeInMinutes?: number
      Action?: StringProperty
    }
  }
  AutoScalingGroups?: StringProperty[]
  Ec2TagSet?: {
    Ec2TagSetList?: {
      Ec2TagGroup?: {
        Value?: StringProperty
        Type?: StringProperty
        Key?: StringProperty
      }[]
    }[]
  }
  OutdatedInstancesStrategy?: StringProperty
  TriggerConfigurations?: {
    TriggerTargetArn?: StringProperty
    TriggerName?: StringProperty
    TriggerEvents?: StringProperty[]
  }[]
  Deployment?: {
    Description?: StringProperty
    Revision: {
      S3Location?: {
        BundleType?: StringProperty
        Bucket: StringProperty
        ETag?: StringProperty
        Version?: StringProperty
        Key: StringProperty
      }
      GitHubLocation?: {
        Repository: StringProperty
        CommitId: StringProperty
      }
      RevisionType?: StringProperty
    }
    IgnoreApplicationStopFailures?: boolean
  }
  DeploymentConfigName?: StringProperty
  AlarmConfiguration?: {
    Alarms?: {
      Name?: StringProperty
    }[]
    IgnorePollAlarmFailure?: boolean
    Enabled?: boolean
  }
  Ec2TagFilters?: {
    Value?: StringProperty
    Type?: StringProperty
    Key?: StringProperty
  }[]
  TerminationHookEnabled?: boolean
  ECSServices?: {
    ServiceName: StringProperty
    ClusterName: StringProperty
  }[]
  AutoRollbackConfiguration?: {
    Events?: StringProperty[]
    Enabled?: boolean
  }
  LoadBalancerInfo?: {
    TargetGroupInfoList?: {
      Name?: StringProperty
    }[]
    ElbInfoList?: {
      Name?: StringProperty
    }[]
    TargetGroupPairInfoList?: {
      ProdTrafficRoute?: {
        ListenerArns?: StringProperty[]
      }
      TestTrafficRoute?: {
        ListenerArns?: StringProperty[]
      }
      TargetGroups?: {
        Name?: StringProperty
      }[]
    }[]
  }
  Id?: StringProperty
  DeploymentGroupName?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  OnPremisesInstanceTagFilters?: {
    Value?: StringProperty
    Type?: StringProperty
    Key?: StringProperty
  }[]
}

export const AWSCodeDeployDeploymentGroup = ({
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
      Type: 'AWS::CodeDeploy::DeploymentGroup',
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