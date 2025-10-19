import {StringProperty} from "../StringProperty"


type Properties = {
  VPCId: StringProperty
  ResolverRuleId: StringProperty
  ResolverRuleAssociationId?: StringProperty
  Name?: StringProperty
}

export const AWSRoute53ResolverResolverRuleAssociation = ({
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
      Type: 'AWS::Route53Resolver::ResolverRuleAssociation',
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