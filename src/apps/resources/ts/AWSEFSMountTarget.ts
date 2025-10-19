import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  IpAddress?: StringProperty
  Ipv6Address?: StringProperty
  IpAddressType?: (string | "IPV4_ONLY" | "IPV6_ONLY" | "DUAL_STACK")
  FileSystemId: StringProperty
  SecurityGroups: StringProperty[]
  SubnetId: StringProperty
}

export const AWSEFSMountTarget = ({
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
      Type: 'AWS::EFS::MountTarget',
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