import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  TypeArn?: StringProperty
  ExecutionRoleArn?: StringProperty
  IsDefaultVersion?: boolean
  LoggingConfig?: {
    LogGroupName?: StringProperty
    LogRoleArn?: StringProperty
  }
  SchemaHandlerPackage: StringProperty
  TypeName: StringProperty
  VersionId?: StringProperty
  Visibility?: (string | "PUBLIC" | "PRIVATE")
}

export const AWSCloudFormationHookVersion = ({
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
      Type: 'AWS::CloudFormation::HookVersion',
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