import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  GeoMatchConstraints?: {
    Type: StringProperty
    Value: StringProperty
  }[]
  Name: StringProperty
}

export const AWSWAFRegionalGeoMatchSet = ({
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
      Type: 'AWS::WAFRegional::GeoMatchSet',
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