import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  Status?: (string | "DISABLED" | "ENABLED")
  ExecutionRole: StringProperty
  ResourceType: (string | "AMI_IMAGE" | "CONTAINER_IMAGE")
  PolicyDetails: {
    Action: {
      Type: (string | "DELETE" | "DEPRECATE" | "DISABLE")
      IncludeResources?: {
        Amis?: boolean
        Containers?: boolean
        Snapshots?: boolean
      }
    }
    Filter: {
      Type: (string | "AGE" | "COUNT")
      Value: number
      Unit?: (string | "DAYS" | "WEEKS" | "MONTHS" | "YEARS")
      RetainAtLeast?: number
    }
    ExclusionRules?: {
      TagMap?: Record<string, any>
      Amis?: {
        IsPublic?: boolean
        Regions?: StringProperty[]
        SharedAccounts?: StringProperty[]
        LastLaunched?: {
          Value: number
          Unit: (string | "DAYS" | "WEEKS" | "MONTHS" | "YEARS")
        }
        TagMap?: Record<string, any>
      }
    }
  }[]
  ResourceSelection: {
    Recipes?: {
      Name: StringProperty
      SemanticVersion: StringProperty
    }[]
    TagMap?: Record<string, any>
  }
  Tags?: Record<string, any>
}

export const AWSImageBuilderLifecyclePolicy = ({
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
      Type: 'AWS::ImageBuilder::LifecyclePolicy',
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