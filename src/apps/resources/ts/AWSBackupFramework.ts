import {StringProperty} from "../StringProperty"


type Properties = {
  FrameworkName?: StringProperty
  FrameworkDescription?: StringProperty
  FrameworkArn?: StringProperty
  DeploymentStatus?: StringProperty
  CreationTime?: StringProperty
  FrameworkControls: {
    ControlName: StringProperty
    ControlInputParameters?: {
      ParameterName: StringProperty
      ParameterValue: StringProperty
    }[]
    ControlScope?: {
      ComplianceResourceIds?: StringProperty[]
      ComplianceResourceTypes?: StringProperty[]
      Tags?: {
        Key?: StringProperty
        Value?: StringProperty
      }[]
    }
  }[]
  FrameworkStatus?: StringProperty
  FrameworkTags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSBackupFramework = ({
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
      Type: 'AWS::Backup::Framework',
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