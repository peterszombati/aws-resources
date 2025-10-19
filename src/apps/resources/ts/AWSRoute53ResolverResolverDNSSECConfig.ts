import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  OwnerId?: StringProperty
  ResourceId?: StringProperty
  ValidationStatus?: (string | "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED")
}

export const AWSRoute53ResolverResolverDNSSECConfig = ({
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
      Type: 'AWS::Route53Resolver::ResolverDNSSECConfig',
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