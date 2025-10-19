import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  CreatorRequestId?: StringProperty
  Name: StringProperty
  Arn?: StringProperty
  OutpostArn: StringProperty
  PreferredInstanceType: StringProperty
  Status?: (string | "CREATING" | "OPERATIONAL" | "DELETING" | "UPDATING" | "ACTION_NEEDED" | "FAILED_CREATION" | "FAILED_DELETION")
  StatusMessage?: StringProperty
  InstanceCount?: number
  CreationTime?: StringProperty
  ModificationTime?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRoute53ResolverOutpostResolver = ({
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
      Type: 'AWS::Route53Resolver::OutpostResolver',
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