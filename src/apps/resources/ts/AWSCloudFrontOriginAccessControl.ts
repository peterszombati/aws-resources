import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  OriginAccessControlConfig: {
    Description?: StringProperty
    Name: StringProperty
    OriginAccessControlOriginType: StringProperty
    SigningBehavior: StringProperty
    SigningProtocol: StringProperty
  }
}

export const AWSCloudFrontOriginAccessControl = ({
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
      Type: 'AWS::CloudFront::OriginAccessControl',
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