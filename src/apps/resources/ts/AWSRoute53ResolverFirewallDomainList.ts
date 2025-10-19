import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  Name?: StringProperty
  DomainCount?: number
  Status?: (string | "COMPLETE" | "DELETING" | "UPDATING" | "COMPLETE_IMPORT_FAILED" | "IMPORTING" | "INACTIVE_OWNER_ACCOUNT_CLOSED")
  StatusMessage?: StringProperty
  ManagedOwnerName?: StringProperty
  CreatorRequestId?: StringProperty
  CreationTime?: StringProperty
  ModificationTime?: StringProperty
  Domains?: StringProperty[]
  DomainFileUrl?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRoute53ResolverFirewallDomainList = ({
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
      Type: 'AWS::Route53Resolver::FirewallDomainList',
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