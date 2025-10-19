import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  XssMatchTuples?: {
    TextTransformation: StringProperty
    FieldToMatch: {
      Type: StringProperty
      Data?: StringProperty
    }
  }[]
  Name: StringProperty
}

export const AWSWAFRegionalXssMatchSet = ({
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
      Type: 'AWS::WAFRegional::XssMatchSet',
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