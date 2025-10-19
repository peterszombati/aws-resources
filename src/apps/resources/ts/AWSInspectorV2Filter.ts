import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  FilterCriteria: {
    AwsAccountId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    CodeVulnerabilityDetectorName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    CodeVulnerabilityDetectorTags?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    CodeVulnerabilityFilePath?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    ComponentId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    ComponentType?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    Ec2InstanceImageId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    Ec2InstanceSubnetId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    Ec2InstanceVpcId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    EcrImageArchitecture?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    EcrImageHash?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    EcrImagePushedAt?: {
      EndInclusive?: number /* schema format: int64*/
      StartInclusive?: number /* schema format: int64*/
    }[]
    EcrImageRegistry?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    EcrImageRepositoryName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    EcrImageTags?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    EpssScore?: {
      LowerInclusive?: number
      UpperInclusive?: number
    }[]
    ExploitAvailable?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    FindingArn?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    FindingStatus?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    FindingType?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    FirstObservedAt?: {
      EndInclusive?: number /* schema format: int64*/
      StartInclusive?: number /* schema format: int64*/
    }[]
    FixAvailable?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    InspectorScore?: {
      LowerInclusive?: number
      UpperInclusive?: number
    }[]
    LambdaFunctionExecutionRoleArn?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    LambdaFunctionLastModifiedAt?: {
      EndInclusive?: number /* schema format: int64*/
      StartInclusive?: number /* schema format: int64*/
    }[]
    LambdaFunctionLayers?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    LambdaFunctionName?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    LambdaFunctionRuntime?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    LastObservedAt?: {
      EndInclusive?: number /* schema format: int64*/
      StartInclusive?: number /* schema format: int64*/
    }[]
    NetworkProtocol?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    PortRange?: {
      BeginInclusive?: number
      EndInclusive?: number
    }[]
    RelatedVulnerabilities?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    ResourceTags?: {
      Comparison: (string | "EQUALS")
      Key?: StringProperty
      Value?: StringProperty
    }[]
    ResourceType?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    Severity?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    Title?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    UpdatedAt?: {
      EndInclusive?: number /* schema format: int64*/
      StartInclusive?: number /* schema format: int64*/
    }[]
    VendorSeverity?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    VulnerabilityId?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    VulnerabilitySource?: {
      Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
      Value: StringProperty
    }[]
    VulnerablePackages?: {
      Architecture?: {
        Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
        Value: StringProperty
      }
      Epoch?: {
        LowerInclusive?: number
        UpperInclusive?: number
      }
      FilePath?: {
        Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
        Value: StringProperty
      }
      Name?: {
        Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
        Value: StringProperty
      }
      Release?: {
        Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
        Value: StringProperty
      }
      SourceLambdaLayerArn?: {
        Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
        Value: StringProperty
      }
      SourceLayerHash?: {
        Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
        Value: StringProperty
      }
      Version?: {
        Comparison: (string | "EQUALS" | "PREFIX" | "NOT_EQUALS")
        Value: StringProperty
      }
    }[]
  }
  FilterAction: (string | "NONE" | "SUPPRESS")
  Arn?: StringProperty
  Tags?: Record<string, any>
}

export const AWSInspectorV2Filter = ({
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
      Type: 'AWS::InspectorV2::Filter',
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