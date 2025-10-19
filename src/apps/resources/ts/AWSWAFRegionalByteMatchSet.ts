import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ByteMatchTuples?: {
    TargetString?: StringProperty
    TargetStringBase64?: StringProperty
    PositionalConstraint: StringProperty
    TextTransformation: StringProperty
    FieldToMatch: {
      Type: StringProperty
      Data?: StringProperty
    }
  }[]
  Name: StringProperty
}

export const AWSWAFRegionalByteMatchSet = ({
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
      Type: 'AWS::WAFRegional::ByteMatchSet',
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