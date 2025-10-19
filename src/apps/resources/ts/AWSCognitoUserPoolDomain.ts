import {StringProperty} from "../StringProperty"


type Properties = {
  UserPoolId: StringProperty
  Domain: StringProperty
  CustomDomainConfig?: {
    CertificateArn?: StringProperty
  }
  CloudFrontDistribution?: StringProperty
  ManagedLoginVersion?: number
}

export const AWSCognitoUserPoolDomain = ({
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
      Type: 'AWS::Cognito::UserPoolDomain',
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