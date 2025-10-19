import {StringProperty} from "../StringProperty"


type Properties = {
  VpcLinkId?: StringProperty
  SubnetIds: StringProperty[]
  SecurityGroupIds?: StringProperty[]
  Tags?: Record<string, any>
  Name: StringProperty
}

export const AWSApiGatewayV2VpcLink = ({
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
      Type: 'AWS::ApiGatewayV2::VpcLink',
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