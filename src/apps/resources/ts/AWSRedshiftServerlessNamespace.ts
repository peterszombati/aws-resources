import {StringProperty} from "../StringProperty"


type Properties = {
  AdminPasswordSecretKmsKeyId?: StringProperty
  AdminUserPassword?: StringProperty
  AdminUsername?: StringProperty
  DbName?: StringProperty
  DefaultIamRoleArn?: StringProperty
  IamRoles?: StringProperty[]
  KmsKeyId?: StringProperty
  LogExports?: (string | "useractivitylog" | "userlog" | "connectionlog")[]
  ManageAdminPassword?: boolean
  Namespace?: {
    NamespaceArn?: StringProperty
    NamespaceId?: StringProperty
    NamespaceName?: StringProperty
    AdminUsername?: StringProperty
    DbName?: StringProperty
    KmsKeyId?: StringProperty
    DefaultIamRoleArn?: StringProperty
    IamRoles?: StringProperty[]
    LogExports?: (string | "useractivitylog" | "userlog" | "connectionlog")[]
    Status?: (string | "AVAILABLE" | "MODIFYING" | "DELETING")
    CreationDate?: StringProperty
    AdminPasswordSecretArn?: StringProperty
    AdminPasswordSecretKmsKeyId?: StringProperty
  }
  NamespaceName: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  FinalSnapshotName?: StringProperty
  FinalSnapshotRetentionPeriod?: number
  NamespaceResourcePolicy?: Record<string, any>
  RedshiftIdcApplicationArn?: StringProperty
  SnapshotCopyConfigurations?: {
    DestinationRegion: StringProperty
    DestinationKmsKeyId?: StringProperty
    SnapshotRetentionPeriod?: number
  }[]
}

export const AWSRedshiftServerlessNamespace = ({
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
      Type: 'AWS::RedshiftServerless::Namespace',
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