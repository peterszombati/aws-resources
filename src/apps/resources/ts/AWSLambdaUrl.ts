import {StringProperty} from "../StringProperty"


type Properties = {
  TargetFunctionArn: StringProperty
  Qualifier?: StringProperty
  AuthType: (string | "AWS_IAM" | "NONE")
  InvokeMode?: (string | "BUFFERED" | "RESPONSE_STREAM")
  FunctionArn?: StringProperty
  FunctionUrl?: StringProperty
  Cors?: {
    AllowCredentials?: boolean
    AllowHeaders?: StringProperty[]
    AllowMethods?: (string | "GET" | "PUT" | "HEAD" | "POST" | "PATCH" | "DELETE" | "*")[]
    AllowOrigins?: StringProperty[]
    ExposeHeaders?: StringProperty[]
    MaxAge?: number
  }
}

export const AWSLambdaUrl = ({
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
      Type: 'AWS::Lambda::Url',
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