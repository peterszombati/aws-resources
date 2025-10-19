import {StringProperty} from "../StringProperty"


type Properties = {
  ResourceARN?: StringProperty
  SvmAdminPassword?: StringProperty
  StorageVirtualMachineId?: StringProperty
  ActiveDirectoryConfiguration?: {
    SelfManagedActiveDirectoryConfiguration?: {
      FileSystemAdministratorsGroup?: StringProperty
      UserName?: StringProperty
      DomainName?: StringProperty
      OrganizationalUnitDistinguishedName?: StringProperty
      DnsIps?: StringProperty[]
      Password?: StringProperty
    }
    NetBiosName?: StringProperty
  }
  RootVolumeSecurityStyle?: StringProperty
  FileSystemId: StringProperty
  UUID?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name: StringProperty
}

export const AWSFSxStorageVirtualMachine = ({
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
      Type: 'AWS::FSx::StorageVirtualMachine',
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