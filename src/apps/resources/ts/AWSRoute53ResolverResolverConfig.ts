import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  OwnerId?: StringProperty
  ResourceId: StringProperty
  AutodefinedReverse?: (string | "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED")
  AutodefinedReverseFlag: (string | "DISABLE")
}

export const AWSRoute53ResolverResolverConfig = ({
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
      Type: 'AWS::Route53Resolver::ResolverConfig',
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