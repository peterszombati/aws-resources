import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ResolverQueryLogConfigId?: StringProperty
  ResourceId?: StringProperty
  Status?: (string | "CREATING" | "ACTIVE" | "ACTION_NEEDED" | "DELETING" | "FAILED" | "OVERRIDDEN")
  Error?: (string | "NONE" | "DESTINATION_NOT_FOUND" | "ACCESS_DENIED")
  ErrorMessage?: StringProperty
  CreationTime?: StringProperty
}

export const AWSRoute53ResolverResolverQueryLoggingConfigAssociation = ({
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
      Type: 'AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation',
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