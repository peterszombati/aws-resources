import {StringProperty} from "../StringProperty"


type Properties = {
  PolicyName: StringProperty
  PolicyDescription?: StringProperty
  DataLocationConstraint?: (string | "AnyLocation" | "SameContinent" | "SameCountry")
  Tier: (string | "MissionCritical" | "Critical" | "Important" | "CoreServices" | "NonCritical")
  Policy: {
    AZ: {
      RtoInSecs: number
      RpoInSecs: number
    }
    Hardware: {
      RtoInSecs: number
      RpoInSecs: number
    }
    Software: {
      RtoInSecs: number
      RpoInSecs: number
    }
    Region?: {
      RtoInSecs: number
      RpoInSecs: number
    }
  }
  PolicyArn?: StringProperty
  Tags?: Record<string, any>
}

export const AWSResilienceHubResiliencyPolicy = ({
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
      Type: 'AWS::ResilienceHub::ResiliencyPolicy',
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