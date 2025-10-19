import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Name: StringProperty
  XssMatchTuples: {
    FieldToMatch: {
      Data?: StringProperty
      Type: StringProperty
    }
    TextTransformation: StringProperty
  }[]
}

export const AWSWAFXssMatchSet = ({
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
      Type: 'AWS::WAF::XssMatchSet',
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