import {StringProperty} from "../StringProperty"


type Properties = {
  PrefixListName: StringProperty
  PrefixListId?: StringProperty
  OwnerId?: StringProperty
  AddressFamily: (string | "IPv4" | "IPv6")
  MaxEntries?: number
  Version?: number
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  Entries?: {
    Cidr: StringProperty
    Description?: StringProperty
  }[]
  Arn?: StringProperty
}

export const AWSEC2PrefixList = ({
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
      Type: 'AWS::EC2::PrefixList',
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