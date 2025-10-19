import {StringProperty} from "../StringProperty"


type Properties = {
  APIKeyId?: StringProperty
  CustomerId?: StringProperty
  Description?: StringProperty
  Enabled?: boolean
  GenerateDistinctId?: boolean
  Name?: StringProperty
  StageKeys?: {
    RestApiId?: StringProperty
    StageName?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Value?: StringProperty
}

export const AWSApiGatewayApiKey = ({
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
      Type: 'AWS::ApiGateway::ApiKey',
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