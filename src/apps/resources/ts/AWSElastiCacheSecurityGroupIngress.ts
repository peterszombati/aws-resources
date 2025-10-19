import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  CacheSecurityGroupName: StringProperty
  EC2SecurityGroupName: StringProperty
  EC2SecurityGroupOwnerId?: StringProperty
}

export const AWSElastiCacheSecurityGroupIngress = ({
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
      Type: 'AWS::ElastiCache::SecurityGroupIngress',
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