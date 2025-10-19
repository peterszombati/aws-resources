import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Alias?: StringProperty
  DnsIpAddresses?: StringProperty[]
  CreateAlias?: boolean
  Description?: StringProperty
  EnableSso?: boolean
  Name: StringProperty
  Password: StringProperty
  ShortName?: StringProperty
  Size: StringProperty
  VpcSettings: {
    SubnetIds: StringProperty[]
    VpcId: StringProperty
  }
}

export const AWSDirectoryServiceSimpleAD = ({
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
      Type: 'AWS::DirectoryService::SimpleAD',
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