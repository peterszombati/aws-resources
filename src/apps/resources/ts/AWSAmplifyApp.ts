import {StringProperty} from "../StringProperty"


type Properties = {
  AccessToken?: StringProperty
  AppId?: StringProperty
  AppName?: StringProperty
  Arn?: StringProperty
  AutoBranchCreationConfig?: {
    AutoBranchCreationPatterns?: StringProperty[]
    BasicAuthConfig?: {
      EnableBasicAuth?: boolean
      Username?: StringProperty
      Password?: StringProperty
    }
    BuildSpec?: StringProperty
    EnableAutoBranchCreation?: boolean
    EnableAutoBuild?: boolean
    EnablePerformanceMode?: boolean
    EnablePullRequestPreview?: boolean
    EnvironmentVariables?: {
      Name: StringProperty
      Value: StringProperty
    }[]
    Framework?: StringProperty
    PullRequestEnvironmentName?: StringProperty
    Stage?: (string | "EXPERIMENTAL" | "BETA" | "PULL_REQUEST" | "PRODUCTION" | "DEVELOPMENT")
  }
  BasicAuthConfig?: {
    EnableBasicAuth?: boolean
    Username?: StringProperty
    Password?: StringProperty
  }
  BuildSpec?: StringProperty
  CacheConfig?: {
    Type?: (string | "AMPLIFY_MANAGED" | "AMPLIFY_MANAGED_NO_COOKIES")
  }
  ComputeRoleArn?: StringProperty
  CustomHeaders?: StringProperty
  CustomRules?: {
    Condition?: StringProperty
    Status?: StringProperty
    Target: StringProperty
    Source: StringProperty
  }[]
  DefaultDomain?: StringProperty
  Description?: StringProperty
  EnableBranchAutoDeletion?: boolean
  EnvironmentVariables?: {
    Name: StringProperty
    Value: StringProperty
  }[]
  IAMServiceRole?: StringProperty
  Name: StringProperty
  OauthToken?: StringProperty
  Platform?: (string | "WEB" | "WEB_DYNAMIC" | "WEB_COMPUTE")
  Repository?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  JobConfig?: {
    BuildComputeType: (string | "STANDARD_8GB" | "LARGE_16GB" | "XLARGE_72GB")
  }
}

export const AWSAmplifyApp = ({
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
      Type: 'AWS::Amplify::App',
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