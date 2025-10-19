import {StringProperty} from "../StringProperty"


type Properties = {
  SamplingRule?: {
    Attributes?: Record<string, any>
    FixedRate: number
    Host: StringProperty
    HTTPMethod: StringProperty
    Priority: number
    ReservoirSize: number
    ResourceARN: StringProperty
    RuleARN?: StringProperty
    RuleName?: StringProperty
    ServiceName: StringProperty
    ServiceType: StringProperty
    URLPath: StringProperty
    Version?: number
  }
  SamplingRuleRecord?: {
    CreatedAt?: StringProperty
    ModifiedAt?: StringProperty
    SamplingRule?: {
      Attributes?: Record<string, any>
      FixedRate: number
      Host: StringProperty
      HTTPMethod: StringProperty
      Priority: number
      ReservoirSize: number
      ResourceARN: StringProperty
      RuleARN?: StringProperty
      RuleName?: StringProperty
      ServiceName: StringProperty
      ServiceType: StringProperty
      URLPath: StringProperty
      Version?: number
    }
  }
  SamplingRuleUpdate?: {
    Attributes?: Record<string, any>
    FixedRate?: number
    Host?: StringProperty
    HTTPMethod?: StringProperty
    Priority?: number
    ReservoirSize?: number
    ResourceARN?: StringProperty
    RuleARN?: StringProperty
    RuleName?: StringProperty
    ServiceName?: StringProperty
    ServiceType?: StringProperty
    URLPath?: StringProperty
  }
  RuleARN?: StringProperty
  RuleName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSXRaySamplingRule = ({
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
      Type: 'AWS::XRay::SamplingRule',
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