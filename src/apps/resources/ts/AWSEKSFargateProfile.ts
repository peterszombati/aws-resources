import {StringProperty} from "../StringProperty"


type Properties = {
  ClusterName: StringProperty
  FargateProfileName?: StringProperty
  PodExecutionRoleArn: StringProperty
  Arn?: StringProperty
  Subnets?: StringProperty[]
  Selectors: {
    Namespace: StringProperty
    Labels?: {
      Key: StringProperty
      Value: StringProperty
    }[]
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEKSFargateProfile = ({
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
      Type: 'AWS::EKS::FargateProfile',
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