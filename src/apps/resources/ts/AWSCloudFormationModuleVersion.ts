import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Description?: StringProperty
  DocumentationUrl?: StringProperty
  ModuleName: StringProperty
  ModulePackage: StringProperty
  IsDefaultVersion?: boolean
  Schema?: StringProperty
  TimeCreated?: StringProperty
  VersionId?: StringProperty
  Visibility?: (string | "PRIVATE")
}

export const AWSCloudFormationModuleVersion = ({
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
      Type: 'AWS::CloudFormation::ModuleVersion',
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