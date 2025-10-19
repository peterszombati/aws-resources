import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Description?: StringProperty
  Name?: StringProperty
  Id?: StringProperty
  RegularExpressionList: StringProperty[]
  Scope: (string | "CLOUDFRONT" | "REGIONAL")
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSWAFv2RegexPatternSet = ({
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
      Type: 'AWS::WAFv2::RegexPatternSet',
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