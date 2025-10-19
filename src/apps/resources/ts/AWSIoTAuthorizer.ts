import {StringProperty} from "../StringProperty"


type Properties = {
  AuthorizerFunctionArn: StringProperty
  Arn?: StringProperty
  AuthorizerName?: StringProperty
  SigningDisabled?: boolean
  Status?: (string | "ACTIVE" | "INACTIVE")
  TokenKeyName?: StringProperty
  TokenSigningPublicKeys?: Record<string, any>
  EnableCachingForHttp?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTAuthorizer = ({
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
      Type: 'AWS::IoT::Authorizer',
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