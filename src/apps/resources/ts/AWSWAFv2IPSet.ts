import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Description?: StringProperty
  Name?: StringProperty
  Id?: StringProperty
  Scope: (string | "CLOUDFRONT" | "REGIONAL")
  IPAddressVersion: (string | "IPV4" | "IPV6")
  Addresses: StringProperty[]
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSWAFv2IPSet = ({
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
      Type: 'AWS::WAFv2::IPSet',
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