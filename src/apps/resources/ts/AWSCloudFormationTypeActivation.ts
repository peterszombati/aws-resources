import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ExecutionRoleArn?: StringProperty
  PublisherId?: StringProperty
  LoggingConfig?: {
    LogGroupName?: StringProperty
    LogRoleArn?: StringProperty
  }
  PublicTypeArn?: StringProperty
  AutoUpdate?: boolean
  TypeNameAlias?: StringProperty
  VersionBump?: (string | "MAJOR" | "MINOR")
  MajorVersion?: StringProperty
  TypeName?: StringProperty
  Type?: (string | "RESOURCE" | "MODULE" | "HOOK")
}

export const AWSCloudFormationTypeActivation = ({
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
      Type: 'AWS::CloudFormation::TypeActivation',
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