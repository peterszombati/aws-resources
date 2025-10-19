import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  AllowedPublishers: {
    SigningProfileVersionArns: StringProperty[]
  }
  CodeSigningPolicies?: {
    UntrustedArtifactOnDeployment: (string | "Warn" | "Enforce")
  }
  CodeSigningConfigId?: StringProperty
  CodeSigningConfigArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSLambdaCodeSigningConfig = ({
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
      Type: 'AWS::Lambda::CodeSigningConfig',
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