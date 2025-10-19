import {StringProperty} from "../StringProperty"


type Properties = {
  DataProviderName?: StringProperty
  DataProviderIdentifier?: StringProperty
  DataProviderArn?: StringProperty
  DataProviderCreationTime?: StringProperty
  Description?: StringProperty
  Engine: (string | "aurora" | "aurora_postgresql" | "mysql" | "oracle" | "postgres" | "sqlserver" | "redshift" | "mariadb" | "mongodb" | "docdb" | "db2" | "db2_zos")
  ExactSettings?: boolean
  Settings?: {
    PostgreSqlSettings?: {
      ServerName: StringProperty
      Port: number
      DatabaseName: StringProperty
      SslMode: (string | "none" | "require" | "verify-ca" | "verify-full")
      CertificateArn?: StringProperty
    }
    MySqlSettings?: {
      ServerName: StringProperty
      Port: number
      SslMode: (string | "none" | "require" | "verify-ca" | "verify-full")
      CertificateArn?: StringProperty
    }
    OracleSettings?: {
      ServerName: StringProperty
      Port: number
      DatabaseName: StringProperty
      SslMode: (string | "none" | "require" | "verify-ca" | "verify-full")
      CertificateArn?: StringProperty
      AsmServer?: StringProperty
      SecretsManagerOracleAsmSecretId?: StringProperty
      SecretsManagerOracleAsmAccessRoleArn?: StringProperty
      SecretsManagerSecurityDbEncryptionSecretId?: StringProperty
      SecretsManagerSecurityDbEncryptionAccessRoleArn?: StringProperty
    }
    MicrosoftSqlServerSettings?: {
      ServerName: StringProperty
      Port: number
      DatabaseName: StringProperty
      SslMode: (string | "none" | "require" | "verify-ca" | "verify-full")
      CertificateArn?: StringProperty
    }
    RedshiftSettings?: {
      ServerName: StringProperty
      Port: number
      DatabaseName: StringProperty
    }
    MariaDbSettings?: {
      ServerName: StringProperty
      Port: number
      SslMode: (string | "none" | "require" | "verify-ca" | "verify-full")
      CertificateArn?: StringProperty
    }
    DocDbSettings?: {
      ServerName: StringProperty
      Port: number
      DatabaseName: StringProperty
      SslMode?: (string | "none" | "require" | "verify-full")
      CertificateArn?: StringProperty
    }
    MongoDbSettings?: {
      ServerName: StringProperty
      Port: number
      DatabaseName?: StringProperty
      SslMode?: (string | "none" | "require" | "verify-full")
      CertificateArn?: StringProperty
      AuthType?: (string | "no" | "password")
      AuthSource?: StringProperty
      AuthMechanism?: (string | "default" | "mongodb_cr" | "scram_sha_1")
    }
    IbmDb2LuwSettings?: {
      ServerName: StringProperty
      Port: number
      DatabaseName: StringProperty
      SslMode: (string | "none" | "verify-ca")
      CertificateArn?: StringProperty
    }
    IbmDb2zOsSettings?: {
      ServerName: StringProperty
      Port: number
      DatabaseName: StringProperty
      SslMode: (string | "none" | "verify-ca")
      CertificateArn?: StringProperty
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDMSDataProvider = ({
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
      Type: 'AWS::DMS::DataProvider',
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