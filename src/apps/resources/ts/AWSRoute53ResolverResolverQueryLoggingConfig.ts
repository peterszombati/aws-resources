import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  OwnerId?: StringProperty
  Status?: (string | "CREATING" | "CREATED" | "DELETING" | "FAILED")
  ShareStatus?: (string | "NOT_SHARED" | "SHARED_WITH_ME" | "SHARED_BY_ME")
  AssociationCount?: number
  Arn?: StringProperty
  Name?: StringProperty
  CreatorRequestId?: StringProperty
  DestinationArn?: StringProperty
  CreationTime?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRoute53ResolverResolverQueryLoggingConfig = ({
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
      Type: 'AWS::Route53Resolver::ResolverQueryLoggingConfig',
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