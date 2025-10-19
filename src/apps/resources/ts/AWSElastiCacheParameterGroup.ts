import {StringProperty} from "../StringProperty"


type Properties = {
  Description: StringProperty
  Properties?: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CacheParameterGroupName?: StringProperty
  CacheParameterGroupFamily: StringProperty
}

export const AWSElastiCacheParameterGroup = ({
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
      Type: 'AWS::ElastiCache::ParameterGroup',
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