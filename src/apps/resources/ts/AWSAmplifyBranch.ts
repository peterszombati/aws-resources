import {StringProperty} from "../StringProperty"


type Properties = {
  AppId: StringProperty
  Arn?: StringProperty
  BasicAuthConfig?: {
    EnableBasicAuth?: boolean
    Username: StringProperty
    Password: StringProperty
  }
  Backend?: {
    StackArn?: StringProperty
  }
  BranchName: StringProperty
  BuildSpec?: StringProperty
  ComputeRoleArn?: StringProperty
  Description?: StringProperty
  EnableAutoBuild?: boolean
  EnablePerformanceMode?: boolean
  EnablePullRequestPreview?: boolean
  EnableSkewProtection?: boolean
  EnvironmentVariables?: {
    Name: StringProperty
    Value: StringProperty
  }[]
  Framework?: StringProperty
  PullRequestEnvironmentName?: StringProperty
  Stage?: (string | "EXPERIMENTAL" | "BETA" | "PULL_REQUEST" | "PRODUCTION" | "DEVELOPMENT")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSAmplifyBranch = ({
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
      Type: 'AWS::Amplify::Branch',
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