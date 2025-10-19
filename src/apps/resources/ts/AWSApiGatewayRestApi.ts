import {StringProperty} from "../StringProperty"


type Properties = {
  Policy?: Record<string, any> | StringProperty
  BodyS3Location?: {
    Bucket?: StringProperty
    ETag?: StringProperty
    Version?: StringProperty
    Key?: StringProperty
  }
  Description?: StringProperty
  MinimumCompressionSize?: number
  Parameters?: Record<string, any> | StringProperty
  CloneFrom?: StringProperty
  Mode?: StringProperty
  RestApiId?: StringProperty
  DisableExecuteApiEndpoint?: boolean
  FailOnWarnings?: boolean
  BinaryMediaTypes?: StringProperty[]
  Name?: StringProperty
  RootResourceId?: StringProperty
  ApiKeySourceType?: StringProperty
  EndpointConfiguration?: {
    IpAddressType?: StringProperty
    Types?: StringProperty[]
    VpcEndpointIds?: StringProperty[]
  }
  Body?: Record<string, any> | StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSApiGatewayRestApi = ({
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
      Type: 'AWS::ApiGateway::RestApi',
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