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
  ProvisioningType?: (string | "NON_PROVISIONABLE" | "IMMUTABLE" | "FULLY_MUTABLE")
  SchemaHandlerPackage: StringProperty
  TypeName: StringProperty
  VersionId?: StringProperty
  Visibility?: (string | "PUBLIC" | "PRIVATE")
}

export const AWSCloudFormationResourceVersion = ({
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
      Type: 'AWS::CloudFormation::ResourceVersion',
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