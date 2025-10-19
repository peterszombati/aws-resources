import {StringProperty} from "../StringProperty"


type Properties = {
  Auth?: {
    AuthScheme?: (string | "SECRETS")
    Description?: StringProperty
    IAMAuth?: (string | "DISABLED" | "REQUIRED" | "ENABLED")
    SecretArn?: StringProperty
    ClientPasswordAuthType?: (string | "MYSQL_NATIVE_PASSWORD" | "MYSQL_CACHING_SHA2_PASSWORD" | "POSTGRES_SCRAM_SHA_256" | "POSTGRES_MD5" | "SQL_SERVER_AUTHENTICATION")
  }[]
  DBProxyArn?: StringProperty
  DBProxyName: StringProperty
  DebugLogging?: boolean
  DefaultAuthScheme?: (string | "IAM_AUTH" | "NONE")
  Endpoint?: StringProperty
  EndpointNetworkType?: (string | "IPV4" | "IPV6" | "DUAL")
  EngineFamily: (string | "MYSQL" | "POSTGRESQL" | "SQLSERVER")
  IdleClientTimeout?: number
  RequireTLS?: boolean
  RoleArn: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  TargetConnectionNetworkType?: (string | "IPV4" | "IPV6")
  VpcId?: StringProperty
  VpcSecurityGroupIds?: StringProperty[]
  VpcSubnetIds: StringProperty[]
}

export const AWSRDSDBProxy = ({
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
      Type: 'AWS::RDS::DBProxy',
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