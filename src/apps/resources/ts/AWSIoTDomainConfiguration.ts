import {StringProperty} from "../StringProperty"


type Properties = {
  DomainConfigurationName?: StringProperty
  AuthorizerConfig?: {
    AllowAuthorizerOverride?: boolean
    DefaultAuthorizerName?: StringProperty
  }
  DomainName?: StringProperty
  ServerCertificateArns?: StringProperty[]
  ServiceType?: (string | "DATA" | "CREDENTIAL_PROVIDER" | "JOBS")
  ValidationCertificateArn?: StringProperty
  Arn?: StringProperty
  DomainConfigurationStatus?: (string | "ENABLED" | "DISABLED")
  DomainType?: (string | "ENDPOINT" | "AWS_MANAGED" | "CUSTOMER_MANAGED")
  ServerCertificateConfig?: {
    EnableOCSPCheck?: boolean
    OcspLambdaArn?: StringProperty
    OcspAuthorizedResponderArn?: StringProperty
  }
  ServerCertificates?: {
    ServerCertificateArn?: StringProperty
    ServerCertificateStatus?: (string | "INVALID" | "VALID")
    ServerCertificateStatusDetail?: StringProperty
  }[]
  TlsConfig?: {
    SecurityPolicy?: StringProperty
  }
  AuthenticationType?: (string | "AWS_X509" | "CUSTOM_AUTH" | "AWS_SIGV4" | "CUSTOM_AUTH_X509" | "DEFAULT")
  ApplicationProtocol?: (string | "SECURE_MQTT" | "MQTT_WSS" | "HTTPS" | "DEFAULT")
  ClientCertificateConfig?: {
    ClientCertificateCallbackArn?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTDomainConfiguration = ({
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
      Type: 'AWS::IoT::DomainConfiguration',
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