import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AssessmentTargetArn: StringProperty
  DurationInSeconds: number
  AssessmentTemplateName?: StringProperty
  RulesPackageArns: StringProperty[]
  UserAttributesForFindings?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSInspectorAssessmentTemplate = ({
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
      Type: 'AWS::Inspector::AssessmentTemplate',
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