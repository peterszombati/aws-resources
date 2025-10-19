import {StringProperty} from "../StringProperty"


type Properties = {
  ProtectionGroupId: StringProperty
  ProtectionGroupArn?: StringProperty
  Aggregation: (string | "SUM" | "MEAN" | "MAX")
  Pattern: (string | "ALL" | "ARBITRARY" | "BY_RESOURCE_TYPE")
  Members?: StringProperty[]
  ResourceType?: (string | "CLOUDFRONT_DISTRIBUTION" | "ROUTE_53_HOSTED_ZONE" | "ELASTIC_IP_ALLOCATION" | "CLASSIC_LOAD_BALANCER" | "APPLICATION_LOAD_BALANCER" | "GLOBAL_ACCELERATOR")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSShieldProtectionGroup = ({
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
      Type: 'AWS::Shield::ProtectionGroup',
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