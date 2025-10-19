import {StringProperty} from "../StringProperty"


type Properties = {
  ContinuousDeploymentPolicyConfig: {
    Enabled: boolean
    SingleHeaderPolicyConfig?: {
      Header: StringProperty
      Value: StringProperty
    }
    SingleWeightPolicyConfig?: {
      SessionStickinessConfig?: {
        IdleTTL: number
        MaximumTTL: number
      }
      Weight: number
    }
    StagingDistributionDnsNames: StringProperty[]
    TrafficConfig?: {
      SingleHeaderConfig?: {
        Header: StringProperty
        Value: StringProperty
      }
      SingleWeightConfig?: {
        SessionStickinessConfig?: {
          IdleTTL: number
          MaximumTTL: number
        }
        Weight: number
      }
      Type: (string | "SingleWeight" | "SingleHeader")
    }
    Type?: (string | "SingleWeight" | "SingleHeader")
  }
  Id?: StringProperty
  LastModifiedTime?: StringProperty
}

export const AWSCloudFrontContinuousDeploymentPolicy = ({
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
      Type: 'AWS::CloudFront::ContinuousDeploymentPolicy',
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