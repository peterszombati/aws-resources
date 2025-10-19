import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ElasticLoadBalancerName: StringProperty
  LayerId: StringProperty
}

export const AWSOpsWorksElasticLoadBalancerAttachment = ({
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
      Type: 'AWS::OpsWorks::ElasticLoadBalancerAttachment',
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